import Content1 from "../components/Content1";
import Navbar1 from "../components/Navbar1";

export const Hero = () => {
  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          background: 'radial-gradient(circle, #d3eafd 0%, #e4f0f6 40%, #e7e9f3 100%)'
        }}
      >
        <Navbar1 />
        <Content1 />
      </div>
    </>
  );
};

export default Hero;
