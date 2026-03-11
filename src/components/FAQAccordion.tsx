import { useState } from "react";

const faqs = [
  {
    category: "Frequently Asked Questions – CoCT",
    questions: [
      { q: "What is a CID?", a: "A City Improvement District (CID) is a clearly defined geographical area in which property owners pay additional property rates to fund supplementary municipal services to improve or upgrade that specific area. CIDs can be commercial, industrial, residential or a combination of any of these." },
      { q: "How is a CID established?", a: "A CID is established through a formal process prescribed by the City of Cape Town's By-law on City Improvement Districts. The process requires a feasibility study, a business plan, a public participation process, and approval by a majority of property owners in the proposed CID area. The City Council must also approve the establishment of the CID." },
      { q: "Who pays for the CID?", a: "Property owners within the CID boundary pay an additional levy on their municipal rates account. The levy is calculated as a percentage of the property's municipal valuation. The City of Cape Town collects the levy on behalf of the CID and pays it over to the CID NPC." },
      { q: "How is the CID governed?", a: "The CID is governed by a Board of Directors elected by its voting members. The Board is responsible for setting the strategic direction of the CID, approving the annual budget, and overseeing the management of the CID. The Board must include representatives of both residential and commercial property owners." },
      { q: "What services does the CID provide?", a: "CIDs provide supplementary municipal services that are over and above what the City of Cape Town provides. These services typically include public safety, cleaning and urban management, and social development. The specific services provided by a CID are set out in its business plan." },
      { q: "Can the CID replace municipal services?", a: "No. CIDs provide supplementary services that are over and above what the City provides. The City is legally obligated to maintain its existing level of service delivery in a CID area." },
    ],
  },
  {
    category: "Frequently Asked Questions – Camps Bay",
    questions: [
      { q: "Reporting incidents to the CID and receiving alerts and feedback from the CID", a: "Save 087 223 2864 on your phone and use it to call or WhatsApp message the CID control room for ALL incident reporting. This is the ONLY way to report incidents to the CID.\n\nJoin the Camps Bay CID Community group on WhatsApp: https://chat.whatsapp.com/GLFNV9ckews6pkJ4V8nlQ8\n\nFor regular updates, follow us on Facebook (https://www.facebook.com/campsbaycid) and Instagram (https://www.instagram.com/campsbaycid).\n\nThere is only one number for phone calls and WhatsApp messages for all incident reporting to the CID: 087 223 2864. This allows for two-way communication with the CID control room." },
      { q: "What is the CID's social development programme?", a: "The CID's social development programme focuses on addressing the root causes of vagrancy and crime in Camps Bay. We work with social development organisations to provide pathways off the streets, working with Law Enforcement to manage anti-social behaviour, and working with SAPS to address criminal activity. The CID's social development programme, in partnership with Ignisive, has already placed 35 people in permanent employment." },
      { q: "How will the CID improve safety and security in Camps Bay?", a: "The CID provides a dedicated, professional public safety service that operates 24/7. Our officers work in close partnership with SAPS, Metro Police, and Law Enforcement. We focus on visible deterrence, rapid incident response, and intelligence gathering. Our CCTV monitoring system provides an additional layer of security. The results speak for themselves – residential burglary has dropped by 50% since the CID became operational." },
      { q: "Once established, will the CID continue in perpetuity? How are future budgets handled? And how can the CID be terminated in future if that is what residents want?", a: "CIDs are approved for 5-year terms and must be renewed at the end of each term. If a majority of property owners do not support the renewal, the CID will not be renewed. Future budgets are set annually by the Board and approved by members at the AGM." },
      { q: "We pay high rates in Camps Bay and see little benefit in terms of municipal services provided. Why should we have to pay more to get the services we should be getting already?", a: "This is a legitimate concern. The CID model is not ideal – in an ideal world, the City would provide adequate services and property owners would not need to fund supplementary services. However, the reality is that the City's resources are stretched and the CID model provides a practical solution to address the specific needs of Camps Bay." },
      { q: "What policing powers will the CID assume?", a: "CID public safety officers do not have policing powers. They are security officers who work in partnership with SAPS, Metro Police, and Law Enforcement. In addition, the CID contracts dedicated Law Enforcement Officer who have full powers to stop and search, arrest and fine. CID officers can make citizens' arrests if they witness a Schedule 1 crime being committed (ie, a serious crime). The CID works closely with SAPS to ensure cases are opened, investigated, and where applicable, brought to court. The CID may attend court proceedings to oppose suspects' bail." },
      { q: "How will illegal drinking and drugs on the beach and beachfront be tackled?", a: "The CID's dedicated Law Enforcement Officers and public safety officers actively manage anti-social behaviour on the beachfront, including alcohol and drug misuse. Hundreds of units of alcohol have already been confiscated and multiple arrests made." },
      { q: "Will the CID replace the Camps Bay and Clifton Ratepayers Association (CBCRA) in fighting illegal developments?", a: "No. The CBCRA and the CID have different mandates. The CBCRA focuses on planning and development issues, while the CID focuses on supplementary municipal services. The two organisations work together and complement each other." },
      { q: "Why does Camps Bay need a CID?", a: "Camps Bay has experienced a noticeable decline in safety and security, and a steady increase in vagrants and criminal elements around the beachfront. The CID was established to address these issues and to improve the overall quality of life in Camps Bay." },
      { q: "What happens to the CID budget after the first 5 years?", a: "At the end of the 5-year term, the CID must apply for renewal. If renewed, a new budget will be set for the next 5-year term based on the needs of the area and the services to be provided." },
      { q: "What are the CID's plans for camera monitoring and how exactly does camera monitoring work?", a: "The CID operates a network of CCTV cameras that monitor key areas of Camps Bay. The cameras are monitored 24/7 by a professional monitoring company. When a camera detects suspicious activity, an alert is sent to the CID control room and a response vehicle is dispatched. The cameras also record footage that can be used as evidence in criminal investigations." },
      { q: "How long will camera recordings be kept and who is allowed to access them?", a: "Camera recordings are kept for a maximum of 21 days in accordance with City of Cape Town regulations. Where evidence is needed in a criminal case, recordings may be kept for longer. Access to recordings is strictly controlled and is only provided to SAPS and Metro Police for official investigations." },
      { q: "My municipal valuation has gone up. Will my CID levy therefore also go up?", a: "Not necessarily. The CID is a non profit company and spends all its revenue. The CID budget = revenue = total of all properties CID levies. Until 2029, the CID budget annual increase is approximately 1-2% pa, less than inflation, as per the approved 5 year business plan. This means that across the suburb, the AVERAGE increase in CID levy is 1-2% pa.\n\nAn individual property's CID levy may increase by more or less than this, or even decrease, depending on how that property has been revalued relative to the average revaluation in the suburb. But the average increase will be only 1-2%.\n\nFor details of the CID's 5 year budget, refer to the Business Plan in the Documents section." },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[oklch(0.90_0.01_245)] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="font-['Syne'] font-semibold text-[oklch(0.20_0.07_245)] text-sm md:text-base leading-snug">{q}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6CCFF6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-[oklch(0.45_0.04_245)] text-sm font-['Nunito_Sans'] leading-relaxed whitespace-pre-line">{a}</p>
        </div>
      )}
    </div>
  );
}

