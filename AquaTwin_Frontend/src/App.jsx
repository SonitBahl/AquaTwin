import { useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AfterLogin from "./components/afterlogin"; // Import AfterLogin Page
import LandingPage from "./components/Content1"; // Your homepage
import Navbar1 from "./components/Navbar1"; // Your navbar file
import Signin from "./components/signin"; // Import Signin Page
import Signup from "./components/signup"; // Import Signup Page

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/afterlogin"
          element={isAuthenticated ? <AfterLogin /> : <Navigate to="/signin" />}
        />
      </Routes>
    </Router>
  );
}
