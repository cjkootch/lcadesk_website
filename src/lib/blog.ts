export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string;
}

export const categories = [
  "All",
  "Regulatory Updates",
  "Compliance Tips",
  "Industry Analysis",
  "Product Updates",
] as const;

export const posts: BlogPost[] = [
  {
    slug: "understanding-guyana-lca-v4-1-template-changes",
    title: "Understanding Guyana's LCA v4.1 Template Changes",
    description:
      "The Local Content Secretariat released Version 4.1 of the Half-Yearly Report Submission Guideline in June 2025. Here's what changed and what it means for your next filing.",
    category: "Regulatory Updates",
    author: "LCA Desk Team",
    date: "2025-12-15",
    readTime: "6 min read",
    featured: true,
    content: `The Local Content Secretariat released Version 4.1 of the Half-Yearly Report Submission Guideline in June 2025, updating the framework that governs how contractors, sub-contractors, and licensees report their local content performance.

## What Changed in v4.1

The update primarily affects three areas: the Employment sub-report, the Expenditure (Procurement) sub-report, and the Capacity Development sub-report.

### Employment Sub-Report

The v4.1 template introduces more granular workforce categorization. Previously, companies reported employment figures across broad categories. The new template requires breakdown by:

- **Position level** (management, professional, technical, skilled, semi-skilled, unskilled)
- **Nationality** (Guyanese vs. non-Guyanese)
- **Department or function**
- **Full-time equivalent (FTE) basis**

This change makes it harder to obscure non-compliance by bundling categories together. The Secretariat can now see exactly where Guyanese nationals are — and aren't — being employed.

### Expenditure Sub-Report

The procurement reporting now explicitly requires categorization across all 14 LCA service categories, rather than allowing lump-sum reporting. Each category must show:

- Total spend for the period
- Spend with Guyanese suppliers (LCS-registered)
- Spend with foreign suppliers
- Percentage of local content achieved

Companies that previously reported aggregate procurement numbers will need to restructure their data collection processes.

### Capacity Development Sub-Report

The training and capacity development section now requires specific documentation of:

- Training programs conducted (with dates, duration, and participant counts)
- Skills transfer initiatives and their outcomes
- Technology transfer activities
- Succession planning for positions currently held by non-Guyanese nationals

## What This Means for Your Next Filing

If you're filing the H2 2025 report (due January 30, 2026), you need to use the v4.1 template. The Secretariat has indicated that submissions using the older v4.0 template will be returned for correction — which effectively means a late filing if you miss the deadline.

### Key Action Items

1. **Download the new template** from the Secretariat or use LCA Desk's updated wizard (already reflects v4.1).
2. **Restructure your data collection** to capture the new granularity, especially for employment and procurement.
3. **Start early** — the additional detail required means more coordination across departments.
4. **Cross-check your narrative** against the data template. The Secretariat has flagged inconsistencies between the two as a top audit trigger.

## How LCA Desk Helps

LCA Desk's report wizard has been updated to reflect all v4.1 changes. The guided interface walks you through every required field, flags missing data in real-time, and auto-generates both the narrative PDF and the Excel data template in the correct format.

If you're still preparing reports manually, the v4.1 changes make this a good time to consider automation. The additional granularity means more opportunities for errors — and the Secretariat is actively cross-checking submissions.`,
  },
  {
    slug: "5-common-mistakes-half-yearly-report-filings",
    title: "5 Common Mistakes in Half-Yearly Report Filings",
    description:
      "These are the issues that most commonly trigger follow-up requests from the Secretariat — or worse, penalties. Here's how to avoid them.",
    category: "Compliance Tips",
    author: "LCA Desk Team",
    date: "2025-11-28",
    readTime: "5 min read",
    content: `Filing your half-yearly report shouldn't be stressful, but the Local Content Secretariat reviews every submission — and inconsistencies trigger follow-up requests, delays, and potential penalties. Here are the five mistakes we see most often.

## 1. Inconsistent Numbers Between Narrative and Data Template

The most common audit trigger. Your PDF narrative report says you employed 47 Guyanese nationals in professional roles, but the Excel template shows 43. The Secretariat cross-checks these figures, and mismatches always result in a Request for Information (RFI).

**How to avoid it:** Generate both documents from the same data source. If you're using LCA Desk, the narrative and template are auto-generated from your input — they can't be inconsistent.

## 2. Missing or Invalid LCS Certificate Numbers

When reporting procurement spend with "Guyanese suppliers," each supplier should have a valid Local Content Secretariat registration number. Suppliers without valid LCS registration don't count toward your local content percentage.

**How to avoid it:** Verify every supplier's LCS status before including them in your local content figures. LCA Desk's supplier verification tool checks certificates in real-time.

## 3. Lump-Sum Procurement Reporting

Reporting total procurement spend without breaking it down by the 14 LCA service categories doesn't demonstrate compliance with category-specific minimum targets. The Secretariat expects to see granular data.

**How to avoid it:** Categorize every purchase order and invoice by LCA service category as they occur — not at filing time. This is one of the biggest time-savers from setting up proper tracking early.

## 4. Late Submission Without Prior Approval

The deadlines are hard: July 30 for H1, January 30 for H2. Late submissions incur an automatic GY$1 million penalty — even if the report itself is perfect. Extensions can be requested, but must be approved before the deadline.

**How to avoid it:** Start preparing at least 6 weeks before the deadline. Set calendar reminders at 30, 14, and 7 days. LCA Desk sends automated reminders and tracks your filing status.

## 5. Empty Capacity Development Section

Some companies submit reports with no training or capacity development activities. This is a red flag — the LCA expects all companies to invest in building Guyanese capacity. An empty section invites scrutiny.

**How to avoid it:** Document all training activities throughout the period, even informal ones. Safety briefings, on-the-job training, mentorship programs, and skills workshops all count. Keep attendance records with dates and participant counts.

## The Cost of Mistakes

Each of these mistakes can result in a Request for Information from the Secretariat, which takes time and resources to respond to. Repeated issues can escalate to formal penalties. The simplest approach: use a system designed for LCA compliance that prevents these errors before submission.`,
  },
  {
    slug: "nigeria-vs-guyana-comparing-local-content-frameworks",
    title: "Nigeria vs. Guyana: Comparing Local Content Frameworks",
    description:
      "Two of the world's most important oil-producing nations, two different approaches to local content. Here's what operators need to know about compliance in both jurisdictions.",
    category: "Industry Analysis",
    author: "LCA Desk Team",
    date: "2025-11-10",
    readTime: "8 min read",
    content: `Nigeria and Guyana represent two of the most significant local content compliance environments in the global oil and gas industry. Nigeria's framework has been in place since 2010; Guyana's is newer but evolving rapidly. Companies operating in both — or considering expansion — need to understand the key differences.

## The Laws

**Nigeria:** The Nigerian Oil and Gas Industry Content Development Act (NOGICD Act) was enacted in 2010. It's one of the most comprehensive local content frameworks in the world, covering the entire petroleum value chain.

**Guyana:** The Local Content Act 2021 came into force as Guyana's oil production ramped up. While newer, it builds on lessons from Nigeria and other jurisdictions.

## Regulatory Bodies

**Nigeria:** The Nigerian Content Development and Monitoring Board (NCDMB), headquartered in Yenagoa, Bayelsa State. The NCDMB has broad powers including the ability to approve or reject contracts, halt projects, and debar companies.

**Guyana:** The Local Content Secretariat, under the Ministry of Natural Resources, based in Georgetown. The Secretariat reviews all filings and has enforcement powers under Sections 53-57 of the Act.

## Scope and Categories

**Nigeria:** 106 service categories with prescribed minimum Nigerian content levels ranging from 45% to 100%. Categories cover everything from engineering to insurance to legal services.

**Guyana:** 40+ service categories with first-consideration requirements for Guyanese suppliers. The framework is less prescriptive about minimum percentages but strictly enforces the first-consideration principle.

## Filing Requirements

**Nigeria:**
- Nigerian Content Plan (per project, prior to commencement)
- Performance Reports (quarterly/annually)
- Compliance Certificates (per project)
- R&D Fund Contributions (1% of contracts above US$100M)

**Guyana:**
- Half-Yearly Reports (H1 due July 30, H2 due January 30)
- Annual Local Content Plan
- Local Content Master Plan
- Annual Performance Report

## Penalties

**Nigeria:** Up to 5% of project value per offence. The NCDMB can also cancel contracts, halt projects, and debar companies from future bidding.

**Guyana:** GY$1 million to GY$50 million per offence, depending on the violation. The maximum penalty applies to operating without meeting minimum local content requirements.

## Key Differences for Operators

| Aspect | Nigeria | Guyana |
|--------|---------|--------|
| Maturity | 15+ years | 4 years |
| Approach | Prescriptive minimums | First-consideration principle |
| Categories | 106 | 40+ |
| Max Penalty | 5% of project value | GY$50M (~US$240K) |
| Workforce | 106 job categories tracked | 11 employment categories |
| R&D Fund | 1% of contracts >$100M | Not required |

## What This Means for Multi-Jurisdiction Operators

Companies operating in both Nigeria and Guyana face a complex compliance landscape. The good news: many of the underlying data requirements are similar. Employment data, procurement spend, and training activities must be tracked in both jurisdictions — the formats and deadlines differ.

This is where a unified compliance platform pays for itself. Instead of maintaining separate tracking systems and report formats for each country, a single system can capture your data once and generate compliant reports for each jurisdiction.

## LCA Desk Coverage

LCA Desk currently supports Guyana's Local Content Act with full report generation, gap detection, and deadline management. The Nigeria module (NCDMB compliance) is scheduled for Q3 2026. Companies operating in both jurisdictions will be able to manage all filings from a single dashboard.`,
  },
  {
    slug: "what-is-first-consideration-lca-guyana",
    title: "What Does 'First Consideration' Actually Mean Under the LCA?",
    description:
      "Section 22 of the Local Content Act requires 'first consideration' for Guyanese suppliers. But what does that mean in practice — and how is it enforced?",
    category: "Regulatory Updates",
    author: "LCA Desk Team",
    date: "2025-10-22",
    readTime: "4 min read",
    content: `"First consideration" is the cornerstone of Guyana's Local Content Act 2021. Section 22 requires that contractors, sub-contractors, and licensees give first consideration to Guyanese suppliers in procurement. But the Act doesn't define "first consideration" with precision — and that ambiguity creates compliance risk.

## What the Act Says

Section 22(1): "A contractor, sub-contractor or licensee shall, in the procurement of goods and services, give first consideration to a Guyanese supplier or service provider who is included in the Register."

Section 22(2): "Where a contractor, sub-contractor or licensee considers that a Guyanese supplier or service provider is not available or is unable to provide the goods or services required, the contractor, sub-contractor or licensee shall provide a written explanation to the Secretariat."

## What It Means in Practice

First consideration doesn't mean you must always choose the Guyanese supplier. It means you must:

1. **Actively seek** Guyanese suppliers on the Local Content Register
2. **Evaluate their bids** on fair and equitable terms
3. **Document your decision** — whether you chose the Guyanese supplier or not
4. **Explain in writing** if you bypassed a Guyanese supplier for a foreign one

The key is documentation. If a Guyanese supplier bids on a contract and you choose a foreign company instead, the Secretariat will want to see why. Price alone may not be sufficient justification — the Act implies a preference for local suppliers even if they're not the cheapest option.

## How the Secretariat Enforces It

The Secretariat reviews your procurement data in the half-yearly report. They look at:

- **Local content percentage** by service category
- **Written explanations** for foreign supplier selections
- **Patterns** — consistently bypassing Guyanese suppliers raises flags

The Secretariat also receives complaints from Guyanese suppliers who believe they were unfairly bypassed. These complaints trigger investigations.

## Common Misconceptions

**"First consideration means we just have to look at local suppliers."** No — you have to actively seek them out, evaluate them fairly, and document the process.

**"We can choose the cheapest option regardless of origin."** Not necessarily. The Act's intent is to build Guyanese capacity, and the Secretariat interprets first consideration broadly.

**"This only applies to large contracts."** The Act applies to all procurement, regardless of size.

## Best Practices

1. Maintain a database of LCS-registered suppliers in your service categories
2. Include LCS-registered suppliers in every RFQ/RFP process
3. Document your evaluation criteria and scoring before receiving bids
4. Keep written records of every procurement decision, especially when selecting foreign suppliers
5. Report first-consideration compliance accurately in your half-yearly reports`,
  },
  {
    slug: "preparing-for-h1-2026-filing-deadline",
    title: "Preparing for the H1 2026 Filing Deadline: A Timeline",
    description:
      "The H1 2026 half-yearly report is due July 30, 2026. Here's a week-by-week preparation timeline to ensure you file on time and avoid penalties.",
    category: "Compliance Tips",
    author: "LCA Desk Team",
    date: "2026-03-18",
    readTime: "5 min read",
    featured: false,
    content: `The H1 2026 half-yearly report covers January 1 – June 30, 2026, and is due to the Local Content Secretariat by July 30, 2026. Late submissions incur an automatic GY$1 million penalty. Here's how to prepare.

## Timeline

### Now – May 31: Data Collection Phase

This is where most companies fail. Don't wait until July to start collecting data.

**Employment data:**
- Confirm headcount by nationality, position level, and department as of June 30
- Track any hires, terminations, and transfers during the period
- Verify Guyanese nationals vs. non-Guyanese across all categories

**Procurement data:**
- Categorize all purchase orders by LCA service category
- Verify LCS registration status for every "Guyanese supplier" claim
- Calculate local content percentages by category

**Capacity development:**
- Document all training programs with dates, duration, and attendance
- Record skills transfer activities and outcomes
- Note any succession planning progress for positions held by non-Guyanese

### June 1–15: Data Validation

- Cross-check employment figures between HR, payroll, and immigration records
- Reconcile procurement data against financial records
- Verify all LCS certificate numbers are current
- Flag any gaps or inconsistencies

### June 16–30: Report Drafting

- Generate the Excel data template (v4.1 format)
- Draft the narrative PDF report
- Cross-check that narrative figures match the data template exactly
- Internal review by compliance officer and management

### July 1–15: Review and Approval

- Final review by senior management
- Legal review of any written explanations for foreign supplier selections
- Address any flagged compliance gaps
- Management sign-off

### July 16–25: Submission Preparation

- Final formatting check on both PDF and Excel
- Prepare submission email to localcontent@nre.gov.gy
- Keep submission at least 5 days before deadline for buffer

### July 26–30: Submit

- Email both documents to the Secretariat
- Save confirmation of submission
- Archive all supporting documentation

## Common Pitfalls at Each Stage

- **Data collection:** Waiting until June means scrambling to reconstruct 6 months of records
- **Validation:** Not cross-checking between departments leads to inconsistencies
- **Drafting:** Copy-pasting from the previous period without updating figures
- **Submission:** Sending the wrong template version (must be v4.1)

## How LCA Desk Helps

With LCA Desk, the timeline compresses significantly. If you've been entering data throughout the period, the report is essentially done when the period ends:

1. Data is captured in real-time through the guided wizard
2. Validation happens automatically — gaps are flagged immediately
3. Both the narrative PDF and Excel template are auto-generated
4. You download, review, and email to the Secretariat

Most LCA Desk users go from period-end to submission in 2-3 days instead of 4-6 weeks.`,
  },
  {
    slug: "lca-desk-q1-2026-product-update",
    title: "Q1 2026 Product Update: AI Summaries, Opportunity Alerts, and More",
    description:
      "A roundup of everything we shipped in Q1 2026 — including AI-powered opportunity summaries, contractor logos, email alerts, and the new Half-Yearly Report Guide.",
    category: "Product Updates",
    author: "LCA Desk Team",
    date: "2026-04-01",
    readTime: "3 min read",
    content: `Here's what we shipped in Q1 2026.

## AI-Powered Opportunity Summaries

Every opportunity on the procurement board now includes an AI-extracted scope of work summary. Our AI reads the source documents (including PDF attachments) and extracts key details — what's needed, who's eligible, and what the timeline looks like.

On the public site, you can see a preview of each summary. Full analysis is available to registered users.

## Contractor Logos

Opportunity cards now display recognizable company logos for all major contractors — ExxonMobil, Halliburton, TotalEnergies, Baker Hughes, and 15+ others. Small detail, big improvement for scanning the board quickly.

## Email Alerts

You can now subscribe to filing deadline reminders and new opportunity alerts directly from the website — no account required. We'll email you 30, 14, and 7 days before each LCA filing deadline.

## Half-Yearly Report Guide

We published a comprehensive guide to the LCA Half-Yearly Report covering deadlines, who must file, the three required sub-reports, penalties, and common filing mistakes. It's the most detailed public resource on half-yearly report compliance.

## Suriname Market Page

We added Suriname to our markets coverage, with details on Block 58 (TotalEnergies/APA), Staatsolie, and the emerging regulatory framework. Sign up for updates as the Suriname module develops.

## Nigeria Market Page

The Nigeria page now includes full coverage of the NOGICD Act 2010 — 106 service categories, NCDMB enforcement powers, filing requirements, penalties, and a Nigeria vs. Guyana comparison table. The Nigeria module launches Q3 2026.

## What's Next

- **Product screenshots and demo video** on the homepage
- **Blog content expansion** with weekly compliance tips
- **Supplier directory enhancements** with advanced filtering
- **Mobile app** for on-the-go compliance tracking`,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPost(slug);
  if (!current) return posts.slice(0, limit);
  return posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
}
