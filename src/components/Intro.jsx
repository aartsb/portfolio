import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Intro = ({ onEnter }) => {
    const [unraveled, setUnraveled] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setUnraveled(true);
        }, 2500); // Wait for animation to finish
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-unravel-black z-50 cursor-pointer" onClick={onEnter}>
            <div className="relative w-64 h-64 md:w-96 md:h-96">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                    {/* A tangled knot that unravels */}
                    <motion.path
                        d="M 20,100 C 50,0 150,200 180,100"
                        fill="transparent"
                        stroke="#e5e5e5"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M 100,20 C 0,50 200,150 100,180"
                        fill="transparent"
                        stroke="#00f0ff"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.circle
                        cx="100"
                        cy="100"
                        r="5"
                        fill="#e5e5e5"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2, duration: 0.5 }}
                    />
                </svg>
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-unravel-thread mix-blend-difference">
                        UNRAVEL
                    </h1>
                </motion.div>
            </div>

            <motion.p
                className="mt-8 text-sm text-gray-500 tracking-widest uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: unraveled ? 1 : 0, y: unraveled ? 0 : 20 }}
                transition={{ duration: 1 }}
            >
                Click to Enter
            </motion.p>
        </div>
    );
};

export default Intro;
