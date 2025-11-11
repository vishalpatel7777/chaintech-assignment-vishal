import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Profile() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(user || {});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUpdate = () => {
    localStorage.setItem(formData.email, JSON.stringify(formData));
    setUser(formData);
    toast.success("Profile updated successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    toast.info("Logged out successfully!");
    setTimeout(() => navigate("/"), 1200);
  };

  if (!user)
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center text-muted">
        Loading profile...
      </div>
    );

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 border rounded p-4 shadow-sm bg-white">
        <h2 className="text-center mb-4 text-info">Profile</h2>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            readOnly
            className="form-control-plaintext border bg-light px-2 rounded"
            value={formData.email}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex gap-2">
          <button onClick={handleUpdate} className="btn btn-info w-50">
            Update
          </button>
          <button onClick={handleLogout} className="btn btn-outline-danger w-50">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
