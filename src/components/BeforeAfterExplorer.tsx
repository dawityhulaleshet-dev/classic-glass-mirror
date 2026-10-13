import React, { useState } from 'react';
import { ArrowLeftRight, CheckCircle2, XCircle, Sliders, Shield } from 'lucide-react';

export const BeforeAfterExplorer: React.FC = () => {
  const [activeComparison, setActiveComparison] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const comparisons = [
    {
      title: 'Storefront Pivot Bearing Restoration',
      subtitle: 'Lower Door Shoe & Floor Pivot Assembly',
      before: {
        tag: 'WORN / FAILED STATE',
        title: 'Collapsed Bearing & Sagging Clearance',
        points: [
          'Ball bearings grounded into powder from thousands of cycles',
          'Door dropped 3/16", metal bottom rail scraping tile floor',
          'Excessive strain placed on top pivot pin risking door drop',
          'Straining customer arms and triggering constant complaints',
        ],
        badge: 'Critical Hazard',
      },
      after: {
        tag: 'CLASSIC REPAIRED SPEC',
        title: 'Heavy-Duty Precision Stainless Pivot Set',
        points: [
          'Precision oil-tempered needle bearings & thrust washer',
          'Even 1/8" reveal across header and threshold',
          'Heavy-duty floor plate anchored with industrial masonry fasteners',
          'Silky smooth fingertip opening meeting ADA standards (<5 lbs force)',
        ],
        badge: 'Certified Grade 1',
      },
    },
    {
      title: 'Commercial Hydraulic Door Closer',
      subtitle: 'Concealed Overhead & Surface Closers',
      before: {
        tag: 'WORN / FAILED STATE',
        title: 'Blown Hydraulic Seals & Violent Slamming',
        points: [
          'Internal hydraulic fluid leaked onto threshold or header',
          'Loss of damping pressure causing door to slam dangerously',
          'Major pinch hazard for children and customers',
          'Severe shock waves fracturing surrounding tempered glass',
        ],
        badge: 'Liability Risk',
      },
      after: {
        tag: 'CLASSIC REPAIRED SPEC',
        title: 'Dual-Valve Regulated Grade 1 Closer',
        points: [
          'All-weather fluid maintaining constant speed through TX heat',
          'Calibrated sweep and latch speed valves with soft-catch close',
          'Cushioned backcheck preventing wind-damage hyperextension',
          'Cast iron body rated for 1,500,000+ commercial cycles',
        ],
        badge: 'Commercial Durability',
      },
    },
    {
      title: 'Commercial Mortise Lock & Cylinder',
      subtitle: 'Adams Rite Style Maximum Security Deadlatches',
      before: {
        tag: 'WORN / FAILED STATE',
        title: 'Spinning Cylinder & Misaligned Latch',
        points: [
          'Loose set-screw allows key cylinder to spin without opening',
          'Deadlatch bolt fails to seat into strike plate hole',
          'Staff cannot secure building at close of business',
          'Vulnerable to credit-card shimming or bypass attempts',
        ],
        badge: 'Security Breach',
      },
      after: {
        tag: 'CLASSIC REPAIRED SPEC',
        title: 'Reinforced Adams Rite Grade 1 Security Set',
        points: [
          'Hardened stainless steel deadbolt with laminated core',
          'Reinforced cylinder collar preventing pipe-wrench attacks',
          'Precision-shimmed strike plate with zero frame rattle',
          'Silky smooth key rotation keyed to existing business master',
        ],
        badge: 'Maximum Protection',
      },
    },
  ];

  const current = comparisons[activeComparison];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0873b9] mb-3">
              <span className="w-5 h-0.5 bg-[#0873b9] rounded-full inline-block" />
              <span>Hardware Engineering Comparison</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10283a] font-heading tracking-tight">
              Failed Hardware vs. Commercial Restoration
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto overflow-x-auto max-w-full">
            {comparisons.map((comp, idx) => (
              <button
                key={comp.title}
                type="button"
                onClick={() => setActiveComparison(idx)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeComparison === idx
                    ? 'bg-white text-[#10283a] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {comp.title.split(' ')[0]} {comp.title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Showcase Card */}
        <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold font-heading text-[#10283a]">
                {current.title}
              </h3>
              <p className="text-xs text-slate-500">{current.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Sliders className="w-3.5 h-3.5 text-[#0873b9]" />
              <span>Drag slider or inspect side-by-side differences</span>
            </div>
          </div>

          {/* Interactive Slider Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-bold mb-2">
              <span className="text-rose-700 flex items-center gap-1">
                <XCircle className="w-3.5 h-3.5" /> Common Failure State ({100 - sliderPosition}%)
              </span>
              <span className="text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Classic Glass & Mirror Standard ({sliderPosition}%)
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="w-full accent-[#0873b9] cursor-ew-resize h-2 bg-slate-200 rounded-lg appearance-none"
              aria-label="Comparison slider"
            />
          </div>

          {/* 2 Side-by-Side Detailed Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Failed State Card */}
            <div className="bg-white border border-rose-200 rounded-xl p-6 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 left-0 h-1 bg-rose-500" />
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600">
                  {current.before.tag}
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                  {current.before.badge}
                </span>
              </div>

              <h4 className="text-lg font-bold font-heading text-slate-900 mb-3">
                {current.before.title}
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-600">
                {current.before.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Repaired State Card */}
            <div className="bg-white border border-emerald-200 rounded-xl p-6 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 left-0 h-1 bg-emerald-500" />
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600">
                  {current.after.tag}
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <Shield className="w-3 h-3 text-emerald-600" />
                  {current.after.badge}
                </span>
              </div>

              <h4 className="text-lg font-bold font-heading text-slate-900 mb-3">
                {current.after.title}
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-600">
                {current.after.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-700">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
