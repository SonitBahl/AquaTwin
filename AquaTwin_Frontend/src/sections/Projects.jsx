import { motion } from "framer-motion";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

export default function WhatWeDo() {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animations for children
      },
    },
  };

  // Animation variants for the title
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  // Animation variants for the images
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-[#d3eafc] min-h-screen py-12 px-6 flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      <motion.h1
        className="text-black text-2xl md:text-3xl lg:text-4xl font-serif mb-8"
        variants={titleVariants}
      >
        AquaTwin
      </motion.h1>
      <motion.h2
        className="text-black text-xl md:text-2xl font-semibold mb-12"
        variants={titleVariants}
      >
        What do we do?
      </motion.h2>

      {/* Cards Container */}
      <motion.div
        className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8 justify-center items-center"
        variants={containerVariants}
      >
        {/* Card 1 */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[25%] lg:w-[20%] flex flex-col items-center"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.img
            src={person1}
            alt="Person 1"
            className="h-[120px] w-[120px] mb-4"
            variants={imageVariants}
          />
          <motion.p
            className="text-black text-center text-sm md:text-base"
            variants={titleVariants}
          >
            Easy, real-time control of water distribution.
          </motion.p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[25%] lg:w-[20%] flex flex-col items-center"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.img
            src={person2}
            alt="Person 2"
            className="h-[120px] w-[120px] mb-4"
            variants={imageVariants}
          />
          <motion.p
            className="text-black text-center text-sm md:text-base"
            variants={titleVariants}
          >
            Enhancing water resource management using predictive maintenance.
          </motion.p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[25%] lg:w-[20%] flex flex-col items-center"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.img
            src={person3}
            alt="Person 3"
            className="h-[120px] w-[120px] mb-4"
            variants={imageVariants}
          />
          <motion.p
            className="text-black text-center text-sm md:text-base"
            variants={titleVariants}
          >
            Stress testing to ensure reliability.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}