const CATEGORIES = ["All", ...faqs.map((f) => f.category)];

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs
    .filter((cat) => activeCategory === "All" || cat.category === activeCategory)
    .map((cat) => ({
      ...cat,
      questions: searchTerm.trim()
        ? cat.questions.filter(
            (item) =>
              item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.a.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : cat.questions,
    }))
    .filter((cat) => cat.questions.length > 0);

  return (
    <div>
      {/* Search */}
      <div className="mb-8">
        <div className="relative max-w-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-[oklch(0.65_0.04_245)]"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input
            type="text"
            placeholder="Search all FAQ questions…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-[oklch(0.88_0.01_245)] rounded-lg pl-10 pr-4 py-3 text-sm font-['Nunito_Sans'] focus:outline-none focus:border-[#6CCFF6] transition-colors"
          />
        </div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((label) => (
          <button
            key={label}
            onClick={() => setActiveCategory(label)}
            className={`px-4 py-2 rounded-full text-sm font-['Syne'] font-semibold transition-colors ${
              activeCategory === label
                ? "bg-[oklch(0.28_0.07_245)] text-white"
                : "bg-[oklch(0.93_0.01_245)] text-[oklch(0.40_0.04_245)] hover:bg-[oklch(0.88_0.01_245)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* FAQ items */}
      {filteredFaqs.length === 0 ? (
        <p className="text-[oklch(0.55_0.04_245)] font-['Nunito_Sans'] py-10">No questions match your search.</p>
      ) : (
        filteredFaqs.map((cat) => (
          <div key={cat.category} className="mb-12">
            <h2 className="font-['Syne'] font-bold text-xl text-[oklch(0.20_0.07_245)] mb-6 pb-3 border-b-2 border-[#6CCFF6]">
              {cat.category}
            </h2>
            <div className="bg-white rounded-2xl shadow-sm px-6">
              {cat.questions.map((item) => (
                <AccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
