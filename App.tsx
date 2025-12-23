import React, { Suspense } from 'react';
import { Hero } from './components/Hero';

// Lazy load non-critical sections to improve initial bundle size and hydration speed
const Experience = React.lazy(() => import('./components/Experience').then(module => ({ default: module.Experience })));
const Services = React.lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const Contact = React.lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));

// Loading placeholder component
const SectionLoader = () => (
  <div className="w-full max-w-7xl mx-auto p-12 flex justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans p-4 md:p-8 space-y-6">
       {/* Hero is critical, so we render it immediately */}
       <Hero onContactClick={scrollToContact} />
       
       {/* Defer loading of other sections until needed */}
       <Suspense fallback={<SectionLoader />}>
         <Experience />
       </Suspense>
       
       <Suspense fallback={<SectionLoader />}>
         <Services />
       </Suspense>
       
       <Suspense fallback={<SectionLoader />}>
         <Contact />
       </Suspense>
    </div>
  );
};

export default App;