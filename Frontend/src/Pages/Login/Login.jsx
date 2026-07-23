import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import heroImage from "../../assets/imgs/hero.svg";
import { loginUser } from "../../services/authService";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginUser(formData);

      if (data.success) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        const redirectPath =
          location.state?.from || "/dashboard";

        navigate(redirectPath);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* Left Side */}

        <div className="login-left">
          <img
            src={heroImage}
            alt="Blood Donation"
          />
        </div>

        {/* Right Side */}

        <div className="login-right">

          <h2>Welcome Back 👋</h2>

          <p>
            Login to continue and help save lives.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <FaLock className="input-icon" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <span
                className="eye-icon"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>

            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>

          </form>

          <p className="register-text">
            Don't have an account?

            <Link to="/register">
              {" "}
              Register
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;