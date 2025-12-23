import React from 'react';
import { NAV_ITEMS, SOCIALS, USER_INFO } from '../constants';
import { Hexagon, Terminal, Activity } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeSection, 
  setActiveSection, 
  mobileMenuOpen,
  setMobileMenuOpen 
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-dark-950/80 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-dark-950/95 backdrop-blur-xl border-r border-dark-800 flex flex-col justify-between transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        {/* Logo Area */}
        <div className="p-6 flex items-center gap-3 border-b border-dark-800">
          <div className="relative group cursor-pointer">
             <div className="absolute inset-0 bg-accent blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
             <Hexagon size={32} strokeWidth={1.5} className="text-accent relative z-10 fill-accent/5" />
             <span className="absolute inset-0 flex items-center justify-center font-bold text-xs text-white z-10">NK</span>
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide">Kevin N.</h2>
            <div className="flex items-center gap-1.5">
               <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span>
               <p className="text-[10px] text-slate-400 font-mono">Online</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 overflow-y-auto">
          <p className="px-3 mb-3 text-[10px] font-bold text-slate-600 uppercase tracking-widest font-mono">Navigation</p>
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group relative overflow-hidden
                    ${activeSection === item.id 
                      ? 'text-white bg-dark-800 shadow-lg shadow-black/20' 
                      : 'text-slate-400 hover:text-white hover:bg-dark-800/50'}
                  `}
                >
                   {/* Active Indicator line */}
                   {activeSection === item.id && (
                     <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-accent rounded-r-full shadow-[0_0_8px_currentColor] text-accent"></div>
                   )}
                   
                  {item.icon && <item.icon size={18} className={`transition-colors ${activeSection === item.id ? 'text-accent' : 'group-hover:text-accent'}`} />}
                  <span className="ml-1">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer / Socials */}
        <div className="p-6 border-t border-dark-800 bg-dark-950/50">
          <div className="flex justify-between gap-1 mb-4">
            {SOCIALS.map((social) => (
              <a 
                key={social.platform} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-500 hover:text-white hover:bg-dark-800 p-2 rounded-lg transition-all hover:-translate-y-1"
                aria-label={social.platform}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
          
          <div className="bg-dark-800/50 rounded-lg p-3 border border-dark-800">
             <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mb-1">
                <span className="flex items-center gap-1"><Activity size={10} /> Status</span>
                <span className="text-accent-green">Stable</span>
             </div>
             <div className="w-full bg-dark-900 h-1 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-accent to-accent-green rounded-full"></div>
             </div>
          </div>
        </div>
      </aside>
    </>
  );
};