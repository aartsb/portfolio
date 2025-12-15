import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import Section from './components/Section';
import CustomCursor from './components/CustomCursor';
import ProjectCard from './components/ProjectCard';
import Background from './components/Background';
import ContactForm from './components/ContactForm';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showContent, setShowContent] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-screen bg-unravel-black text-unravel-thread overflow-hidden relative selection:bg-unravel-accent selection:text-unravel-black">
      <CustomCursor />
      <Background />

      {!showContent ? (
        <Intro onEnter={() => setShowContent(true)} />
      ) : (
        <div className="relative z-10">
          <Navigation />
          <ScrollToTop />
          <main className="container mx-auto px-4 py-8 max-w-6xl">
            <Section id="about" fullHeight={true}>
              <div className="space-y-8 max-w-4xl">
                {/* Name */}
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-unravel-thread tracking-tight text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Aarti Barakale
                </motion.h1>

                {/* Tagline */}
                <motion.p
                  className="text-xl md:text-2xl text-gray-400 tracking-wide text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Designing clarity. Building with purpose.
                </motion.p>

                {/* Signature - Real-time letter writing animation */}
                <motion.div
                  className="pt-8 flex justify-end"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <svg
                    width="220"
                    height="100"
                    viewBox="0 0 220 100"
                    className="text-unravel-accent"
                  >
                    <defs>
                      <style>
                        {`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');`}
                      </style>
                    </defs>

                    {/* Each letter draws itself with stroke animation */}
                    {['A', 'a', 'r', 't', 'i'].map((letter, index) => (
                      <React.Fragment key={index}>
                        {/* Stroke that draws */}
                        <motion.text
                          x={10 + (index * 28)}
                          y="55"
                          fontSize="56"
                          fontFamily="'Caveat', cursive"
                          fontWeight="700"
                          fill="transparent"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ strokeDasharray: "200", strokeDashoffset: "200" }}
                          animate={{ strokeDashoffset: "0" }}
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + (index * 0.5),
                            ease: "easeInOut"
                          }}
                        >
                          {letter}
                        </motion.text>

                        {/* Filled letter appears after stroke */}
                        <motion.text
                          x={10 + (index * 28)}
                          y="55"
                          fontSize="56"
                          fontFamily="'Caveat', cursive"
                          fontWeight="700"
                          fill="currentColor"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: 0.8 + (index * 0.5) + 0.5
                          }}
                        >
                          {letter}
                        </motion.text>
                      </React.Fragment>
                    ))}

                    {/* Underline */}
                    <motion.line
                      x1="10"
                      y1="70"
                      x2="150"
                      y2="65"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: 3.8, ease: "easeOut" }}
                    />

                    {/* Dot */}
                    <motion.circle
                      cx="158"
                      cy="64"
                      r="2"
                      fill="currentColor"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.15, delay: 4.2 }}
                    />

                    {/* Heart */}
                    <motion.path
                      d="M 180,58 C 180,54 182,52 185,52 C 188,52 190,54 190,58 C 190,64 180,70 180,70 C 180,70 170,64 170,58 C 170,54 172,52 175,52 C 178,52 180,54 180,58 Z"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 4.4, ease: "easeInOut" }}
                    />
                  </svg>
                </motion.div>
              </div>
            </Section>
            <Section id="projects" title="Projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <ProjectCard
                  title="Cloud/Terraform Project"
                  description="VM Deployment with Policy as Code"
                  image="/terraform-project.png"
                  link="https://github.com/aartsb/terraformproject"
                />
                <ProjectCard
                  title="Homie"
                  description="High fidelity prototype of a one stop home repair and services app"
                  image="/homie-project.png"
                  link="https://www.figma.com/proto/IMVy0jmPCC9w5nSim7uyJB/Hi-Fi-2?node-id=47%3A3533&scaling=scale-down"
                  imagePosition="center 25%"
                />
              </div>
            </Section>
            <Section id="resume" title="Resume">
              <div className="flex flex-col items-start">
                <p className="text-lg mb-8 max-w-2xl">
                  Explore my professional journey and qualifications.
                </p>
                <motion.a
                  href="https://drive.google.com/file/d/16-e3Yb8hDLdxiWPIWVSxTvVdEMMy4KWH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-unravel-accent text-unravel-accent font-bold uppercase tracking-widest hover:bg-unravel-accent hover:text-unravel-black transition-colors duration-300"
                >
                  View Resume
                </motion.a>
              </div>
            </Section>
            <Section id="contact" title="Contact">
              <p className="text-lg mb-8">
                Ready to start a new project? Let's unravel the possibilities together.
              </p>
              <ContactForm />
            </Section>

            {/* Copyright Footer */}
            <footer className="relative z-10 py-8 text-center border-t border-unravel-thread/10">
              <p className="text-sm text-unravel-thread/60">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </footer>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
