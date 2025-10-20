import React from "react";

export default function Contact() {
  return (
    <div className="container py-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">Contact Us</h2>
        <p className="text-muted">
          We’d love to hear from you! Whether you have a question, feedback, or need help — 
          our team is always ready to assist you.
        </p>
      </div>

      {/* Contact Form */}
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="bg-white p-4 shadow-sm rounded border">
            <h5 className="fw-bold mb-4 text-center text-primary">Send Us a Message</h5>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button className="btn btn-primary w-100 py-2 fw-semibold mb-4">
                <i className="bi bi-send me-2"></i> Send Message
              </button>

              {/* Social Media Icons */}
              <div className="text-center mb-4">
                <h6 className="fw-bold text-muted mb-3">Connect With Us</h6>
                <i className="bi bi-facebook text-primary fs-4 me-3"></i>
                <i className="bi bi-instagram text-danger fs-4 me-3"></i>
                <i className="bi bi-twitter-x fs-4 me-3"></i>
                <i className="bi bi-linkedin text-primary fs-4"></i>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
