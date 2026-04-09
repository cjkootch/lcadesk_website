"use client";

import { motion } from "framer-motion";
import FAQAccordion from "@/components/FAQAccordion";

const vp = { once: true as const, margin: "-60px" as const };

const faqItems = [
  { q: "Who is required to file LCA half-yearly reports?", a: "Every contractor, sub-contractor, and licensee operating under a petroleum agreement in Guyana must file half-yearly reports with the Local Content Secretariat. This applies to all companies on the Local Content Register, regardless of size or nationality." },
  { q: "What are the penalties for non-compliance?", a: "Penalties range from GY$1 million to GY$50 million per offence. False or misleading submissions are a criminal offence. The Secretariat is actively auditing and following up on late or missing submissions." },
  { q: "What\u2019s the difference between Essentials and Professional?", a: "Essentials ($199/month) covers 1 entity, 3 users, all 5 submission types, and includes a Compliance Health Score. Professional ($399/month) adds AI Narrative Drafting, Compliance Gap Detection, up to 5 entities, workforce + procurement dashboards, and a payment log." },
  { q: "Does the 30-day trial include AI features?", a: "Yes. Your 30-day trial gives you full Professional access \u2014 including AI Narrative Drafting and Compliance Gap Detection. A credit card is collected at signup but you won\u2019t be charged until the trial ends." },
  { q: "What happens to my data after the trial ends?", a: "Your data is saved securely. If you don\u2019t upgrade to a paid plan, access to the platform is paused \u2014 you won\u2019t be able to create, edit, or export reports. Upgrade anytime to pick up right where you left off." },
  { q: "Will LCA Desk cover Nigeria and other markets?", a: "Yes. Nigeria (NCDMB), Trinidad & Tobago, Ghana, Mozambique, and Namibia are in active development. Join the waitlist on the Markets page to be notified at launch." },
  { q: "Can you handle the Comparative Analysis narrative sections?", a: "Yes \u2014 this is LCA Desk\u2019s signature AI feature. The AI reads your expenditure, employment, and capacity development data and drafts the full narrative in the formal tone the Secretariat expects. You review and approve before export." },
  { q: "Does LCA Desk offer training on the Local Content Act?", a: "Yes. LCA Desk includes two built-in courses: LCA Fundamentals (5 modules covering the Act, deadlines, penalties, and LC rate calculation) and Mastering LCA Desk (8 modules on every platform feature). Completion badges appear in your audit trail, demonstrating due diligence to the Secretariat." },
  { q: "Can I show the Secretariat that my team completed compliance training?", a: "Yes. Badges from completed courses appear in your audit trail alongside filing activity. When the Secretariat reviews your submission, they can see that the individuals who prepared and attested the report completed structured LCA training." },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          className="font-display text-3xl md:text-4xl text-text-primary text-center mb-12">
          Frequently Asked Questions
        </motion.h2>
        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
