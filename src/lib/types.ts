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
