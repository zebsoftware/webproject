

const categories = [
  { name: "Clothing", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1080", description: "Latest fashion trends" },
  { name: "Shoes", image: "https://images.unsplash.com/photo-1662037130147-76ed96202474?w=1080", description: "Step in style" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1705909237050-7a7625b47fac?w=1080", description: "Complete your look" },
  { name: "Electronics", image: "https://images.unsplash.com/photo-1645684084216-b52ba9e12aaf?w=1080", description: "Tech essentials" }
];

export default function Categories() {
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
