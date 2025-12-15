import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Create mailto link with form data
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\n\nMessage:\n${formData.description}`);
        const mailtoLink = `mailto:aarticollab@outlook.com?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form after a short delay
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', description: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-8">
            <div className="mb-8 group">
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-unravel-thread/70 uppercase tracking-widest">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-unravel-thread/20 py-3 text-unravel-thread focus:outline-none focus:border-unravel-accent transition-colors duration-300 placeholder-unravel-thread/10"
                    placeholder="Enter your name"
                />
            </div>

            <div className="mb-12 group">
                <label htmlFor="description" className="block text-sm font-bold mb-2 text-unravel-thread/70 uppercase tracking-widest">
                    Description
                </label>
                <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows="4"
                    className="w-full bg-transparent border-b border-unravel-thread/20 py-3 text-unravel-thread focus:outline-none focus:border-unravel-accent transition-colors duration-300 placeholder-unravel-thread/10 resize-none"
                    placeholder="Tell me about your project..."
                />
            </div>

            <div className="flex justify-end">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`
                        relative px-8 py-3 bg-transparent border border-unravel-accent text-unravel-accent 
                        font-bold uppercase tracking-widest text-sm overflow-hidden group
                        ${status === 'submitting' ? 'opacity-50 cursor-wait' : 'cursor-pointer'}
                    `}
                >
                    <span className="relative z-10">
                        {status === 'idle' && 'Send Message'}
                        {status === 'submitting' && 'Sending...'}
                        {status === 'success' && 'Sent!'}
                    </span>
                    <div className="absolute inset-0 bg-unravel-accent/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </motion.button>
            </div>
        </form>
    );
};

export default ContactForm;
