import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Send, Twitter, Facebook, Instagram, Phone, Mail, Github } from 'lucide-react';
import { USER_INFO, SOCIALS } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full max-w-7xl mx-auto pt-6 pb-6 content-visibility-auto">
      <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         viewport={{ once: true, margin: "100px" }}
         className="bg-surfaceDark text-white rounded-4xl p-8 md:p-16 shadow-card overflow-hidden relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           
           {/* Left: Call to Action */}
           <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
              <div className="relative mb-6">
                 {/* Avatar / Face */}
                 <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-800 relative z-10 bg-gray-700">
                    <img 
                      src="kevin.png" 
                      alt="Avatar" 
                      className="w-full h-full object-cover grayscale"
                      loading="lazy"
                      decoding="async"
                      width="128"
                      height="128"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                 </div>
                 {/* Halo effect */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gray-800 rounded-full opacity-30 blur-2xl -z-0"></div>
              </div>
              
              <h2 className="text-3xl font-bold mb-2">got a project ?</h2>
              <p className="text-gray-500 text-xs max-w-xs mb-8">
                 I build future-proof web applications. Let's turn your ideas into reality.
              </p>

              {/* Logo / Footer Info for Mobile mostly, but here part of design */}
              <div className="mt-auto pt-10 hidden lg:block">
                 <div className="flex items-center gap-1 mb-4">
                    <span className="font-bold text-xl">Kevin.</span>
                 </div>
                 <p className="text-[10px] text-gray-500 max-w-xs mb-4">
                    Passionate frontend engineer based in Rwanda.
                 </p>
              </div>
           </div>

           {/* Right: Form */}
           <div>
              <div className="bg-white rounded-3xl p-8 text-gray-900">
                 <h3 className="text-primary font-bold text-lg mb-6">Let's Talk</h3>
                 <form className="space-y-4">
                    <div>
                       <input type="text" placeholder="Name" className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent placeholder-gray-400" />
                    </div>
                    <div>
                       <input type="email" placeholder="E-mail" className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent placeholder-gray-400" />
                    </div>
                    <div>
                       <input type="tel" placeholder="Phone" className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent placeholder-gray-400" />
                    </div>
                    <div>
                       <textarea placeholder="Message" rows={3} className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent placeholder-gray-400 resize-none"></textarea>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                       <button type="button" className="flex items-center gap-2 text-xs text-gray-500 hover:text-black">
                          <Upload size={14} /> Upload file
                       </button>
                       <button type="submit" className="bg-black text-white px-6 py-2.5 rounded text-xs font-bold hover:bg-gray-800 transition-colors">
                          Send Message
                       </button>
                    </div>
                 </form>
              </div>
           </div>

        </div>
        
        {/* Footer Bottom Links */}
        <div className="border-t border-gray-800 mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] text-gray-500">
           {/* Mobile duplicate of logo area */}
           <div className="lg:hidden col-span-2">
              <span className="font-bold text-white text-lg block mb-2">Kevin.</span>
              <p>Passionate frontend engineer based in Rwanda.</p>
           </div>
           
           <div>
              <h4 className="text-white font-bold mb-2">Address</h4>
              <p>{USER_INFO.location}</p>
           </div>

           <div>
              <h4 className="text-white font-bold mb-2">Contact</h4>
              <a href={`mailto:${USER_INFO.email}`} className="block hover:text-primary transition-colors">{USER_INFO.email}</a>
              <a href={`tel:${USER_INFO.phone}`} className="block hover:text-primary transition-colors">{USER_INFO.phone}</a>
           </div>
           
           <div>
               <h4 className="text-white font-bold mb-2">Follow</h4>
               <div className="flex gap-4 text-white">
                  {SOCIALS.map((social) => (
                    <a 
                      key={social.platform} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-primary transition-colors"
                      title={social.platform}
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
               </div>
           </div>
        </div>

      </motion.div>
    </section>
  );
};