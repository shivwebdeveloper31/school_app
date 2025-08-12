import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route
          path="/login"
          element={<LoginPage onLogin={setLoggedInUser} />}
        />

        {/* Admin route */}
        <Route
          path="/admin"
          element={
            loggedInUser?.userType === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Student route */}
        <Route
          path="/student"
          element={
            loggedInUser?.userType === "student" ? (
              <StudentDashboard user={loggedInUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Default route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
