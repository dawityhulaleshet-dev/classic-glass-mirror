import React from 'react';
import { DoorOpen, Key, Wrench, AlignHorizontalDistributeCenter, Wind, Maximize2, ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  onOpenDispatch: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenDispatch }) => {
  const services = [
    {
      title: 'Door Pivot Repair',
      description: 'Inspection and repair of worn, loose, or damaged storefront door pivot systems, unstable doors, and excessive gaps.',
      icon: <DoorOpen className="w-5 h-5" />,
    },
    {
      title: 'Commercial Lock Repair',
      description: 'Diagnosis of mortise locks, cylinders, latches, and commercial locking hardware to restore reliable security.',
      icon: <Key className="w-5 h-5" />,
    },
    {
      title: 'Door Closer Service',
      description: 'Assessment and adjustment or replacement of damaged door closers that slam, leak oil, or fail to latch.',
      icon: <Wrench className="w-5 h-5" />,
    },
    {
      title: 'Sagging Door & Alignment Repair',
      description: 'Diagnosis of uneven gaps, dragging doors, rubbing stiles, and storefront entrance alignment problems.',
      icon: <AlignHorizontalDistributeCenter className="w-5 h-5" />,
    },
    {
      title: 'Wind-Related Door Damage',
      description: 'Inspection of damaged door hardware, glazing, frames, and components affected by forceful high winds.',
      icon: <Wind className="w-5 h-5" />,
    },
    {
      title: 'Storefront Glass & Frame Repair',
      description: 'Professional assessment of damaged or misaligned commercial glass door assemblies, stops, and frames.',
      icon: <Maximize2 className="w-5 h-5" />,
    },
  ];

  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="container services-grid">
        {/* Left Column: Intro */}
        <div className="services-intro">
          <span className="eyebrow">What we repair</span>
          <h2 id="services-title">The right fix for a working entrance.</h2>
          <p>
            Storefront door problems can start with a single worn part. Our repair coverage focuses on the hardware, alignment, and glass components that keep commercial entrances operating as they should.
          </p>
          <button
            type="button"
            onClick={onOpenDispatch}
            className="btn btn-primary"
          >
            <span>Request Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Column: 6 Cards in 2-Column Grid */}
        <div className="service-list">
          {services.map((item) => (
            <article key={item.title} className="service-tile">
              <div className="service-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
