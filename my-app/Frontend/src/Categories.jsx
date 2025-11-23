

const categories = [
  { name: "Clothing", image: "/images/clothing.png", description: "Latest fashion trends" },
  { name: "Shoes", image: "/images/shoes.png", description: "Step in style" },
  { name: "Accessories", image: "/images/accessories.png", description: "Complete your look" },
  { name: "Electronics", image: "/images/electronic.png", description: "Tech essentials" }
];

 function Categories() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Shop by Category</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Discover our wide range of products across different categories, each carefully curated for quality and style.
          </p>
        </div>
        <div className="row g-4">
          {categories.map((category, index) => (
            <div className="col-sm-6 col-lg-3" key={index}>
              <div className="card h-100 border-0 shadow-sm category-card" style={{ cursor: "pointer", transition: "all 0.3s ease" }}>
                <div className="overflow-hidden rounded-top" style={{ aspectRatio: "1/1" }}>
                  <img src={category.image} alt={category.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
                </div>
                <div className="card-body text-center p-4">
                  <h5 className="text-dark mb-2">{category.name}</h5>
                  <p className="text-muted small">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Categories;
