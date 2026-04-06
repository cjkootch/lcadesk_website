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
}
