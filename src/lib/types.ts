export interface PublicOpportunity {
  id: string;
  contractor_name: string;
  type: "supplier" | "employment";
  notice_type: string | null;
  title: string;
  description: string | null;
  lca_category: string | null;
  employment_category: string | null;
  posted_date: string | null;
  deadline: string | null;
  source_url: string | null;
  ai_teaser: string | null;
  status: string | null;
  location: string | null;
  contract_type: string | null;
}

export interface PublicCompany {
  slug: string;
  companyName: string;
  companyType: string | null;
  industry: string | null;
  description: string | null;
  website: string | null;
  parentCompany: string | null;
  employeeEstimate: string | null;
  guyanaPresence: string | null;
  lcsRegistered: boolean;
  lcsCertId: string | null;
  lcsStatus: string | null;
  lcsExpirationDate: string | null;
  lcsAddress: string | null;
  lcsServiceCategories: string[];
  keyServices: string[] | null;
  activeOpportunities: number;
  totalOpportunities: number;
  openJobPostings: number;
  procurementCategories: string[];
  employmentCategories: string[];
  claimed: boolean;
}

export interface PublicJob {
  id: string;
  company_name: string;
  job_title: string;
  department: string | null;
  employment_type: string | null;
  location: string | null;
  summary: string | null;
  experience_required: string | null;
  education_required: string | null;
  closing_date: string | null;
  posted_date: string | null;
  source_url: string | null;
  guyanese_first_consideration: boolean;
  employment_category: string | null;
  salary_range: string | null;
  ai_teaser: string | null;
  responsibilities: string[] | null;
  skills: string[] | null;
  how_to_apply: string | null;
  notice_type: string | null;
  status: string | null;
}
