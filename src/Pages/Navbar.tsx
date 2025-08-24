import React from "react";
import { motion } from "framer-motion";

const navItems: string[] = ["Home", "About", "Contact", "Resume"];

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray-900 inset-0 w-full">
      <div className="w-[30%] rounded-4xl mt-8  h-[70px] bg-black flex items-center justify-center gap-5 text-white font-bold border border-white">
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={`#${item.toLowerCase()}`} 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hover:underline"
          >
            {item}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
