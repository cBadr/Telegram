import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Examples from './components/Examples';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Examples />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;