"use client";

import { useState } from "react";
import SinglePagePortfolio from "@/components/portfolio/SinglePagePortfolio";
import ScrollNav from "@/components/ScrollNav";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionChange = (section: number) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
      {/* Navigation */}
      <ScrollNav activeSection={activeSection} />
      
      {/* Main Content */}
      <div className="relative">
        <SinglePagePortfolio onSectionChange={handleSectionChange} />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
