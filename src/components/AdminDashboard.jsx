import { useState } from "react";
import { users } from "../data/users";
import UserDetailsModal from "./UserDetailsModal";

export default function AdminDashboard() {
  const studentList = users.filter((u) => u.userType === "student");
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredStudents = studentList.filter(
    (student) =>
      student.username.toLowerCase().includes(search.toLowerCase()) ||
      student.subjects.some((sub) =>
        sub.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Admin Dashboard</h2>

      <input
        type="text"
        placeholder="🔍 Search by name or subject"
        style={styles.searchInput}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Subjects</th>
            <th style={styles.th}>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, i) => (
            <tr key={i} style={styles.tr}>
              <td style={styles.td}>{student.username}</td>
              <td style={styles.td}>{student.email}</td>
              <td style={styles.td}>{student.subjects.join(", ")}</td>
              <td style={styles.td}>
                <button
                  style={styles.viewButton}
                  onClick={() => setSelectedUser(student)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#f4f6f8",
    minHeight: "100vh",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#333",
  },
  searchInput: {
    padding: "10px 15px",
    width: "300px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    outline: "none",
    fontSize: "1rem",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  },
  th: {
    textAlign: "left",
    padding: "12px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "500",
  },
  tr: {
    borderBottom: "1px solid #e0e0e0",
  },
  td: {
    padding: "12px 15px",
    fontSize: "0.95rem",
    color: "#333",
  },
  viewButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "background 0.3s",
  },
};
