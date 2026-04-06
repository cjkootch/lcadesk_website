// Run: DATABASE_URL="your_neon_url" node seed.mjs
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

// Create table if it doesn't exist
await sql`CREATE TABLE IF NOT EXISTS lcs_opportunities (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  contractor_name TEXT,
  type TEXT NOT NULL DEFAULT 'supplier',
  lca_category TEXT,
  notice_type TEXT,
  description TEXT,
  deadline DATE,
  posted_date DATE DEFAULT CURRENT_DATE,
  source_url TEXT,
  location TEXT,
  contact_email TEXT
)`;

console.log("Table ready. Seeding data...");

// --- EMPLOYMENT (Jobs) ---
const jobs = [
  { title: "Senior Mechanical Engineer", contractor_name: "ExxonMobil Guyana", type: "employment", lca_category: "Technical", description: "Lead mechanical engineering support for FPSO operations. Must have 10+ years oil & gas experience. BOSIET certification required.", deadline: "2026-05-15", posted_date: "2026-03-28", location: "Georgetown / Offshore" },
  { title: "HSE Coordinator", contractor_name: "SBM Offshore", type: "employment", lca_category: "Technical", description: "Coordinate health, safety, and environment programs for offshore operations. NEBOSH certification preferred. Minimum 5 years HSE experience in oil & gas.", deadline: "2026-04-30", posted_date: "2026-03-25", location: "Georgetown" },
  { title: "Logistics Coordinator", contractor_name: "Saipem Guyana", type: "employment", lca_category: "Non-Technical", description: "Manage supply chain logistics for onshore base operations. Experience with customs clearance and freight forwarding. Valid driver's license required.", deadline: "2026-05-01", posted_date: "2026-03-20", location: "Georgetown" },
  { title: "Welding Supervisor (6G Certified)", contractor_name: "TechnipFMC", type: "employment", lca_category: "Technical", description: "Supervise welding teams for subsea pipeline fabrication. Must hold 6G/6GR certifications. Offshore rotation schedule.", deadline: "2026-04-25", posted_date: "2026-03-22", location: "Offshore" },
  { title: "Country Manager", contractor_name: "Haliburton Guyana", type: "employment", lca_category: "Managerial", description: "Oversee all Guyana operations including government relations, local content compliance, and P&L management. MBA preferred. 15+ years oil & gas leadership.", deadline: "2026-05-30", posted_date: "2026-04-01", location: "Georgetown" },
  { title: "Electrical Technician", contractor_name: "Schlumberger", type: "employment", lca_category: "Technical", description: "Install, maintain, and troubleshoot electrical systems on FPSO. Must have valid electrical license and BOSIET/HUET certification.", deadline: "2026-04-28", posted_date: "2026-03-18", location: "Offshore" },
  { title: "Catering Manager", contractor_name: "ESG Guyana Inc.", type: "employment", lca_category: "Non-Technical", description: "Manage offshore catering operations for 120-person crew. Food safety certification required. Experience in offshore camp management.", deadline: "2026-04-20", posted_date: "2026-03-15", location: "Offshore" },
  { title: "Project Controls Engineer", contractor_name: "McDermott International", type: "employment", lca_category: "Technical", description: "Monitor project schedules, cost tracking, and progress reporting for subsea construction project. Primavera P6 proficiency required.", deadline: "2026-05-10", posted_date: "2026-03-30", location: "Georgetown" },
  { title: "Compliance Officer", contractor_name: "CGX Energy", type: "employment", lca_category: "Managerial", description: "Ensure compliance with LCA 2021 requirements including local content reporting, supplier engagement, and employment targets. Knowledge of Guyanese regulatory framework essential.", deadline: "2026-05-20", posted_date: "2026-04-02", location: "Georgetown" },
  { title: "Warehouse Operator", contractor_name: "Baker Hughes", type: "employment", lca_category: "Non-Technical", description: "Manage inventory, receiving, and dispatch at onshore supply base. Forklift certification preferred. Shift work required.", deadline: "2026-04-22", posted_date: "2026-03-19", location: "Houston, Demerara" },
  { title: "Instrumentation Technician", contractor_name: "ExxonMobil Guyana", type: "employment", lca_category: "Technical", description: "Calibrate and maintain process instrumentation on Liza Unity FPSO. CompEx certification preferred. 3+ years offshore experience.", deadline: "2026-05-05", posted_date: "2026-03-26", location: "Offshore" },
  { title: "Finance Director", contractor_name: "Tullow Oil Guyana", type: "employment", lca_category: "Managerial", description: "Direct financial operations for Guyana business unit including budgeting, treasury, and tax compliance. CPA/ACCA qualification required.", deadline: "2026-06-01", posted_date: "2026-04-03", location: "Georgetown" },
  { title: "Security Guard (Armed)", contractor_name: "GardaWorld Guyana", type: "employment", lca_category: "Non-Technical", description: "Provide security services at onshore oil & gas facilities. Must hold valid firearms license and security guard certification from Guyana Police Force.", deadline: "2026-04-18", posted_date: "2026-03-14", location: "Demerara" },
  { title: "Environmental Monitoring Specialist", contractor_name: "CNOOC Petroleum Guyana", type: "employment", lca_category: "Technical", description: "Conduct environmental impact monitoring including water quality, air emissions, and waste management. BSc Environmental Science required.", deadline: "2026-05-12", posted_date: "2026-03-29", location: "Georgetown / Field" },
  { title: "Administrative Assistant", contractor_name: "Total Energies Guyana", type: "employment", lca_category: "Non-Technical", description: "Provide administrative support to country office. Proficiency in Microsoft Office suite. 2+ years office experience.", deadline: "2026-04-15", posted_date: "2026-03-12", location: "Georgetown" },
  { title: "Crane Operator", contractor_name: "Saipem Guyana", type: "employment", lca_category: "Technical", description: "Operate offshore cranes for cargo handling on installation vessel. Must hold OPITO Stage 3 crane operator certification. BOSIET required.", deadline: "2026-05-08", posted_date: "2026-03-27", location: "Offshore" },
  { title: "HR Business Partner", contractor_name: "SBM Offshore", type: "employment", lca_category: "Managerial", description: "Support HR operations including recruitment of Guyanese nationals, training programs, and local content workforce reporting. SHRM certification preferred.", deadline: "2026-05-25", posted_date: "2026-04-01", location: "Georgetown" },
  { title: "Driver / Transport Coordinator", contractor_name: "Schlumberger", type: "employment", lca_category: "Non-Technical", description: "Coordinate personnel transport between Georgetown and shore base. Valid heavy vehicle license. Defensive driving certification required.", deadline: "2026-04-19", posted_date: "2026-03-16", location: "Georgetown / Demerara" },
];

