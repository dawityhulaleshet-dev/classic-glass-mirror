export interface DiagnosticSymptom {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  category: 'pivot' | 'lock' | 'closer' | 'glass' | 'panic' | 'wind';
  probableCauses: string[];
  severity: 'Emergency' | 'High' | 'Moderate';
  recommendedAction: string;
  warningNote: string;
  typicalRepairTime: string;
  estimatedCostRange: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
  hardwareCovered: string[];
}

export interface ProjectStudy {
  id: string;
  clientType: string;
  location: string;
  issue: string;
  resolution: string;
  timeframe: string;
  hardware: string;
}

export interface ServiceCity {
  name: string;
  county: string;
  avgResponseMins: number;
  activeTrucks: number;
  zipExamples: string[];
}
