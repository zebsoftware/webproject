
import { Table } from "react-bootstrap";
import AdminSidebar from "../AdminSidebar";

export default function AdminUsers() {
  const users = [
    { id: 1, name: "Ali", email: "ali@gmail.com", role: "Customer" },
    { id: 2, name: "Admin", email: "admin@mystore.com", role: "Admin" },
  ];

  return (
    <div className="d-flex">
      <AdminSidebar />
      <div className="container-fluid p-4">
        <h2 className="fw-bold mb-3">User Management</h2>
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
