import React from 'react'
import { motion } from 'framer-motion'
interface NavItems {
    Home: string;
    About: string;
    Contact: string;
    Resume: string;
}

const navItems: NavItems[] = [
    {
        Home: 'Home',
        About: 'About',
        Contact: 'Contact',
        Resume: 'Resume'
    },
];

const Navbar: React.FC = () => {
    return (
        <div className="flex justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center h-[50px]  pt-10 w-full">
            <div className="w-[30%] rounded-4xl h-[70px] col-span-1 bg-black flex items-center justify-center gap-5 text-white font-bold border-1 border-white">
                {navItems.map((item, index) => (
                    <motion.div

                        key={index}
                        className="flex justify-around w-full"
                    >
                        <motion.a href="#"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => console.log('hover started!')}
                            className="hover:underline">{item.Home}</motion.a>
                        <motion.a href="#"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => console.log('hover started!')}
                            className="hover:underline">{item.About}</motion.a>
                        <motion.a href="#"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => console.log('hover started!')}
                            className="hover:underline">{item.Contact}</motion.a>
                        <motion.a href="#"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => console.log('hover started!')}
                            className="hover:underline">{item.Resume}</motion.a>
                    </motion.div>
                ))}

            </div>
        </div >
    )
}

export default Navbar