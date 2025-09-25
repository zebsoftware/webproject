

const discountDeals = [
  {
    id: 1,
    title: "Up to 50% off",
    subtitle: "Home essentials",
    description: "Kitchen, bath & more",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 2,
    title: "Buy 2, get 1 free",
    subtitle: "Beauty favorites",
    description: "Select skincare & makeup",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 3,
    title: "30% off",
    subtitle: "Athletic wear",
    description: "Men's & women's activewear",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1080&q=80",
  },
];

 function Discounts() {
  return (
    <section className="py-6 bg-light"style={{ paddingBottom: "60px" }}>
      <div className="container">
        
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="h4 mb-0 text-dark">Today's top deals</h2>
          <button className="btn btn-danger">See all deals</button>
        </div>

        
        <div className="row g-4">
          {discountDeals.map((deal) => (
            <div className="col-md-4" key={deal.id}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={deal.image}
                  alt={deal.subtitle}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{deal.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {deal.subtitle}
                  </h6>
                  <p className="card-text">{deal.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Discounts;
