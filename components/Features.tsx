import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { PROJECTS, SKILLS } from '../constants';

export const Features: React.FC = () => {
  // Get top 3 frontend skills
  const topSkills = SKILLS.filter(s => s.category === 'frontend').slice(0, 3);
  // Get featured project
  const featuredProject = PROJECTS[0];

  return (
    <section className="py-24 px-6 xl:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Selected Works & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Expertise</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
          I don't just write code; I engineer solutions. From pixel-perfect frontend implementations to scalable backend architectures, here is a glimpse of my technical capability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Featured Project */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group relative bg-dark-900 rounded-xl border border-dark-800 hover:border-dark-700 overflow-hidden flex flex-col"
        >
           {/* Visual Area */}
           <div className="h-48 relative overflow-hidden">
               {/* Background Image with Overlay */}
               <div className="absolute inset-0 bg-dark-900 z-0">
                  <img src={featuredProject.imageUrl} alt={featuredProject.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"></div>
               </div>
               
               {/* Floating Badge */}
               <div className="absolute top-4 right-4 z-10">
                  <span className="px-2 py-1 bg-accent/20 border border-accent/30 text-accent text-[10px] font-bold rounded uppercase tracking-wider backdrop-blur-md">
                     Featured
                  </span>
               </div>

               {/* Icon Container */}
               <div className="absolute bottom-4 left-6 z-10 p-3 rounded-xl bg-dark-800/90 border border-dark-700 shadow-xl backdrop-blur-sm">
                  <Code2 className="w-6 h-6 text-white" />
               </div>
           </div>
           
           {/* Content */}
           <div className="p-6 mt-auto border-t border-dark-800/50 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                 {featuredProject.title}
                 <ArrowUpRight size={14} className="text-slate-500 group-hover:text-accent transition-colors" />
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                 {featuredProject.description.substring(0, 80)}...
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                 {featuredProject.technologies.slice(0, 3).map(tech => (
                   <span key={tech} className="text-[10px] bg-dark-800 text-slate-300 px-2 py-1 rounded border border-dark-700">
                     {tech}
                   </span>
                 ))}
              </div>
           </div>
        </motion.div>

        {/* Card 2: Tech Stack / Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="group relative bg-dark-900 rounded-xl border border-dark-800 hover:border-dark-700 overflow-hidden flex flex-col"
        >
           <div className="h-48 bg-gradient-to-b from-dark-800/50 to-transparent relative flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               
               {/* Animated Stack Visualization */}
               <div className="relative z-10 w-full max-w-[200px] flex flex-col items-center gap-3">
                  {topSkills.map((skill, i) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="w-full bg-dark-800/80 border border-dark-700 p-2 rounded-lg flex items-center justify-between backdrop-blur-sm shadow-lg group-hover:border-accent/30 transition-colors"
                    >
                       <span className="text-xs font-mono text-slate-300">{skill.name}</span>
                       <div className="h-1.5 w-12 bg-dark-950 rounded-full overflow-hidden">
                          <div style={{ width: `${skill.level}%` }} className="h-full bg-accent rounded-full"></div>
                       </div>
                    </motion.div>
                  ))}
               </div>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-all duration-500"></div>
           </div>

           <div className="p-6 mt-auto border-t border-dark-800/50">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                 <Layers className="text-purple-400" size={18} /> Modern Stack
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                 Expertise in the React ecosystem. I build type-safe, component-driven interfaces that are easy to maintain and scale.
              </p>
           </div>
        </motion.div>

        {/* Card 3: Architecture / Philosophy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="group relative bg-dark-900 rounded-xl border border-dark-800 hover:border-dark-700 overflow-hidden flex flex-col"
        >
           <div className="h-48 bg-gradient-to-b from-dark-800/50 to-transparent relative flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               
               <div className="relative z-10 p-5 rounded-2xl bg-dark-800/80 border border-dark-700 shadow-2xl group-hover:scale-105 transition-transform duration-500 group-hover:border-green-400/30 backdrop-blur-sm">
                <Cpu className="w-10 h-10 text-slate-200 group-hover:text-green-400 transition-colors duration-300" strokeWidth={1.5} />
              </div>
              
              {/* Particles Effect (Simulated) */}
              <div className="absolute inset-0">
                  <div className="absolute top-10 left-10 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-12 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute top-20 right-10 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-300"></div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full group-hover:bg-green-500/20 transition-all duration-500"></div>
           </div>

           <div className="p-6 mt-auto border-t border-dark-800/50">
              <h3 className="text-xl font-bold text-white mb-2">Performance First</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                 Optimizing for Core Web Vitals, SEO, and accessibility. I ensure applications aren't just functional, but lightning fast.
              </p>
           </div>
        </motion.div>

      </div>
    </section>
  );
};