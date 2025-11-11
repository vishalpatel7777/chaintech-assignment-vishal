import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData && userData.password === data.password) {
      localStorage.setItem("loggedInUser", data.email);
      toast.success(`Welcome back, ${userData.name}!`);
      setTimeout(() => navigate("/profile"), 1200);
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-5 border rounded p-4 shadow-sm bg-white">
        <h2 className="text-center mb-4 text-primary">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="Enter your password"
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>
        </form>

        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="btn btn-link p-0 text-decoration-none"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
