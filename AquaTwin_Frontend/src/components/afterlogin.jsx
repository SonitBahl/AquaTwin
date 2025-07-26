import "@fontsource/orbitron/700.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const sections = [
  { id: 1, title: "Talk to the LLM", content: "Chat with the AI for assistance and insights.", link: "http://localhost:8501/" },
  { id: 2, title: "Your Customised Dashboard", content: "Manage your workflow and preferences easily.", link: "https://youtube.com" }
];

export default function CarouselPage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % sections.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + sections.length) % sections.length);
  
  const handleClick = () => {
    window.location.href = sections[current].link;
  };

  return (
    <div className="min-h-screen flex items-center justify-center"
      style={{
        background: "radial-gradient(circle, #d3eafd 0%, rgb(140, 210, 245) 40%, #e7e9f3 100%)",
      }}
    >
      <div className="relative w-[80vw] h-[60vh] flex items-center justify-center overflow-hidden shadow-xl rounded-xl bg-gray-900 text-white cursor-pointer" onClick={handleClick}>
        <AnimatePresence>
          <motion.div
            key={sections[current].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute w-full h-full flex flex-col items-center justify-center p-10 text-center"
          >
            <h2 className="text-4xl font-bold" style={{ fontFamily: "Orbitron, sans-serif" }}>{sections[current].title}</h2>
            <p className="text-lg mt-4 max-w-xl">{sections[current].content}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-5 text-3xl bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">❮</button>
        <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-5 text-3xl bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">❯</button>
      </div>
    </div>
  );
}