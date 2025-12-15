import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children, fullHeight = false }) => {
    return (
        <section id={id} className={`flex flex-col justify-center py-16 relative ${fullHeight ? 'min-h-screen' : ''}`}>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-4xl mx-auto px-4"
            >
                {title && (
                    <div className="flex items-center mb-8">
                        <motion.div
                            className="h-[1px] bg-unravel-accent mr-4"
                            initial={{ width: 0 }}
                            whileInView={{ width: 60 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                        />
                        <h2 className="text-3xl md:text-5xl font-bold text-unravel-thread uppercase tracking-wider">
                            {title}
                        </h2>
                    </div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-300"
                >
                    {children}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Section;
