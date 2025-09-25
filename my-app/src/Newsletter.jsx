import React from "react";

 function Newsletter() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="containerfluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 className="display-6 fw-bold mb-3">Stay in the Loop</h2>
            <p className="lead mb-4 opacity-75">
              Subscribe to our newsletter and be the first to know about new
              collections, exclusive offers, and style tips.
            </p>

            <form className="mb-3">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control border-0 text-white"
                  placeholder="Enter your email"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  required
                />
                <button className="btn btn-light px-4" type="submit">
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
