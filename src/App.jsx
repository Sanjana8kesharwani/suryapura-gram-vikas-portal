import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutVillage from './components/AboutVillage';
import Ambassador from './components/Ambassador';
import PanchayatServices from './components/PanchayatServices';
import Education from './components/Education';
import Farming from './components/Farming';
import RoadInfrastructure from './components/RoadInfrastructure';
import Statistics from './components/Statistics';
import Gallery from './components/Gallery';
import Updates from './components/Updates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialPosts from './mockups/SocialPosts';
import MobileScreenshots from './mockups/MobileScreenshots';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <AboutVillage />
        <Ambassador />
        <PanchayatServices />
        <Education />
        <Farming />
        <RoadInfrastructure />
        <Statistics />
        <Gallery />
        <Updates />
        
        {/* Social Media Post Design Showcase */}
        <SocialPosts />
        
        {/* Interactive Mobile Screenshot Simulator */}
        <MobileScreenshots />
        
        <Contact />
      </main>

      {/* Footer Directory & Helplines */}
      <Footer />
    </div>
  );
}

export default App;
