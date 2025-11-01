import React, { useState, useEffect } from 'react';
// IMPORTANT: Paths are correctly set to look inside the local 'components' folder (src/components).
import Header from './components/Header.jsx'; 
import VideoHero from './components/VideoHero.jsx';
import About from './components/About.jsx'; 
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx'; // Will be conditionally rendered
import portfolioData from './data/portfolioData.js'; // Assuming this data file exists

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open the modal
  const openModal = (project) => {
    setSelectedProject(project);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-black font-sans scroll-smooth">
      
      <Header />
      
      <main>
        {/* VideoHero is typically the first section */}
        <VideoHero />
        
        {/* About/Creative Vision Section */}
        {/* Note: Ensure 'src/components/CreativeVision.jsx' has been renamed to 'src/components/About.jsx' locally */}
        <About />

        {/* Portfolio Section */}
        <Portfolio openModal={openModal} portfolioData={portfolioData} />

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />

      {/* Modal for viewing detailed project info */}
      {selectedProject && (
        <ProjectModal project={selectedProject} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;