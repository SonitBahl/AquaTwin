import "@fontsource/orbitron"; // Defaults to weight 400
import "@fontsource/orbitron/700.css"; // Optional: Use bold if needed
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link


export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-[#F0F0FF] shadow-md py-4 px-8 flex justify-between items-center z-50" // Added z-50 to ensure navbar is above other content
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl font-bold text-[#1A1A1A]" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}>
        Aquatwin
      </motion.div>

      {/* Nav Links */}
      <motion.div
        className="hidden md:flex space-x-8 text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.a
          whileHover={{ scale: 1.1, color: "#FF6D00" }}
          transition={{ duration: 0.2 }}
          href="#"
          className="text-gray-800 hover:text-[#FF6D00] transition-colors"
        >
          Home
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, color: "#FF6D00" }}
          transition={{ duration: 0.2 }}
          href="#"
          className="text-gray-800 hover:text-[#FF6D00] transition-colors"
        >
          Operations
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, color: "#FF6D00" }}
          transition={{ duration: 0.2 }}
          href="#"
          className="text-gray-800 hover:text-[#FF6D00] transition-colors"
        >
          Contact Us
        </motion.a>
      </motion.div>

      {/* Buttons */}
      <motion.div className="flex space-x-4">
      <Link to="/signin">
          <motion.button
            className="bg-gray-800 text-white px-5 py-2 rounded-full font-medium hover:bg-gray-700 transition duration-300"
          >
            Login
          </motion.button>
        </Link>
        <Link to="/signup">
          <motion.button
            className="bg-blue-500 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-400 transition duration-300"
          >
            Sign Up
          </motion.button>
        </Link>

      </motion.div>
    </motion.nav>
  );
}