// --- SUPPLIER (Opportunities) ---
const opportunities = [
  { title: "Marine Vessel Supply — Crew Boats", contractor_name: "ExxonMobil Guyana", type: "supplier", lca_category: "Marine & Offshore", notice_type: "RFQ", description: "Supply of crew transfer vessels for offshore operations. Vessels must meet OVID standards. 2-year contract with option to extend.", deadline: "2026-05-20", posted_date: "2026-04-01", location: "Georgetown / Offshore" },
  { title: "Onshore Base Catering Services", contractor_name: "Saipem Guyana", type: "supplier", lca_category: "Catering & Hospitality", notice_type: "RFP", description: "Provide catering and camp management services for 200-person onshore facility. Must comply with food safety standards. 3-year contract.", deadline: "2026-05-15", posted_date: "2026-03-28", location: "Houston, Demerara" },
  { title: "Trucking & Heavy Haulage Services", contractor_name: "TechnipFMC", type: "supplier", lca_category: "Transportation & Logistics", notice_type: "EOI", description: "Expression of interest for heavy haulage of fabricated modules from shore base to port. Must have flatbed trailers rated for 50+ tonnes.", deadline: "2026-04-30", posted_date: "2026-03-25", location: "Demerara" },
  { title: "Structural Steel Fabrication", contractor_name: "McDermott International", type: "supplier", lca_category: "Construction & Fabrication", notice_type: "RFQ", description: "Fabrication of structural steel components for offshore platform modifications. AWS D1.1 welding standards. Must have covered workshop facility.", deadline: "2026-05-10", posted_date: "2026-03-30", location: "Georgetown" },
  { title: "Offshore Medivac & Medical Services", contractor_name: "SBM Offshore", type: "supplier", lca_category: "Medical & HSE", notice_type: "RFP", description: "Provide 24/7 medical support including offshore medics, medivac helicopter standby, and onshore clinic. Paramedic and doctor staffing required.", deadline: "2026-05-25", posted_date: "2026-04-02", location: "Georgetown / Offshore" },
  { title: "BOSIET & HUET Safety Training", contractor_name: "ExxonMobil Guyana", type: "supplier", lca_category: "Training & Development", notice_type: "RFQ", description: "Delivery of OPITO-approved BOSIET, HUET, and sea survival training courses for 500+ personnel annually. Must have local training facility or partnership.", deadline: "2026-05-05", posted_date: "2026-03-22", location: "Georgetown" },
  { title: "Environmental Monitoring Equipment", contractor_name: "CNOOC Petroleum Guyana", type: "supplier", lca_category: "Engineering & Technical", notice_type: "RFI", description: "Request for information on suppliers of water quality monitoring equipment, air quality sensors, and environmental data logging systems.", deadline: "2026-04-25", posted_date: "2026-03-20", location: "Georgetown" },
  { title: "Customs Brokerage & Freight Forwarding", contractor_name: "Haliburton Guyana", type: "supplier", lca_category: "Transportation & Logistics", notice_type: "RFQ", description: "Customs clearance and freight forwarding services for equipment imports. Must be licensed customs broker with experience in oil & gas sector.", deadline: "2026-04-28", posted_date: "2026-03-18", location: "Georgetown" },
  { title: "Offshore Waste Management", contractor_name: "Schlumberger", type: "supplier", lca_category: "Medical & HSE", notice_type: "EOI", description: "Expression of interest for offshore and onshore waste management including hazardous waste disposal, recycling, and waste tracking systems.", deadline: "2026-05-18", posted_date: "2026-04-03", location: "Georgetown / Offshore" },
  { title: "Concrete Supply & Civil Works", contractor_name: "CGX Energy", type: "supplier", lca_category: "Construction & Fabrication", notice_type: "RFQ", description: "Supply of ready-mix concrete and civil construction services for new shore base facility. Must meet API standards for oil & gas infrastructure.", deadline: "2026-05-08", posted_date: "2026-03-26", location: "Berbice" },
  { title: "Industrial Laundry Services", contractor_name: "ESG Guyana Inc.", type: "supplier", lca_category: "Catering & Hospitality", notice_type: "RFP", description: "Weekly collection, laundering, and return of offshore coveralls, bed linens, and towels for 3 FPSOs. Must handle FR-rated garments.", deadline: "2026-04-22", posted_date: "2026-03-15", location: "Georgetown" },
  { title: "Geotechnical Survey Services", contractor_name: "Total Energies Guyana", type: "supplier", lca_category: "Engineering & Technical", notice_type: "RFP", description: "Conduct nearshore and onshore geotechnical surveys for planned pipeline landfall site. Must have survey vessel and laboratory capability.", deadline: "2026-06-01", posted_date: "2026-04-01", location: "Offshore / Demerara" },
  { title: "Port Services & Stevedoring", contractor_name: "Baker Hughes", type: "supplier", lca_category: "Marine & Offshore", notice_type: "EOI", description: "Wharfage, stevedoring, and port handling services at Georgetown port. Crane capability for 25+ tonne lifts required.", deadline: "2026-05-12", posted_date: "2026-03-29", location: "Georgetown" },
  { title: "Skills Development & Apprenticeship Program", contractor_name: "ExxonMobil Guyana", type: "supplier", lca_category: "Training & Development", notice_type: "RFI", description: "Seeking partners to develop and deliver technical apprenticeship programs for Guyanese nationals in welding, electrical, and instrumentation trades.", deadline: "2026-05-30", posted_date: "2026-04-02", location: "Georgetown" },
  { title: "Equipment Maintenance & Repair", contractor_name: "Tullow Oil Guyana", type: "supplier", lca_category: "Maintenance & Repair", notice_type: "RFQ", description: "Maintenance and repair services for rotating equipment including pumps, compressors, and generators. Must have certified technicians and spare parts inventory.", deadline: "2026-05-02", posted_date: "2026-03-24", location: "Georgetown / Offshore" },
];

// Insert jobs
for (const job of jobs) {
  await sql`INSERT INTO lcs_opportunities (title, contractor_name, type, lca_category, description, deadline, posted_date, location)
    VALUES (${job.title}, ${job.contractor_name}, ${job.type}, ${job.lca_category}, ${job.description}, ${job.deadline}, ${job.posted_date}, ${job.location})`;
}
console.log(`Inserted ${jobs.length} job postings`);

// Insert opportunities
for (const opp of opportunities) {
  await sql`INSERT INTO lcs_opportunities (title, contractor_name, type, lca_category, notice_type, description, deadline, posted_date, location)
    VALUES (${opp.title}, ${opp.contractor_name}, ${opp.type}, ${opp.lca_category}, ${opp.notice_type}, ${opp.description}, ${opp.deadline}, ${opp.posted_date}, ${opp.location})`;
}
console.log(`Inserted ${opportunities.length} procurement opportunities`);

// Verify
const total = await sql`SELECT type, count(*) as cnt FROM lcs_opportunities GROUP BY type`;
console.log("\nFinal counts:", total);
console.log("Done! Your boards should now show data.");
