import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Typewriter = ({ text, delay = 50, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    let currentIndex = 0;

    const type = async () => {
      while (currentIndex < text.length) {
        setDisplayText((prev) => prev + text[currentIndex]);
        await controls.start({ opacity: 1, transition: { duration: 0.1 } });
        await new Promise((resolve) => setTimeout(resolve, delay));
        currentIndex++;
      }

      if (onComplete) onComplete();
    };

    type();
  }, [text, delay, controls, onComplete]);

  return (
    <motion.span animate={controls} initial={{ opacity: 0 }}>
      {displayText}
    </motion.span>
  );
};
Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number,
  onComplete: PropTypes.func,
};

export default Typewriter;