import React from 'react'
import { motion } from 'framer-motion'


const Home: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className='bg-amber-500 w-[70%] grid grid-cols-4 sm:grid-cols-2 rounded-2xl p-8 shadow-lg'>
                
                
                <motion.div className='col-span-2 flex flex-col justify-center items-center text-center'>
                    <h1 className='text-6xl font-bold text-white'>Hello, I'm Waseem</h1>
                    <p className='text-2xl text-white mt-4'>A passionate frontend developer</p>
                </motion.div>

                
                <div className='col-span-2 flex justify-center items-center'>
                    <img 
                        src="/src/assets/IMG_2283-Photoroom.png" 
                        alt="Profile" 
                        className='rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
