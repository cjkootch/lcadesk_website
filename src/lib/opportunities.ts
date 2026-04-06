import type { PublicOpportunity } from "@/lib/types";

interface ApiNotice {
  title: string;
  contractorName: string;
  noticeType: string | null;
  lcaCategory: string | null;
  deadline: string | null;
  description: string | null;
  sourceUrl: string | null;
}

export function decodeEntities(str: string | null): string {
  if (!str) return "";
  return str
    .replace(/&#8211;/g, "\u2013")
    .replace(/&#8212;/g, "\u2014")
    .replace(/&#038;/g, "&")
    .replace(/&#amp;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&#8216;/g, "\u2018")
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}

export function cleanTitle(raw: string): string {
  let t = decodeEntities(raw);
  t = t.replace(/\s*[–\-]\s*Local Content Register\s*$/i, "");
  return t.trim();
}

export function extractContractorFromDescription(desc: string | null): string | null {
  if (!desc) return null;

  const startMatch = desc.match(
    /^([A-Z][A-Za-z\s&.,'\-()]+?)\s+(?:is\s+(?:requesting|seeking|inviting|looking|soliciting)|invites|wishes|requires|would like|hereby|has issued|is\s+pleased)/
  );
  if (startMatch) {
    const name = startMatch[1].trim().replace(/[,.]$/, "");
    if (name.length >= 3 && name.length <= 80) return name;
  }

  const toMatch = desc.match(
    /\bto\s+([A-Z][A-Za-z\s&'\-]+?(?:Inc|LLC|Ltd|Corp|Co|Guyana|International|Services|Group)\.?)\b/
  );
  if (toMatch) {
    const name = toMatch[1].trim().replace(/[,.]$/, "");
    if (name.length >= 3 && name.length <= 80) return name;
  }

  const byMatch = desc.match(
    /\b(?:by|from)\s+([A-Z][A-Za-z\s&'\-]+?(?:Inc|LLC|Ltd|Corp|Co|Guyana|International|Services|Group)\.?)\b/
  );
  if (byMatch) {
    const name = byMatch[1].trim().replace(/[,.]$/, "");
    if (name.length >= 3 && name.length <= 80) return name;
  }

  const behalfMatch = desc.match(
    /on behalf of\s+([A-Z][A-Za-z\s&'\-()]+?)(?:\s*[.,]|\s+(?:for|to|in|at|is|and|the)\b)/
  );
  if (behalfMatch) {
    const name = behalfMatch[1].trim().replace(/[,.]$/, "");
    if (name.length >= 3 && name.length <= 80) return name;
  }

  return null;
}

export function toSlug(title: string, index: number): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
  return slug || `notice-${index}`;
}

export async function fetchOpportunities(): Promise<PublicOpportunity[]> {
  try {
    const res = await fetch("https://app.lcadesk.com/api/public/opportunities", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const notices: ApiNotice[] = data.notices ?? [];
    return notices.map((n, i) => {
      const decodedDesc = decodeEntities(n.description);
      const rawContractor = decodeEntities(n.contractorName);
      const contractor =
        rawContractor && rawContractor !== "Unknown"
          ? rawContractor
          : extractContractorFromDescription(decodedDesc) || "Contractor Not Specified";
      return {
        id: toSlug(cleanTitle(n.title), i),
        title: cleanTitle(n.title),
        contractor_name: contractor,
        type: "supplier" as const,
        notice_type: n.noticeType,
        lca_category: decodeEntities(n.lcaCategory) || null,
        deadline: n.deadline,
        description: decodedDesc,
        source_url: n.sourceUrl,
        posted_date: null,
        employment_category: null,
        status: null,
        location: null,
        contract_type: null,
      };
    });
  } catch {
    return [];
  }
}
