import React, { useState } from 'react';
import { Wrench, AlertTriangle, CheckCircle2, ArrowRight, ShieldAlert, Phone, HelpCircle } from 'lucide-react';
import { DIAGNOSTIC_SYMPTOMS, PHONE_HREF, PHONE_NUMBER } from '../data/doorData.ts';
import { DiagnosticSymptom } from '../types.ts';

interface DiagnosticWizardProps {
  onSelectForBooking: (symptom: DiagnosticSymptom, doorType: string, urgency: string) => void;
}

export const DiagnosticWizard: React.FC<DiagnosticWizardProps> = ({ onSelectForBooking }) => {
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>(DIAGNOSTIC_SYMPTOMS[0].id);
  const [doorType, setDoorType] = useState<string>('Aluminum Glass Storefront');
  const [urgency, setUrgency] = useState<string>('Same-Day Urgent');

  const currentSymptom = DIAGNOSTIC_SYMPTOMS.find((s) => s.id === selectedSymptomId) || DIAGNOSTIC_SYMPTOMS[0];

  const doorTypes = [
    { label: 'Aluminum Glass Storefront', desc: 'Standard commercial retail & plaza entrance' },
    { label: 'Hollow Metal Steel Door', desc: 'Heavy rear exit, warehouse or service corridor' },
    { label: 'Frameless Glass (Herculite)', desc: '1/2" thick architectural glass without frame' },
    { label: 'Double Commercial Vestibule', desc: 'Paired entrance doors with coordinator' },
  ];

  const urgencyOptions = [
    { label: 'Emergency (Unsecured)', desc: 'Premises cannot lock or dangerous door drop' },
    { label: 'Same-Day Urgent', desc: 'High customer traffic, needs fix today' },
    { label: 'Scheduled Maintenance', desc: 'Operating but showing wear, schedule within 48h' },
  ];

  const handleBookClick = () => {
    onSelectForBooking(currentSymptom, doorType, urgency);
  };

  return (
    <section id="diagnostic" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0873b9] mb-3">
            <span className="w-5 h-0.5 bg-[#0873b9] rounded-full inline-block" />
            <span>Interactive Troubleshooting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10283a] font-heading tracking-tight mb-4">
            Entrance Diagnostic & Repair Estimator
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Not sure what part has failed? Select your door symptoms below for an immediate technical evaluation, safety hazard assessment, and estimated repair timeframe.
          </p>
        </div>

        {/* 2-Column Interactive Tool */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Symptom Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Step 1: What symptom is your entrance experiencing?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DIAGNOSTIC_SYMPTOMS.map((symptom) => {
                  const isSelected = symptom.id === selectedSymptomId;
                  return (
                    <button
                      key={symptom.id}
                      type="button"
                      onClick={() => setSelectedSymptomId(symptom.id)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#0873b9] bg-[#eaf5fb] shadow-sm ring-1 ring-[#0873b9]'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className={`text-sm font-bold ${isSelected ? 'text-[#0873b9]' : 'text-slate-900'}`}>
                          {symptom.title}
                        </span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#0873b9] shrink-0 mt-0.5" />}
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {symptom.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Door Type Segmented Control */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Step 2: What type of commercial door is it?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {doorTypes.map((type) => {
                  const isSelected = doorType === type.label;
                  return (
                    <button
                      key={type.label}
                      type="button"
                      onClick={() => setDoorType(type.label)}
                      className={`text-left px-3.5 py-2.5 rounded-lg border text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#10283a] bg-[#10283a] text-white shadow-sm font-bold'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-semibold">{type.label}</div>
                      <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {type.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Urgency Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Step 3: Response Urgency
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {urgencyOptions.map((opt) => {
                  const isSelected = urgency === opt.label;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setUrgency(opt.label)}
                      className={`text-left p-3 rounded-lg border text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#0873b9] bg-[#eaf5fb] font-bold text-[#0873b9]'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-semibold">{opt.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5 leading-snug">{opt.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Diagnostic Card Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm relative">
              {/* Header of Report */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/90 mb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Diagnostic Analysis
                  </span>
                  <h3 className="text-lg font-bold font-heading text-[#10283a]">
                    Commercial Assessment
                  </h3>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md ${
                      currentSymptom.severity === 'Emergency'
                        ? 'bg-rose-100 text-rose-800'
                        : currentSymptom.severity === 'High'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>{currentSymptom.severity} Priority</span>
                  </span>
                </div>
              </div>

              {/* Probable Technical Causes */}
              <div className="mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                  Probable Mechanical Causes:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {currentSymptom.probableCauses.map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0873b9] mt-1.5 shrink-0" />
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning note */}
              <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200/70 mb-5 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block mb-0.5">Technician Warning:</strong>
                  <span>{currentSymptom.warningNote}</span>
                </div>
              </div>

              {/* Repair Specs (Time & Cost) */}
              <div className="grid grid-cols-2 gap-3 py-4 border-y border-slate-200 mb-6 bg-white/70 -mx-6 px-6 sm:-mx-7 sm:px-7">
                <div>
                  <span className="text-[11px] text-slate-500 block">Typical Repair Time</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 tabular-nums">
                    {currentSymptom.typicalRepairTime}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Estimated Cost Range</span>
                  <span className="text-xs sm:text-sm font-bold text-[#0873b9] tabular-nums">
                    {currentSymptom.estimatedCostRange}
                  </span>
                </div>
              </div>

              {/* Next Action Callout */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleBookClick}
                  className="w-full py-3 px-4 bg-[#0873b9] hover:bg-[#07629e] text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Repair with this Diagnostic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={PHONE_HREF}
                  className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0873b9]" />
                  <span>Call Emergency Dispatch: {PHONE_NUMBER}</span>
                </a>
              </div>

              <div className="mt-4 text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                <HelpCircle className="w-3 h-3 text-slate-400" />
                <span>On-site technician will verify hardware dimensions prior to commencing work.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
