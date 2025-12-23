import React from 'react';
import { motion } from 'framer-motion';
import { Circle, Triangle } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-7xl mx-auto bg-surface rounded-4xl p-6 md:p-12 shadow-card relative overflow-hidden"
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between mb-16 md:mb-24">
        <div className="flex items-center gap-1">
          <span className="font-bold text-2xl tracking-tight">Kevin.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#experience" className="hover:text-black transition-colors">Experience</a>
          <a href="#tools" className="hover:text-black transition-colors">Tools</a>
          <a href="#projects" className="hover:text-black transition-colors">Project</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
        </div>

        <button 
          onClick={onContactClick}
          className="px-6 py-2.5 border border-gray-200 rounded-full text-sm font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300"
        >
          Contact
        </button>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 relative z-10">
           {/* Decorative Elements */}
           <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-100 rounded-full blur-2xl opacity-50 pointer-events-none"></div>

           <div className="space-y-6">
             <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1]">
               Hey, This is <br/>
               <span className="text-gray-900">Kevin </span> 
               <span className="text-primary">Nshimyimana</span>
             </h2>
             
             <div className="space-y-4">
                <p className="text-xl text-gray-500 font-medium">
                  an interactive Web Developer
                </p>
                
                <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
                  I'm a passionate software engineer based in <span className="font-semibold text-gray-900">Kigali, Rwanda</span>. 
                  I specialize in crafting accessible, pixel-perfect, and performant web experiences. I blend technical expertise with creative design to build software that truly stands out.
                </p>
             </div>
           </div>
        </div>

        {/* Right Content / Image */}
        <div className="relative flex justify-center lg:justify-end">
           {/* Abstract Circle Background */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gray-100 rounded-full -z-10"></div>
           
           {/* Floating Shapes - Added will-change for performance */}
           <motion.div 
             animate={{ y: [-10, 10, -10] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-0 right-10 text-orange-400 will-change-transform"
           >
              <Circle size={24} strokeWidth={3} />
           </motion.div>
           <motion.div 
             animate={{ rotate: [0, 360] }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="absolute bottom-20 left-10 text-black fill-black will-change-transform"
           >
              <Triangle size={20} />
           </motion.div>

           {/* Profile Image (Masked) */}
           <div className="relative">
              <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-8 border-gray-100 shadow-2xl bg-gray-200">
                 {/* Optimized Image Loading */}
                 <img 
                   src="kevin.png" 
                   alt="Kevin Profile" 
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                   loading="eager"
                   fetchPriority="high"
                   width="400"
                   height="400"
                   decoding="async"
                   onError={(e) => {
                     // Fallback if image is missing
                     (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?auto=format&fit=crop&w=800&q=80';
                   }}
                 />
              </div>

              {/* Stats Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 -left-4 md:left-0 bg-[#cd4900] text-white p-4 rounded-2xl shadow-floating max-w-[180px]"
              >
                 <div className="text-2xl font-bold">100.36k</div>
                 <div className="text-xs text-orange-100">Package project done</div>
              </motion.div>
           </div>
        </div>
      </div>
    </motion.section>
  );
};