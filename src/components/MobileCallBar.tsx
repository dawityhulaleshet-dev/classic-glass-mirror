import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER } from '../data/doorData.ts';

interface MobileCallBarProps {
  onOpenDispatch: () => void;
}

export const MobileCallBar: React.FC<MobileCallBarProps> = ({ onOpenDispatch }) => {
  return (
    <div className="mobile-call">
      <a className="btn btn-primary" href={PHONE_HREF}>
        <Phone className="w-4 h-4" />
        <span>Call 24/7 ({PHONE_NUMBER})</span>
      </a>
      <button
        type="button"
        onClick={onOpenDispatch}
        className="btn btn-line"
      >
        <span>Request Service</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
