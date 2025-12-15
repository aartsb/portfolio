import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
    const links = [
        { name: 'Projects', href: '#projects' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-40 p-6 flex justify-center items-center mix-blend-difference">
            <ul className="flex space-x-8">
                {links.map((link) => (
                    <li key={link.name} className="relative group">
                        <a
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-unravel-thread hover:text-unravel-accent transition-colors duration-300 text-sm uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                        <motion.div
                            className="absolute -bottom-2 left-0 w-full h-[1px] bg-unravel-accent origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
