import AdminSidebar from "../AdminSidebar";


export default function AdminDashboard() {
  return (
    <div className="d-flex">
        <AdminSidebar />
      <div className="container-fluid p-4">
        <h2 className="fw-bold mb-4">Dashboard Overview</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5>Total Products</h5>
                <h3>120</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5>Orders</h5>
                <h3>450</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5>Users</h5>
                <h3>89</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5>Revenue</h5>
                <h3>$12,000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
