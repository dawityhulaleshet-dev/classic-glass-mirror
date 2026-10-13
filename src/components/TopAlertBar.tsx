import React, { useState, useEffect } from 'react';
import { Phone, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../data/doorData.ts';

export const TopAlertBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Central Time (Dallas/Fort Worth)
      const formatted = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Chicago',
        hour: 'numeric',
        minute: '2-digit',
      });
      setCurrentTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0b1e2c] text-slate-300 text-xs border-b border-slate-800/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        <div className="flex items-center gap-4 text-slate-300">
          <div className="flex items-center gap-1.5 font-medium text-slate-200">
            <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>24/7 Emergency Commercial Door Dispatch</span>
          </div>
          <span className="hidden md:inline text-slate-600">·</span>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>Serving Dallas–Fort Worth & Surrounding Areas</span>
          </div>
          {currentTime && (
            <span className="hidden lg:inline text-slate-400">
              (DFW Local Time: {currentTime} CT)
            </span>
          )}
        </div>

        <div className="flex items-center gap-5 ml-auto">
          <div className="hidden md:flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Licensed & Commercial Glazing Insured</span>
          </div>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-1.5 font-bold text-white hover:text-sky-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>Call 24/7: <span className="text-sky-300">{PHONE_NUMBER}</span></span>
          </a>
        </div>
      </div>
    </div>
  );
};
