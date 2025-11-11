import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const existingUser = localStorage.getItem(data.email);

    if (existingUser) {
      toast.info("User already exists, redirecting to Login...");
      setTimeout(() => navigate("/"), 1200);
      return;
    }

    localStorage.setItem(data.email, JSON.stringify(data));
    toast.success("Registration successful!");
    setTimeout(() => navigate("/"), 1200);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-5 border rounded p-4 shadow-sm bg-white">
        <h2 className="text-center mb-4 text-success">Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password", { required: "Password is required" })}
              placeholder="Enter a password"
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100 mb-3">
            Register
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="btn btn-link p-0 text-decoration-none"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
