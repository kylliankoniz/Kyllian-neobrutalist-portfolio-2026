import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Marquee } from './components/Marquee';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SuccessModal } from './components/SuccessModal';
import { ProfileModal } from './components/ProfileModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [successData, setSuccessData] = useState<{
    name: string;
    email: string;
    projectType: string;
  } | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF0] text-[#111111] font-sans flex flex-col selection:bg-[#FFE600] selection:text-black">
      {/* Top Navbar */}
      <Navbar
        onOpenHireModal={scrollToContact}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onContactClick={scrollToContact}
          onExploreWork={scrollToProjects}
        />

        {/* What Can I Do For You (Services) */}
        <Services />

        {/* About Me Section with Timeline */}
        <About />

        {/* Infinite Marquee Ribbon */}
        <Marquee text="FEATURED PROJECTS" bgColor="bg-[#C084FC]" />

        {/* Featured Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Testimonials / Recommendations Section */}
        <Testimonials />

        {/* Contact / Transmission Section */}
        <Contact onSuccess={(data) => setSuccessData(data)} />
      </main>

      {/* Footer */}
      <Footer onOpenHireModal={scrollToContact} />

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Form Submission Success Modal */}
      <SuccessModal
        data={successData}
        onClose={() => setSuccessData(null)}
      />

      {/* Developer Quick ID / Profile Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onNavigateToContact={scrollToContact}
      />
    </div>
  );
}
