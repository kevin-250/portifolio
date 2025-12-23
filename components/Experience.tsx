import React from 'react';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full max-w-7xl mx-auto pt-6">
      <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true }}
         className="bg-surfaceDark text-white rounded-4xl p-8 md:p-16 shadow-card"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
           
           {/* Left Column: Headings */}
           <div className="space-y-16">
              <div className="relative">
                 <h2 className="text-4xl font-bold mb-4">Experience</h2>
                 <p className="text-gray-400 text-sm max-w-xs">
                    Varius ultrices ut aliquam egestas praesent ac, odio urna quisque. Pellentesque arcu.
                 </p>
                 {/* Decorative Circle */}
                 <div className="absolute -left-12 top-0 w-32 h-32 bg-gray-800 rounded-full opacity-20 blur-2xl"></div>
              </div>

              <div>
                 <h2 className="text-4xl font-bold mb-4">Tools</h2>
                 <p className="text-gray-400 text-sm max-w-xs">
                    Varius ultrices ut aliquam egestas praesent ac, odio urna quisque. Pellentesque arcu.
                 </p>
              </div>
           </div>

           {/* Right Column: Content Lists */}
           <div className="space-y-12">
              {/* Experience Item */}
              <div className="border-l border-gray-800 pl-8 relative">
                 <span className="absolute -left-1.5 top-0 w-3 h-3 bg-gray-600 rounded-full"></span>
                 <h3 className="text-xl font-medium text-gray-200">Senior Frontend Engineer</h3>
                 <p className="text-sm text-gray-500 mt-1 mb-2">Aug 2020 - Current</p>
                 <p className="text-xs text-gray-600">Global Tech Industries<br/>Remote</p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-2 gap-8">
                 <div>
                    <h4 className="text-lg font-medium mb-4 text-gray-300">Design</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                       <li className="hover:text-primary transition-colors cursor-default">Figma</li>
                       <li className="hover:text-primary transition-colors cursor-default">Adobe XD</li>
                       <li className="hover:text-primary transition-colors cursor-default">Adobe Photoshop</li>
                       <li className="hover:text-primary transition-colors cursor-default">Adobe Illustrator</li>
                       <li className="hover:text-primary transition-colors cursor-default">Sketch</li>
                    </ul>
                 </div>
                 
                 <div>
                    <h4 className="text-lg font-medium mb-4 text-gray-300">Development</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                       <li className="hover:text-primary transition-colors cursor-default">VS Code</li>
                       <li className="hover:text-primary transition-colors cursor-default">HTML5 & CSS3</li>
                       <li className="hover:text-primary transition-colors cursor-default">Tailwind CSS</li>
                       <li className="hover:text-primary transition-colors cursor-default">React.js / Next.js</li>
                       <li className="hover:text-primary transition-colors cursor-default">TypeScript</li>
                    </ul>
                 </div>
              </div>
           </div>

        </div>
      </motion.div>
    </section>
  );
};