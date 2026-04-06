const contractorDomains: Record<string, string> = {
  "Baker Hughes Guyana": "bakerhughes.com",
  "CNOOC Petroleum Guyana Limited": "cnooc.com.cn",
  "Cataleya Energy Limited": "cataleyaenergy.com",
  "DOF Management AS / DOF Subsea USA Inc. Guyana Branch": "dof.com",
  "ExxonMobil Guyana Limited": "exxonmobil.com",
  "G-Boats Inc.": "g-boatsinc.com",
  "Guyana Shore Base Inc. (GYSBI)": "gaboreshorebase.com",
  "Halliburton Guyana Inc.": "halliburton.com",
  "Hess Guyana Exploration Ltd": "hess.com",
  "International SOS Incorporated": "internationalsos.com",
  "Leader Engineering Guyana Incorporated": "leaderengineering.com",
  "MODEC Guyana Inc.": "modec.com",
  "New Fortress Energy Guyana": "newfortressenergy.com",
  "Oceaneering International, Inc.": "oceaneering.com",
  "SLB Guyana (Schlumberger)": "slb.com",
  "Saipem Guyana Inc.": "saipem.com",
  "Seacor Marine LLC": "seacormarine.com",
  "Stena Drilling Ltd": "stenadrilling.com",
  "TechnipFMC Guyana": "technipfmc.com",
  "Tenaris Guyana": "tenaris.com",
  "TotalEnergies Guyana": "totalenergies.com",
  "Weatherford Guyana": "weatherford.com",
  "Guyana Deepwater Operations Inc.": "sbmoffshore.com",
  "IAL ENGINEERING SERVICES GUYANA INC.": "ialengineering.com",
  "Sustainable Environmental Solutions": "sustainableenvsolutions.com",
};

export function getContractorLogo(name: string): string | null {
  const domain = contractorDomains[name];
  if (!domain) return null;
  return `https://logo.clearbit.com/${domain}`;
}

export function getContractorDomain(name: string): string | null {
  return contractorDomains[name] || null;
}
