 function Footer() {
  return (
    <footer className="bg-success text-white py-4">
      <div className="container">
        <div className="row">

        
          <div className="col-md-6 mb-3">
            <h5>Contact Us</h5>
            <p className="mb-1"><i className="bi bi-geo-alt-fill me-2"></i>123 Main Street, City</p>
            <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i>+92 300 1234567</p>
            <p className="mb-0"><i className="bi bi-envelope-fill me-2"></i>support@zmart.com</p>
          </div>

          
          <div className="col-md-6 mb-3">
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3 mt-2">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>

        </div>
        
      </div>
    </footer>
  );
}
export default Footer;