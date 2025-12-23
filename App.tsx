import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans p-4 md:p-8 space-y-6">
       {/* Main Page Stack */}
       <Hero onContactClick={scrollToContact} />
       <Experience />
       <Services />
       <Contact />
    </div>
  );
};

export default App;