
import { Table } from "react-bootstrap";
import AdminSidebar from "../AdminSidebar";

export default function AdminOrders() {
  const orders = [
    { id: 1, customer: "Ali", total: 120, status: "Delivered" },
    { id: 2, customer: "Sara", total: 80, status: "Pending" },
  ];

  return (
    <div className="d-flex">
      <AdminSidebar />
      <div className="container-fluid p-4">
        <h2 className="fw-bold mb-3">Manage Orders</h2>
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Total ($)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.customer}</td>
                <td>{o.total}</td>
                <td>{o.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
