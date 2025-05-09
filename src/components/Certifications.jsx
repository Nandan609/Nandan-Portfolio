import React from 'react';
import { motion } from 'framer-motion';

import { SiCoursera, SiUdemy } from "react-icons/si";



import { PiCertificateLight, PiStudentLight } from "react-icons/pi";


const Certifications = () => {
  const certs = [
    
    {
      name: 'Python Data Structures – Coursera',
      link: 'https://www.coursera.org/account/accomplishments/verify/YFJM3BCKX5WU',
      badge: <SiCoursera className="text-blue-400 text-3xl" />,
    },

  ];
  

  return (
    <section id="certifications" className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-20">

      {/* Gradient Text for Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-14 text-center bg-gradient-to-r from-sky-400 via-purple-400 to-purple-600 bg-clip-text text-transparent tracking-tight"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -8 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 overflow-hidden 
              hover:shadow-[0_0_15px_2px] hover:shadow-primary hover:border-primary"
          >
            {/* Soft glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/20 to-primary/5 blur-lg rounded-2xl transition-all duration-500"></div>

            {/* Certificate Icon */}
            <PiCertificateLight className="relative z-10 text-primary text-6xl mb-4 transition-transform duration-300 group-hover:scale-110" />

            {/* Badge */}
            <div className="relative z-10 mb-3">
              {cert.badge}
            </div>

            {/* Certificate Name */}
            <h3 className="relative z-10 text-lg font-semibold mb-3">{cert.name}</h3>

            {/* View Certificate Button */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-auto text-primary hover:underline text-sm font-medium"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Certifications;
