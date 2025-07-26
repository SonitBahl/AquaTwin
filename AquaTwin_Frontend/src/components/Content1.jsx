import robot from "../assets/robot.png";
import Footer from "../sections/Footer";
import WhatWeDo from "../sections/Projects"; // Import WhatWeDo component

export default function LandingPage() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-10"
      style={{
        background: "radial-gradient(circle, #d3eafd 0%, rgb(140, 210, 245) 40%, #e7e9f3 100%)",
      }}
    >
      {/* Main Container */}
      <div className="flex flex-col items-center justify-center max-w-6xl w-full py-16">
        
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 text-left">
            <h1
              className="text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Welcome to <span className="text-blue-600">Aquatwin</span>
            </h1>
            <p
              className="text-xl text-gray-700 max-w-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Your all-in-one platform for real-time simulation of water distribution pipelines,
              from reservoirs to water treatment plants.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={robot}
              alt="Aquatwin Robot"
              className="max-w-sm lg:max-w-md drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Ensure WhatWeDo Appears Below */}
      <div className="w-full">
        <WhatWeDo />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
