import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((u) => u.email === formData.email)) {
      alert("User already exists with this email!");
      return;
    }
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        {/* Feliciano header */}
        <h1 className="auth-header">Feliciano</h1>

        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="auth-input"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="auth-input"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="auth-input"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="auth-btn">
          Register
        </button>

        <p className="auth-footer">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
}
