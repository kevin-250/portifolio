import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto pt-6">
      <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true }}
         className="bg-surface rounded-4xl p-8 md:p-16 shadow-card overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           
           {/* Text Content */}
           <div>
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">Why</div>
                 <h2 className="text-3xl font-bold text-gray-900">You Choose my Service</h2>
              </div>
              
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                 Conscientious, team-oriented Support Engineer, working tirelessly to achieve shiny carrier. Skilled in User and Asset Management.
              </p>

              <div className="space-y-4">
                 {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                       <div className="bg-black rounded text-white p-0.5">
                          <CheckSquare size={14} className="fill-current" />
                       </div>
                       <span className="text-sm text-gray-600">Et non mauris diam sit euismod arcu nisl quis.</span>
                    </div>
                 ))}
              </div>
           </div>

           {/* Phone Mockup Visual */}
           <div className="relative flex justify-center md:justify-end">
              <div className="relative w-64 h-[500px] bg-black rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800 rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                 {/* Notch */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                 
                 {/* Screen Content */}
                 <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="App Mockup" 
                      className="w-full h-full object-cover grayscale opacity-80"
                    />
                    
                    {/* Floating UI Elements inside phone */}
                    <div className="absolute bottom-10 left-4 right-4 bg-white/90 backdrop-blur rounded-xl p-3 shadow-lg">
                       <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs">M</div>
                          <div>
                             <div className="text-[10px] font-bold">Content Articles Intern</div>
                             <div className="text-[8px] text-gray-500">Medium in Toronto, Canada</div>
                          </div>
                       </div>
                       <div className="flex gap-2 mt-2">
                          <span className="text-[8px] bg-gray-100 px-2 py-0.5 rounded">Remote</span>
                          <span className="text-[8px] bg-gray-100 px-2 py-0.5 rounded">Writing</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </motion.div>
    </section>
  );
};