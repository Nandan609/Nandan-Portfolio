import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-20">
      
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-6 text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg leading-8 text-center max-w-3xl"
      >
        I'm C NANDAN 🚀, a passionate Software Developer, focused on building modern web apps, AI tools, and efficient solutions to real-world problems.
        <br /><br />
        I have worked across multiple domains like Web Development and Computer Vision. Constantly learning, improving, and pushing my limits!
      </motion.p>

      <div className="flex justify-center mt-8">
        <a
          href="https://drive.google.com/uc?export=download&id=1oOTB54yXPIJS4zRH-3ZvfjAXJVXtOJEn"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-2xl transition-all duration-300"
        >
          <FaDownload /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
