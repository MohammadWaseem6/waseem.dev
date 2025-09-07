import React from "react";
import { motion } from "framer-motion";

interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <section id={id} className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 pt-20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="relative bg-gray-800/50 backdrop-blur-md w-full md:w-[60%] min-h-[350px] md:min-h-[400px] grid grid-cols-1 md:grid-cols-2 rounded-3xl border border-cyan-500/20 overflow-hidden">

        <motion.div
          className="absolute inset-0 -skew-x-12"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent "></div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center text-center p-8 relative z-10"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Hello, I'm{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                color: ["#60a5fa", "#06b6d4", "#fbbf24"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              Waseem
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mt-2"
          >
            A passionate frontend developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-semibold shadow-lg shadow-cyan-500/30 transition-colors duration-300"
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center p-8 relative z-10"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-ping opacity-20"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            
            
            <img
              src="/src/assets/IMG_2283.JPG" 
              alt="Profile"
              className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover border-4 border-gray-700 shadow-lg relative z-10"
              onError={(e) => {
                // Fallback to a placeholder image if the local image fails to load
                (e.target as HTMLImageElement).src = "";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;