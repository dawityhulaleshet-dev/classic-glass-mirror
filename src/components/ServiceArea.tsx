import React, { useState } from 'react';
import { MapPin, Search, Clock, Truck, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { SERVICE_CITIES, PHONE_HREF, PHONE_NUMBER } from '../data/doorData.ts';

interface ServiceAreaProps {
  onOpenDispatch: () => void;
}

export const ServiceArea: React.FC<ServiceAreaProps> = ({ onOpenDispatch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState(SERVICE_CITIES[0]);

  const filteredCities = SERVICE_CITIES.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.county.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.zipExamples.some((z) => z.includes(searchQuery))
  );

  return (
    <section id="service-area" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0873b9] mb-3">
            <span className="w-5 h-0.5 bg-[#0873b9] rounded-full inline-block" />
            <span>DFW Metroplex Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10283a] font-heading tracking-tight mb-4">
            Rapid Response Across Dallas & Fort Worth
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our fleet of mobile commercial glass and door repair workshops is staged across North Texas to reach your location quickly when an entrance fails.
          </p>
        </div>

        {/* Interactive Search & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: City List & Search (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by city (e.g., Dallas, Plano) or 5-digit ZIP..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0873b9] focus:outline-none transition-colors"
              />
            </div>

            {/* City Chips Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
              {filteredCities.map((city) => {
                const isSelected = selectedCity.name === city.name;
                return (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => setSelectedCity(city)}
                    className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#0873b9] bg-[#eaf5fb] font-bold text-[#0873b9] shadow-sm'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold truncate">{city.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#0873b9] shrink-0" />}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>~{city.avgResponseMins} min dispatch</span>
                    </div>
                  </button>
                );
              })}
              {filteredCities.length === 0 && (
                <div className="col-span-full py-8 text-center text-xs text-slate-500">
                  No direct city match for "{searchQuery}". We service all Dallas-Fort Worth metro areas! Call {PHONE_NUMBER}.
                </div>
              )}
            </div>
          </div>

          {/* Right: Selected Sector Dispatch Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#10283a] text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 block">
                    Metro Sector Status
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {selectedCity.name}, TX
                  </h3>
                  <div className="text-xs text-slate-400 mt-0.5">{selectedCity.county}</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-[#163449] p-3.5 rounded-xl border border-[#234760] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <span className="text-xs text-slate-300">Estimated Response Time</span>
                  </div>
                  <span className="text-sm font-bold text-sky-300 tabular-nums">
                    ~{selectedCity.avgResponseMins} Minutes
                  </span>
                </div>

                <div className="bg-[#163449] p-3.5 rounded-xl border border-[#234760] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Truck className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-slate-300">Active Mobile Units</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">
                    {selectedCity.activeTrucks} Trucks Staged
                  </span>
                </div>

                <div className="text-xs text-slate-400">
                  <span className="text-slate-300 font-semibold block mb-1">Key ZIP Codes Served:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCity.zipExamples.map((zip) => (
                      <span key={zip} className="px-2 py-0.5 rounded bg-[#163449] text-slate-300 text-[11px] font-mono">
                        {zip}
                      </span>
                    ))}
                    <span className="text-[11px] text-slate-400 self-center">+ All Surrounding</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href={PHONE_HREF}
                  className="w-full py-3 px-4 bg-[#0873b9] hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Call {selectedCity.name} Dispatch: {PHONE_NUMBER}</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenDispatch}
                  className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl transition-all border border-white/15 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Online Dispatch in {selectedCity.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
