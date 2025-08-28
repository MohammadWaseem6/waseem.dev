import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
            <div className="relative bg-gray-500 w-full md:w-[60%] min-h-[350px] md:min-h-[400px] grid grid-cols-1 md:grid-cols-2 rounded-3xl">

                <motion.div
                    className="absolute inset-0 -skew-x-12 hover:shadow-lg hover:shadow-cyan-600 transition-shadow duration-300"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                    <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent "></div>
                </motion.div>

                <motion.div
                    className="flex flex-col justify-center items-center text-center relative z-10 "
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">
                        Hello, I'm{" "}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                color: ["#60a5fa", "#34f399", "#fbbf24"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "mirror",
                            }}
                            className="text-5xl font-bold"
                        >
                            Waseem
                        </motion.span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        className="text-lg sm:text-xl md:text-2xl text-gray-200 mt-4"
                    >
                        A passionate frontend developer
                    </motion.p>
                </motion.div>

                <motion.div
                    className="flex justify-center items-center relative z-10 mt-6 md:mt-0"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="/src/assets/IMG_2283-Photoroom.png"
                        alt="Profile"
                        className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover border-4 border-white shadow-lg"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
