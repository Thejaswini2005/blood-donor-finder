import "./Navbar.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaTint, FaBell } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}

        <Link to="/" className="logo">

          <FaTint className="logo-icon" />

          <span>Blood Donor Finder</span>

        </Link>

        {/* Navigation */}

        <ul className="nav-links">

          <li>
            <NavLink to={user ? "/dashboard" : "/"}>
             {user ? "Dashboard" : "Home"}
            </NavLink>
          </li>

          <li>
            <NavLink to="/find-donors">
              Find Donors
            </NavLink>
          </li>

          {user ? (
            <>
              <li>
                <NavLink to="/become-donor">
                  Become Donor
                </NavLink>
              </li>

              <li>
                <NavLink to="/request-blood">
                  Request Blood
                </NavLink>
              </li>

              <li>
                <NavLink to="/my-requests">
                  My Requests
                </NavLink>
              </li>

              <li>
                <NavLink to="/donor-requests">
                  Donor Requests
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/about">
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact">
                  Contact
                </NavLink>
              </li>
            </>
          )}

        </ul>

        {/* Right Side */}

        {user ? (

          <div className="navbar-user">

            

            <Link to="/profile" className="avatar">
              {user.username.charAt(0).toUpperCase()}
            </Link>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>

          </div>

        ) : (

          <div className="nav-buttons">

            <Link
              to="/login"
              className="btn-outline"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn-primary"
            >
              Register
            </Link>

          </div>

        )}

      </div>

    </nav>
  );
}

export default Navbar;