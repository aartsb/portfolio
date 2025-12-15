import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "transparent",
            border: "1px solid #e5e5e5",
            mixBlendMode: "difference"
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            backgroundColor: "#e5e5e5",
            border: "none",
            mixBlendMode: "difference"
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 1
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 0
        }
    };

    return (
        <>
            {/* Main cursor circle */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[100]"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
            {/* Center dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-unravel-accent rounded-full pointer-events-none z-[100]"
                variants={dotVariants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 1000, damping: 50 }}
            />
        </>
    );
};

export default CustomCursor;
