import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (!password) {
      setError("Password cannot be empty");
      return;
    }

    const foundUser = users.find(
      (u) => u.email === email && u.password === btoa(password)
    );

    if (!foundUser) {
      setError("Invalid email or password");
    } else {
      setError("");
      onLogin(foundUser);
      if (foundUser.userType === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>School Portal Login</h2>

        <input
          style={styles.input}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

// Inline styles for professional look
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    width: "400px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#333",
  },
  input: {
    width: "80%",
    padding: "12px",
    margin: "10px 0px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(90deg, #4facfe, #00f2fe)",
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  error: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "5px",
  },
};

// Add hover effect for the button
styles.button[":hover"] = {
  background: "linear-gradient(90deg, #00f2fe, #4facfe)",
};
