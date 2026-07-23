import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import Dashboard from "./Pages/Dashboard/Dashboard";

import BecomeDonor from "./Pages/BecomeDonor/BecomeDonor";
import FindDonors from "./Pages/FindDonors/FindDonors";
import RequestBlood from "./Pages/RequestBlood/RequestBlood";
import MyRequests from "./Pages/MyRequests/MyRequests";
import DonorRequests from "./Pages/DonorRequests/DonorRequests";
import Profile from "./Pages/Profile/Profile";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      {/* Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/find-donors"
        element={
          <ProtectedRoute>
            <FindDonors />
          </ProtectedRoute>
        }
      />

      <Route
        path="/become-donor"
        element={
          <ProtectedRoute>
            <BecomeDonor />
          </ProtectedRoute>
        }
      />

      <Route
        path="/request-blood"
        element={
          <ProtectedRoute>
            <RequestBlood />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-requests"
        element={
          <ProtectedRoute>
            <MyRequests />
          </ProtectedRoute>
        }
      />

      <Route
        path="/donor-requests"
        element={
          <ProtectedRoute>
            <DonorRequests />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;