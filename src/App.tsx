import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CommonIssues } from './components/CommonIssues.tsx';
import { ServicesGrid } from './components/ServicesGrid.tsx';
import { KnowledgeCenter } from './components/KnowledgeCenter.tsx';
import { ProjectShowcase } from './components/ProjectShowcase.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileCallBar } from './components/MobileCallBar.tsx';
import { DispatchModal } from './components/DispatchModal.tsx';
import { TechnicalGuide } from './data/technicalGuides.ts';

export default function App() {
  const [isDispatchModalOpen, setIsDispatchModalOpen] = useState(false);
  const [selectedIssueTitle, setSelectedIssueTitle] = useState<string>('');

  const handleOpenDispatch = () => {
    setSelectedIssueTitle('');
    setIsDispatchModalOpen(true);
  };

  const handleSelectGuideAction = (guide: TechnicalGuide) => {
    setSelectedIssueTitle(guide.title);
    setIsDispatchModalOpen(true);
  };

  const handleExploreIssues = () => {
    const el = document.getElementById('issues');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToGuide = (guideId: string) => {
    const guideSection = document.getElementById('guide');
    if (guideSection) {
      guideSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Also scroll directly to the specific guide card if available
    setTimeout(() => {
      const card = document.getElementById(guideId);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header & Sticky Navigation */}
      <Navbar onOpenDispatch={handleOpenDispatch} />

      <main>
        {/* Section 3: Premium Hero Section & Section 4: Dark Navy Service Strip */}
        <Hero onExploreIssues={handleExploreIssues} />

        {/* Section 5: Common Commercial Door Problems */}
        <CommonIssues onNavigateToGuide={handleNavigateToGuide} />

        {/* Section 6: Commercial Door Repair Services */}
        <ServicesGrid onOpenDispatch={handleOpenDispatch} />

        {/* Section 7: NEW SECTION — Understanding Commercial Door Problems (Knowledge Center) */}
        <KnowledgeCenter
          onOpenDispatch={handleOpenDispatch}
          onSelectGuideAction={handleSelectGuideAction}
        />

        {/* Section 8: Real Work, Real Storefront Solutions */}
        <ProjectShowcase />

        {/* Section 9: Simple Professional Repair Process */}
        <ProcessSection />

        {/* Section 10: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 11: Final Call to Action */}
        <FinalCTA onOpenDispatch={handleOpenDispatch} />
      </main>

      {/* Section 12: Professional Footer */}
      <Footer />

      {/* Sticky Mobile Call Bar */}
      <MobileCallBar onOpenDispatch={handleOpenDispatch} />

      {/* Interactive Service Dispatch & Estimate Request Modal */}
      <DispatchModal
        isOpen={isDispatchModalOpen}
        onClose={() => setIsDispatchModalOpen(false)}
        prefilledIssue={selectedIssueTitle}
      />
    </div>
  );
}
