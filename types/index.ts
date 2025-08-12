export interface Report {
  id: string;
  hash: string;
  description: string;
  department: string;
  location: string;
  date: string;
  amount?: number;
  serviceType: string;
  severity: 'low' | 'medium' | 'high';
  status: 'pending' | 'verified' | 'flagged';
  createdAt: string;
}

export interface ReportSubmission {
  description: string;
  department: string;
  location: string;
  date: string;
  amount?: number;
  serviceType: string;
  media?: File[];
}

export interface AggregatedData {
  totalReports: number;
  departmentBreakdown: { [key: string]: number };
  locationBreakdown: { [key: string]: number };
  averageAmount: number;
  trends: { date: string; count: number }[];
}