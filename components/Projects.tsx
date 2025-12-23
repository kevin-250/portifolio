import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-6 xl:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected <span className="text-accent">Work</span></h2>
        <p className="text-slate-400 text-lg">A showcase of projects that demonstrate performance, accessibility, and modern UI patterns.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-accent/40 transition-all duration-300"
          >
            {/* Image Area */}
            <div className="h-56 overflow-hidden relative bg-dark-900">
               {/* Overlay */}
               <div className="absolute inset-0 bg-dark-900/10 group-hover:bg-transparent transition-all duration-500 z-10" />
               <img 
                 src={project.imageUrl} 
                 alt={project.title} 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
               />
            </div>

            {/* Content Area */}
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
                <div className="flex gap-3">
                  <a href={project.github} className="text-slate-400 hover:text-white transition-colors" title="View Code">
                    <Github size={18} />
                  </a>
                  <a href={project.link} className="text-slate-400 hover:text-accent transition-colors" title="Visit Site">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-xs font-semibold text-slate-300 bg-dark-700/50 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};