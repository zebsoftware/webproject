function Hero() {
  return (
    <section
      className="py-5"
      style={{ background: "linear-gradient(to right, #f8f9fa, #e9ecef)" }}
    >
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-3 fw-bold text-dark mb-4 lh-base">
              Discover Your <span className="text-primary d-block">Perfect Style</span>
            </h1>
            <p className="lead text-muted mb-4" style={{ maxWidth: "400px" }}>
              Explore our curated collection of premium fashion, accessories, and lifestyle products designed for the modern individual.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <button className="btn btn-dark btn-lg d-flex align-items-center">
                Shop Now <i className="bi bi-arrow-right ms-2"></i>
              </button>
              <button className="btn btn-outline-dark btn-lg">View Collections</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative rounded-3 overflow-hidden" style={{ aspectRatio: "4/3" }}>
              {/* ✅ Correct image path for public folder */}
              <img
                src="/images/hero.png"
                alt="Modern fashion lifestyle"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute bg-dark text-white p-3 rounded-3 shadow"
                style={{ bottom: "-16px", right: "-16px" }}
              >
                <div className="text-center">
                  <small className="d-block">Up to</small>
                  <div className="h4 mb-0">50% OFF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
