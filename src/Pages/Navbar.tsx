import React from "react";
import { motion } from "framer-motion";

const navItems: string[] = ["Home", "About", "Projects", "Resume"];

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray-900 w-full px-4">
      <div className="w-full sm:w-[80%] md:w-[40%] rounded-3xl mt-6 h-[60px] bg-black flex flex-wrap items-center justify-center gap-6 text-gray-300 font-bold border-cyan-100 border-2 shadow-lg shadow-cyan-600 hover:shadow-gray-300 transition-shadow duration-300">
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={`/${item.toLowerCase()}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hover:underline text-sm sm:text-base md:text-lg"
          >
            {item}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
