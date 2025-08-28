import React from "react";
import { motion } from "framer-motion";

const navItems: string[] = ["Home", "About", "Projects", "Resume"];

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray-900 w-full px-4">
      <div className="w-full sm:w-[80%] md:w-[40%] rounded-3xl mt-6 h-[60px] bg-black flex flex-wrap items-center justify-center gap-6 text-gray-300 font-bold  border-cyan-100 border-2 hover:shadow-lg hover:shadow-cyan-600 transition-shadow duration-300 ">
        {navItems.map((item, index) =>
          item === "Resume" ? (
            <motion.a
              key={index}
              href="/src/assets/RESUME.pdf" 
              download="Waseem_Resume.pdf"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:underline text-sm sm:text-base md:text-lg cursor-pointer
              "
            >
              {item}
            </motion.a>
          ) : (
            <motion.a
              key={index}
              href={`/${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:underline text-sm sm:text-base md:text-lg"
            >
              {item}
            </motion.a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
