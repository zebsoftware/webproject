import React, { useState, useEffect, useCallback } from "react";
import AdminSidebar from "../AdminSidebar"; 
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct,
} from "../services/AdminProductService"; 

// --- Zod Schema Updated to match MongoDB Model ---
const productSchema = z.object({
    name: z.string().min(2, "Product name is required"),
    price: z.number().positive("Price must be positive"),
    originalPrice: z.number().positive("Original price must be positive").optional().nullable(),
    category: z.string().min(2, "Category is required"),
    stock: z.number().int().nonnegative("Stock must be 0 or more"),
    description: z.string().optional(),
    inStock: z.boolean().optional(), 
    isNewItem: z.boolean().optional(), 
    isSale: z.boolean().optional(),    
    // Zod's any() is used for files; validation happens via the onChange check below.
    image: z.any().optional(), 
}).refine(data => {
    // Custom validation: If isSale is true, originalPrice must be provided and greater than price
    if (data.isSale && (!data.originalPrice || data.originalPrice <= data.price)) {
        return false;
    }
    return true;
}, {
    message: "If on sale, original price must be greater than current price.",
    path: ["originalPrice"],
});

function AdminProducts() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [loading, setLoading] = useState(false);
    
    // 🎯 FIX 1: Corrected API_BASE_URL definition
    const API_BASE_URL = "https://backend-16lc.onrender.com";
 

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        getValues
    } = useForm({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            price: 0,
            originalPrice: null,
            category: "",
            stock: 0,
            description: "",
            inStock: true,
            isNewItem: false,
            isSale: false,
            image: undefined,
        }
    });

    // Fetch products on mount
    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            const res = await getAllProducts();
            
            // 🎯 FIX 2: Correctly accessing the array at res.data.data (based on controller)
            setProducts(res.data); 
            
            console.log("Products fetched successfully from backend");
        } catch (err) {
            console.error("Error fetching products:", err.message);
            // Ensure products is an array even on error to prevent crash
            setProducts([]);
        } finally {
            setLoading(false);
        }
    }, []);
        
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    // Add or Edit product
    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const formData = new FormData();
            
            // 1. Process all fields and append to FormData
            Object.keys(data).forEach((key) => {
                if (key === "image") {
                    // Only append the file if a new file is selected
                    if (data.image?.[0]) {
                        formData.append("image", data.image[0]);
                    }
                } else if (data[key] !== null && data[key] !== undefined) {
                    // Convert everything else to string for FormData transport
                    if (typeof data[key] === 'boolean') {
                        formData.append(key, data[key] ? 'true' : 'false');
                    } else if (typeof data[key] === 'number') {
                        formData.append(key, data[key].toString());
                    } else {
                        formData.append(key, data[key]);
                    }
                }
            });
            
            // 2. Call API
            if (editingProduct) {
                await updateProduct(editingProduct._id, formData);
                console.log(`Product ${editingProduct._id} updated successfully`);
            } else {
                await addProduct(formData);
                console.log("Product added successfully");
            }

            // 3. Cleanup
            setShowModal(false);
            reset();
            setPreviewImage(null);
            setEditingProduct(null);
            fetchProducts();
        } catch (err) {
            console.error("Error saving product:", err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;
        try {
            setLoading(true);
            await deleteProduct(id);
            console.log(`Product ${id} deleted successfully`);
            fetchProducts();
        } catch (err) {
            console.error(`Error deleting product ${id}:`, err);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        // Prepare form data for editing
        reset({
            ...product,
            price: Number(product.price),
            originalPrice: product.originalPrice ? Number(product.originalPrice) : null,
            stock: Number(product.stock),
            // Important: We reset the image field to undefined so the user must select a new file 
            // if they want to change the image.
            image: undefined, 
        });
        
        // 🎯 FIX 3: Construct preview URL correctly using API_BASE_URL and stored path
        setPreviewImage(product.image ? `${API_BASE_URL}${product.image}` : null);
        setShowModal(true);
    };

    const openAddModal = () => {
        setEditingProduct(null);
        reset(); // Reset form fields to default values
        setPreviewImage(null);
        setShowModal(true);
    };

    return (
        <div className="d-flex">
            <AdminSidebar />

            <div className="flex-grow-1 p-4 bg-light">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold">Manage Products</h2>
                    <button className="btn btn-primary" onClick={openAddModal} disabled={loading}>
                        <i className="bi bi-plus-circle me-2"></i>Add Product
                    </button>
                </div>
                
                {loading && (
                    <div className="alert alert-info text-center" role="alert">
                        {editingProduct ? 'Updating product...' : 'Loading products...'}
                    </div>
                )}

                {/* Product Table */}
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h5 className="fw-bold mb-3">Product List</h5>
                        <table className="table table-bordered align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price ($)</th>
                                    <th>Original Price</th>
                                    <th>Category</th>
                                    <th>Stock</th>
                                    <th>New</th>
                                    <th>Sale</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products?.length === 0 ? (
                                    <tr>
                                        <td colSpan="9" className="text-center text-muted">
                                            {loading ? "Fetching products..." : "No products available."}
                                        </td>
                                    </tr>
                                ) : (
                                    products?.map((p) => (
                                        <tr key={p._id}>
                                            <td>
                                                {p.image ? (
                                                    <img
                                                        // 🎯 FIX 3A: Use the full path saved in the database 
                                                        src={`${API_BASE_URL}${p.image}`} 
                                                        alt={p.name}
                                                        style={{
                                                            width: "60px",
                                                            height: "60px",
                                                            objectFit: "cover",
                                                            borderRadius: "5px",
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="text-muted small">No Image</div>
                                                )}
                                            </td>
                                            <td>{p.name}</td>
                                            <td>{p.price.toFixed(2)}</td>
                                            <td className={p.isSale ? 'text-decoration-line-through text-danger' : 'text-muted'}>
                                                {p.originalPrice ? p.originalPrice.toFixed(2) : 'N/A'}
                                            </td>
                                            <td>{p.category}</td>
                                            <td>
                                                <span className={`badge ${p.stock > 10 ? 'bg-success' : p.stock > 0 ? 'bg-warning' : 'bg-danger'}`}>
                                                    {p.stock}
                                                </span>
                                            </td>
                                            <td>
                                                {p.isNewItem ? <i className="bi bi-check-circle-fill text-primary"></i> : <i className="bi bi-x-circle text-muted"></i>}
                                            </td>
                                            <td>
                                                {p.isSale ? <i className="bi bi-tag-fill text-danger"></i> : <i className="bi bi-tag text-muted"></i>}
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-warning me-2"
                                                    onClick={() => handleEdit(p)}
                                                    disabled={loading}
                                                >
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handleDelete(p._id)}
                                                    disabled={loading}
                                                >
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Modal */}
                {showModal && (
                    <div
                        className="modal fade show"
                        style={{
                            display: "block",
                            backgroundColor: "rgba(0,0,0,0.4)",
                        }}
                    >
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        {editingProduct ? "Edit Product" : "Add New Product"}
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setShowModal(false)}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row g-3">
                                            {/* Name */}
                                            <div className="col-md-6">
                                                <label className="form-label">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    {...register("name")}
                                                />
                                                {errors.name && (
                                                    <small className="text-danger">
                                                        {errors.name.message}
                                                    </small>
                                                )}
                                            </div>
                                            {/* Price */}
                                            <div className="col-md-3">
                                                <label className="form-label">Price ($)</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    step="0.01"
                                                    {...register("price", { valueAsNumber: true })}
                                                />
                                                {errors.price && (
                                                    <small className="text-danger">
                                                        {errors.price.message}
                                                    </small>
                                                )}
                                            </div>
                                            {/* Stock */}
                                            <div className="col-md-3">
                                                <label className="form-label">Stock</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    {...register("stock", { valueAsNumber: true })}
                                                />
                                                {errors.stock && (
                                                    <small className="text-danger">
                                                        {errors.stock.message}
                                                    </small>
                                                )}
                                            </div>
                                            {/* Original Price (for sale items) */}
                                            <div className="col-md-6">
                                                <label className="form-label">Original Price ($) <small className="text-muted">(for sale)</small></label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    step="0.01"
                                                    {...register("originalPrice", { valueAsNumber: true })}
                                                    // Disable if 'On Sale' checkbox is not checked (requires watching state, but getValues is simpler here)
                                                    disabled={!getValues('isSale')} 
                                                />
                                                {errors.originalPrice && (
                                                    <small className="text-danger">
                                                        {errors.originalPrice.message}
                                                    </small>
                                                )}
                                            </div>
                                            {/* Category */}
                                            <div className="col-md-6">
                                                <label className="form-label">Category</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    {...register("category")}
                                                />
                                                {errors.category && (
                                                    <small className="text-danger">
                                                        {errors.category.message}
                                                    </small>
                                                )}
                                            </div>
                                            {/* Description */}
                                            <div className="col-md-12">
                                                <label className="form-label">Description</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="3"
                                                    {...register("description")}
                                                ></textarea>
                                            </div>
                                            {/* Image Upload and Preview */}
                                            <div className="col-md-6">
                                                <label className="form-label">Product Image</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    accept="image/*"
                                                    {...register("image")}
                                                    onChange={(e) => {
                                                        const file = e.target.files[0];
                                                        // Manually set preview for new file selection
                                                        setPreviewImage(
                                                            file ? URL.createObjectURL(file) : (editingProduct ? `${API_BASE_URL}${editingProduct.image}` : null)
                                                        );
                                                    }}
                                                />
                                                {errors.image && (
                                                    <small className="text-danger">
                                                        {errors.image.message}
                                                    </small>
                                                )}
                                                {previewImage && (
                                                    <div className="mt-3">
                                                        <img
                                                            src={previewImage}
                                                            alt="Preview"
                                                            style={{ maxWidth: "200px", maxHeight: "200px", objectFit: "cover" }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            {/* Checkboxes */}
                                            <div className="col-md-6 d-flex flex-column justify-content-start pt-3">
                                                <div className="form-check mb-2">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        {...register("inStock")}
                                                    />
                                                    <label className="form-check-label ms-2">In Stock</label>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        {...register("isNewItem")}
                                                    />
                                                    <label className="form-check-label ms-2">New Item</label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        {...register("isSale")}
                                                    />
                                                    <label className="form-check-label ms-2">On Sale</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 text-end">
                                            <button
                                                type="button"
                                                className="btn btn-secondary me-2"
                                                onClick={() => setShowModal(false)}
                                                disabled={loading}
                                            >
                                                Cancel
                                            </button>
                                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                                {editingProduct ? "Update" : "Add Product"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminProducts;