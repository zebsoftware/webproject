import React from "react";

function Newsletter() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container-fluid px-3 px-md-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6 text-center">
            <h2 className="display-6 fw-bold mb-3">Stay in the Loop</h2>
            <p className="lead mb-4 opacity-75">
              Subscribe to our newsletter and be the first to know about new
              collections, exclusive offers, and style tips.
            </p>

            {/* Responsive Form */}
            <form className="mb-3">
              <div className="d-flex flex-column flex-sm-row gap-2">
                <input
                  type="email"
                  className="form-control text-white"
                  placeholder="Enter your email"
                
                />
                <button
                  className="btn btn-light px-4"
                  type="submit"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Subscribe
                </button>
              </div>
            </form>

            <small className="text-muted">
              No spam, unsubscribe at any time.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
