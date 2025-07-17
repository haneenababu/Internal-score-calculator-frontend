import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {
  const navigate = useNavigate();
  const [login, changeLogin] = useState({ username: "", password: "" });

  const inputHandler = (e) => {
    changeLogin({ ...login, [e.target.name]: e.target.value });
  };

  const readValues = () => {
    console.log(login);
    if (login.username === "admin" && login.password === "12345") {
      navigate("/internalmarks");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ backgroundColor: '#aba6a6ff', minHeight: '100vh' }}>
      
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
        <div className="card p-4 shadow-lg" style={{ backgroundColor: '#2e2e2e', color: '#f1f1f1', width: '100%', maxWidth: '400px', borderRadius: '12px' }}>
          <h2 className="text-center mb-4" style={{ color: '#ffffff' }}>LOGIN</h2>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              id="username"
              placeholder="Enter username"
              name="username"
              value={login.username}
              onChange={inputHandler}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-secondary"
              id="password"
              placeholder="Enter password"
              name="password"
              value={login.password}
              onChange={inputHandler}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-light" onClick={readValues}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
