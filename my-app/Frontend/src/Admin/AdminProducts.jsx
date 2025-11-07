import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const productSchema = z.object({
  name: z.string().min(2, "Product name is required"),
  price: z.number().positive("Price must be positive"),
  category: z.string().min(2, "Category is required"),
  stock: z.number().int().nonnegative("Stock must be 0 or more"),
  description: z.string().optional(),
  inStock: z.boolean().optional(),
});

function AdminProducts() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "T-Shirt",
      price: 15,
      category: "Clothing",
      stock: 30,
      
      description: "Comfortable cotton t-shirt",
      inStock: true,
    },
    {
      id: 2,
      name: "Sneakers",
      price: 60,
      category: "Shoes",
      stock: 12,
      
      description: "Stylish running sneakers",
      inStock: true,
    },
  ]);

  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data) => {
    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === editingProduct.id ? { ...p, ...data } : p))
      );
      setEditingProduct(null);
    } else {
      const newProduct = { id: Date.now(), ...data };
      setProducts([...products, newProduct]);
    }
    setShowModal(false);
    reset();
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    reset(product);
    setShowModal(true);
  };

  const openAddModal = () => {
    setEditingProduct(null);
    reset();
    setShowModal(true);
  };

  return (
    <div className="d-flex">
      <AdminSidebar />

      <div className="flex-grow-1 p-4 bg-light">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Manage Products</h2>
          <button className="btn btn-primary" onClick={openAddModal}>
            <i className="bi bi-plus-circle me-2"></i>Add Product
          </button>
        </div>

        
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="fw-bold mb-3">Product List</h5>
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  
                  <th>Name</th>
                  <th>Price ($)</th>
                  <th>Category</th>
                  <th>Stock</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center text-muted">
                      No products available.
                    </td>
                  </tr>
                ) : (
                  products.map((p) => (
                    <tr key={p.id}>
                      <td>{p.name}</td>
                      <td>{p.price}</td>
                      <td>{p.category}</td>
                      <td>{p.stock}</td>
                      <td>{p.description}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => handleEdit(p)}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(p.id)}
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

        
        {showModal && (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.4)" }}
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
                      <div className="col-md-3">
                        <label className="form-label">Price ($)</label>
                        <input
                          type="number"
                          className="form-control"
                          {...register("price", { valueAsNumber: true })}
                        />
                        {errors.price && (
                          <small className="text-danger">
                            {errors.price.message}
                          </small>
                        )}
                      </div>
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
                      <div className="col-md-12">
                        <label className="form-label">Description</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          {...register("description")}
                        ></textarea>
                      </div>
                      <div className="col-md-12 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          {...register("inStock")}
                        />
                        <label className="form-check-label ms-2">
                          In Stock
                        </label>
                      </div>
                    </div>

                    <div className="mt-4 text-end">
                      <button
                        type="button"
                        className="btn btn-secondary me-2"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary">
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
