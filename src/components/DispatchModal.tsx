import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Clock, AlertTriangle, ShieldCheck, Copy, Check, UploadCloud } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../data/doorData.ts';
import { DiagnosticSymptom, ServiceItem } from '../types.ts';

interface DispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledIssue?: string;
}

export const DispatchModal: React.FC<DispatchModalProps> = ({
  isOpen,
  onClose,
  prefilledIssue,
}) => {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Dallas');
  const [issueType, setIssueType] = useState('Pivot & Alignment Issue');
  const [urgency, setUrgency] = useState('Same-Day Urgent');
  const [notes, setNotes] = useState('');
  const [photoName, setPhotoName] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    id: string;
    createdAt: string;
    eta: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync prefilled data
  useEffect(() => {
    if (prefilledIssue) {
      setIssueType(prefilledIssue);
    } else {
      setIssueType('Commercial Storefront Door Repair');
    }
  }, [prefilledIssue]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Realistic brief submission simulation
    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const ticketId = `DFW-${randomNum}`;
      const now = new Date();
      setSubmittedTicket({
        id: ticketId,
        createdAt: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        eta: urgency.includes('Emergency') ? '35–55 Minutes' : '2–4 Hours (Same Day)',
      });
      setIsSubmitting(false);
    }, 800);
  };

  const handleCopyTicket = () => {
    if (submittedTicket) {
      navigator.clipboard.writeText(submittedTicket.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedTicket ? (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0873b9] block mb-1">
                Commercial Dispatch Desk
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#10283a]">
                Request Commercial Door Service
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                For urgent emergencies, call <a href={PHONE_HREF} className="text-[#0873b9] font-bold underline">{PHONE_NUMBER}</a> immediately.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Miller"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm focus:bg-white focus:border-[#0873b9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business / Property Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Uptown Retail Plaza"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm focus:bg-white focus:border-[#0873b9] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(214) 555-0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm focus:bg-white focus:border-[#0873b9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="manager@business.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm focus:bg-white focus:border-[#0873b9] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Service Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2400 McKinney Ave"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm focus:bg-white focus:border-[#0873b9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / DFW Area *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm focus:bg-white focus:border-[#0873b9] focus:outline-none"
                  >
                    <option value="Dallas">Dallas</option>
                    <option value="Fort Worth">Fort Worth</option>
                    <option value="Arlington">Arlington</option>
                    <option value="Plano">Plano</option>
                    <option value="Irving">Irving</option>
                    <option value="Frisco">Frisco</option>
                    <option value="Grand Prairie">Grand Prairie</option>
                    <option value="Carrollton">Carrollton</option>
                    <option value="Garland">Garland</option>
                    <option value="Other DFW Area">Other DFW Area</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Issue Category
                  </label>
                  <input
                    type="text"
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm focus:bg-white focus:border-[#0873b9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Urgency Level
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm focus:bg-white focus:border-[#0873b9] focus:outline-none"
                  >
                    <option value="24/7 Immediate Emergency">24/7 Immediate Emergency (Under 60 Mins)</option>
                    <option value="Same-Day Urgent">Same-Day Urgent</option>
                    <option value="Scheduled Assessment (Next 48h)">Scheduled Assessment (Next 48h)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Issue Details / Measurements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe door behavior (e.g. scraping on bottom right, mortise key spinning, closer leaking oil)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm focus:bg-white focus:border-[#0873b9] focus:outline-none"
                />
              </div>

              {/* Photo Upload helper */}
              <div className="p-3 bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <UploadCloud className="w-4 h-4 text-slate-400" />
                  <span>{photoName ? photoName : 'Attach photo of door hardware (optional)'}</span>
                </div>
                <label className="px-2.5 py-1 bg-white border border-slate-200 rounded text-[11px] font-bold text-[#0873b9] hover:bg-slate-50 cursor-pointer">
                  <span>Browse</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setPhotoName(e.target.files[0].name);
                      }
                    }}
                  />
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-[#0873b9] hover:bg-[#07629e] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Dispatching Request...</span>
                  ) : (
                    <span>Submit Service Request</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                Request Confirmed
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#10283a]">
                Technician Dispatched
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Your commercial door work order has been created. A North Texas mobile technician has been alerted with your location.
              </p>
            </div>

            {/* Ticket Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left max-w-sm mx-auto space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs text-slate-500">Dispatch Work Order</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold font-mono text-[#0873b9]">{submittedTicket.id}</span>
                  <button
                    type="button"
                    onClick={handleCopyTicket}
                    className="p-1 text-slate-400 hover:text-slate-700"
                    title="Copy Ticket ID"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Facility:</span>
                <span className="font-semibold text-slate-800">{businessName}</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Location:</span>
                <span className="font-semibold text-slate-800">{address}, {city}</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Estimated Arrival:</span>
                <span className="font-bold text-emerald-700 tabular-nums">{submittedTicket.eta}</span>
              </div>
            </div>

            <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 text-xs text-slate-700 max-w-sm mx-auto">
              <div className="font-bold text-[#10283a] mb-1 flex items-center justify-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#0873b9]" />
                <span>Need immediate update?</span>
              </div>
              <span>Reference <strong>{submittedTicket.id}</strong> when calling our dispatch line at <a href={PHONE_HREF} className="font-bold text-[#0873b9]">{PHONE_NUMBER}</a>.</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors"
            >
              Done & Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
