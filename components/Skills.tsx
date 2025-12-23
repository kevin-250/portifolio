import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-6 xl:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core <span className="text-accent">Capabilities</span></h2>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          My technical stack is focused on the React ecosystem. I stay updated with the latest features like Server Actions, Suspense, and Hooks.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {/* Frontend */}
         <div className="col-span-1 md:col-span-2 bg-dark-800 rounded-2xl p-8 border border-dark-700/50">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
               Frontend Engineering
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {SKILLS.filter(s => s.category === 'frontend').map((skill, idx) => (
                  <div key={skill.name}>
                     <div className="flex justify-between mb-2">
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                     </div>
                     <div className="h-2 w-full bg-dark-900 rounded-full overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${skill.level}%` }}
                           transition={{ duration: 1, delay: idx * 0.1 }}
                           className="h-full bg-accent rounded-full"
                        />
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Tools & Backend */}
         <div className="space-y-8">
            <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700/50">
               <h3 className="text-xl font-bold text-white mb-6">Backend & Tools</h3>
               <div className="flex flex-wrap gap-2">
                  {SKILLS.filter(s => s.category !== 'frontend').map(skill => (
                     <span key={skill.name} className="px-3 py-1.5 bg-dark-900 text-accent text-sm rounded-md border border-dark-700/50 font-mono">
                        {skill.name}
                     </span>
                  ))}
               </div>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-dark-800 rounded-2xl p-8 border border-accent/20">
               <h3 className="text-xl font-bold text-white mb-2">Learning</h3>
               <p className="text-slate-300 text-sm mb-4">Currently exploring:</p>
               <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                  <li>React Native (Expo)</li>
                  <li>WebAssembly (Rust)</li>
                  <li>GraphQL Federation</li>
               </ul>
            </div>
         </div>
      </div>
    </section>
  );
};