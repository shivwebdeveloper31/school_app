export default function UserDetailsModal({ user, onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#fff",
      padding: "20px",
      border: "1px solid #ccc",
      zIndex: 1000
    }}>
      <h3>User Details</h3>
      <p><strong>Name:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Language:</strong> {user.language}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Standard:</strong> {user.standard}</p>
      <p><strong>Subjects:</strong> {user.subjects.join(", ")}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
