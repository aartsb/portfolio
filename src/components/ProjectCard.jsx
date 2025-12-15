import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ProjectCard = ({ title, description, image, link, imagePosition = 'center' }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        const xPct = mouseXFromCenter / width;
        const yPct = mouseYFromCenter / height;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleClick = () => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            className={`relative w-full h-64 rounded-xl bg-unravel-black border border-unravel-thread/20 group perspective-1000 overflow-hidden ${link ? 'cursor-pointer' : 'cursor-none'}`}
        >
            {/* Background Image */}
            {image && (
                <div className="absolute inset-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                        style={{ objectPosition: imagePosition }}
                    />
                </div>
            )}

            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 p-8 flex flex-col justify-end rounded-xl shadow-lg"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-unravel-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                <h3 className="relative z-10 text-2xl font-bold mb-2 text-unravel-thread group-hover:text-unravel-accent transition-colors duration-300 translate-z-50">
                    {title}
                </h3>
                <p className="relative z-10 text-sm text-gray-400 translate-z-30">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
