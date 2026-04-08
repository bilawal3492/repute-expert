"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export const SECTIONS = [
  {
    id: "agreement-overview",
    number: "1",
    title: "Agreement Overview",
    content: [
      'These Terms of Service (\u201CTerms\u201D) constitute a legally binding agreement between you (\u201Cyou\u201D, \u201Cyour\u201D, or \u201CClient\u201D) and Reputation Experts Ltd (\u201CReputation Experts\u201D, \u201Cwe\u201D, \u201Cus\u201D, or \u201Cour\u201D), a company registered in England & Wales (Company No. 16939732) with its registered office at 167-169 Great Portland Street, 5th Floor, London, W1W 5PF.',
      'By accessing or using our website at reputation-experts.co.uk (the \u201CSite\u201D), submitting an enquiry, or engaging our professional services, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree to these Terms, you must not access the Site or use our services. We recommend that you print or save a copy of these Terms for your records.',
    ],
  },
  {
    id: "description-of-services",
    number: "2",
    title: "Description of Services",
    content: [
      "Reputation Experts provides professional online reputation management services. These services may include, but are not limited to: assessment and audit of your current online presence; identification and analysis of harmful, defamatory, or policy-violating content across search engines, review platforms, and social media; strategic content dispute and removal requests submitted through legitimate platform reporting mechanisms; ongoing monitoring of your digital footprint; and consultation on proactive reputation-building strategies.",
      "All services are performed in accordance with the published policies and terms of service of the relevant third-party platforms. We do not engage in any activities that violate platform rules, applicable laws, or professional ethical standards. We do not guarantee the removal of any specific content, as final decisions rest solely with the relevant third-party platform or service provider.",
    ],
  },
  {
    id: "eligibility",
    number: "3",
    title: "Eligibility and Account Responsibilities",
    content: [
      "You represent and warrant that you are at least 18 years of age and have the legal capacity to enter into a binding agreement. If you are acting on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms.",
      "You are responsible for maintaining the confidentiality of any account credentials or login details associated with our services, and for all activity that occurs under your account. You agree to notify us immediately at info@reputation-experts.co.uk of any unauthorised access or security breach.",
    ],
  },
  {
    id: "free-case-assessment",
    number: "4",
    title: "Free Case Assessment",
    content: [
      "We offer a complimentary initial case assessment at no cost and with no obligation. During this assessment, we provide our professional opinion on the content in question, an evaluation of the feasibility of resolution, and an outline of potential strategies and next steps. No contractual obligation, payment commitment, or client-provider relationship arises from the free assessment alone. Any engagement of paid services will be subject to a separate written service agreement.",
    ],
  },
  {
    id: "fees-payment-billing",
    number: "5",
    title: "Fees, Payment, and Billing",
    content: [
      "All service fees, payment schedules, and terms of engagement will be agreed upon in writing prior to the commencement of any paid work. Fees will be detailed in a formal service agreement, proposal, or statement of work provided to you for acceptance.",
      "All fees are quoted in British Pounds Sterling (GBP) unless otherwise stated. Value Added Tax (VAT) will be applied at the prevailing rate where applicable. Payment is due in accordance with the schedule specified in your service agreement. We reserve the right to suspend or cease work in the event of non-payment or overdue invoices exceeding 14 days past the due date.",
      "Payment processing is handled securely by our PCI-DSS-compliant payment processor. We do not store full credit card details on our systems.",
    ],
  },
  {
    id: "refund-cancellation",
    number: "6",
    title: "Refund and Cancellation Policy",
    content: [
      "If we are unable to deliver the services substantially as described in your service agreement, you may be entitled to a partial or full refund at our discretion. Refund requests must be submitted in writing to info@reputation-experts.co.uk and will be considered on a case-by-case basis within 30 days of receipt.",
      "Refunds for work already performed and delivered (including completed assessments, reports, or dispute submissions) are generally not available, as the professional value has been provided. You may cancel your engagement at any time by providing written notice; however, fees for services already rendered remain payable.",
    ],
  },
  {
    id: "client-obligations",
    number: "7",
    title: "Client Obligations and Representations",
    content: [
      "By engaging our services, you agree to the following obligations:",
      "You shall provide accurate, complete, and truthful information at all times. You confirm that any content you request us to dispute, report, or address is, to the best of your knowledge, genuinely false, misleading, defamatory, or in violation of the relevant platform's published policies. You shall cooperate in a timely manner by providing documentation, access, or information reasonably necessary for us to perform our services. You shall not use our services for any unlawful, fraudulent, or deceptive purpose.",
      "We reserve the right to decline or terminate any engagement where we have reasonable grounds to believe the content at issue is accurate, lawful, or does not violate applicable platform policies, or where continuing the engagement would conflict with our professional or legal obligations.",
    ],
  },
  {
    id: "confidentiality",
    number: "8",
    title: "Confidentiality",
    content: [
      "We treat all client information and case details as strictly confidential. We will not disclose your personal data, case files, or engagement details to any third party except as necessary to deliver our services, as required by law, or as described in our Privacy Policy.",
      "Any non-public information, strategies, or methodologies shared by Reputation Experts during the course of an engagement remain our confidential proprietary information and may not be disclosed, reproduced, or used for any purpose other than the engagement for which they were provided, without our prior written consent.",
    ],
  },
  {
    id: "intellectual-property",
    number: "9",
    title: "Intellectual Property",
    content: [
      "All content on this Site, including but not limited to text, graphics, logos, icons, images, page layouts, software, and design elements, is the property of Reputation Experts Ltd or its licensors and is protected by United Kingdom and international copyright, trademark, and intellectual property laws.",
      "You are granted a limited, non-exclusive, non-transferable, revocable licence to access and view the Site for your personal, non-commercial use. You may not reproduce, distribute, modify, create derivative works from, publicly display, or exploit any content from this Site without our prior written consent. Unauthorised use of any materials may give rise to a claim for damages and may constitute a criminal offence.",
    ],
  },
  {
    id: "disclaimer-of-warranties",
    number: "10",
    title: "Disclaimer of Warranties",
    content: [
      'The Site and all information, content, and services provided thereon are made available on an \u201Cas is\u201D and \u201Cas available\u201D basis without warranties of any kind, whether express or implied, to the fullest extent permitted by applicable law.',
      "We do not warrant that the Site will be uninterrupted, error-free, or free from viruses or other harmful components. We do not guarantee any specific outcome from our reputation management services, including the removal, suppression, or modification of any particular online content. Results depend on factors outside our control, including third-party platform decisions and policies.",
    ],
  },
  {
    id: "limitation-of-liability",
    number: "11",
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, Reputation Experts Ltd, its directors, officers, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, business opportunities, or goodwill, arising from or related to your use of the Site, your engagement of our services, or any reliance on information provided by us.",
      "Our total aggregate liability to you for any and all claims arising under or in connection with these Terms or our services shall not exceed the total fees actually paid by you to Reputation Experts during the twelve (12) months immediately preceding the event giving rise to the claim. Nothing in these Terms shall exclude or limit our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded or limited under applicable law.",
    ],
  },
  {
    id: "indemnification",
    number: "12",
    title: "Indemnification",
    content: [
      "You agree to indemnify, defend, and hold harmless Reputation Experts Ltd, its directors, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with: your breach of these Terms; your use of the Site or our services; any information or content you provide to us that is inaccurate, misleading, or unlawful; or any third-party claim arising from your engagement of our services.",
    ],
  },
  {
    id: "third-party-platforms",
    number: "13",
    title: "Third-Party Platforms and Links",
    content: [
      "Our Site may contain links to third-party websites, platforms, or services that are not owned or controlled by Reputation Experts. We have no control over, and assume no responsibility for, the content, terms, privacy policies, or practices of any third-party sites. The inclusion of any link does not imply endorsement, affiliation, or sponsorship.",
      "Our services involve interaction with third-party platforms (including review sites, search engines, and social media networks). We are not responsible for the policies, decisions, or actions of these platforms, and any changes to their terms, algorithms, or processes may affect the delivery or outcome of our services.",
    ],
  },
  {
    id: "termination",
    number: "14",
    title: "Termination",
    content: [
      "We may suspend or terminate your access to the Site or our services at any time, without prior notice, if we reasonably believe you have breached these Terms, engaged in fraudulent or unlawful activity, or if continuing the engagement is no longer commercially or legally viable.",
      "Upon termination, your right to access the Site and use our services will cease immediately. Provisions that by their nature should survive termination, including without limitation confidentiality, intellectual property, limitation of liability, indemnification, and governing law, shall remain in full force and effect.",
    ],
  },
  {
    id: "governing-law",
    number: "15",
    title: "Governing Law and Dispute Resolution",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles. Any dispute, controversy, or claim arising out of or in connection with these Terms, or the breach, termination, or invalidity thereof, shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
      "Before commencing formal legal proceedings, both parties agree to make reasonable efforts to resolve any dispute amicably through good-faith negotiation. Either party may initiate this process by providing written notice of the dispute to the other party.",
    ],
  },
  {
    id: "severability",
    number: "16",
    title: "Severability",
    content: [
      "If any provision of these Terms is found by a court of competent jurisdiction to be invalid, unlawful, or unenforceable, that provision shall be enforced to the maximum extent permissible, and the remaining provisions of these Terms shall continue in full force and effect. The invalid or unenforceable provision shall be deemed modified to the minimum extent necessary to make it valid and enforceable.",
    ],
  },
  {
    id: "entire-agreement",
    number: "17",
    title: "Entire Agreement",
    content: [
      "These Terms, together with our Privacy Policy and any separate service agreement entered into between you and Reputation Experts, constitute the entire agreement between you and us with respect to the subject matter hereof. These Terms supersede all prior or contemporaneous communications, proposals, and representations, whether oral or written, relating to such subject matter.",
    ],
  },
  {
    id: "changes-to-terms",
    number: "18",
    title: "Changes to These Terms",
    content: [
      'We reserve the right to modify or update these Terms at any time at our sole discretion. When we make material changes, we will update the \u201CLast updated\u201D date at the top of this page. It is your responsibility to review these Terms periodically. Your continued use of the Site or our services following the posting of any changes constitutes your acceptance of such changes. If you do not agree with any modification, you must discontinue use of the Site and our services.',
    ],
  },
  {
    id: "contact-us",
    number: "19",
    title: "Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding these Terms of Service, please contact us:",
    ],
    contact: {
      company: "Reputation Experts Ltd",
      address: "167-169 Great Portland Street, 5th Floor, London, W1W 5PF, United Kingdom.",
      email: "info@reputation-experts.co.uk",
    },
  },
];

export function TermsContent() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost intersecting entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-84px 0px -55% 0px",
        threshold: 0,
      }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ── Hero / Header ─────────────────────────────────────── */}
      <div className="bg-[#f7f7f7] border-b border-[#ebebeb] pt-[88px] pb-10 lg:pt-[100px] lg:pb-14">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <h1 className="text-[#1a1a1a] font-bold text-[clamp(2rem,5vw,3rem)] tracking-[-0.03em] leading-[1.15] mb-3">
            Terms of Service
          </h1>
          <p className="text-[#888] text-[13px]">Last updated: 26 March 2026</p>
        </div>
      </div>

      {/* ── Body: sidebar + content ────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── Sticky Sidebar TOC ───────────────────────────── */}
          <aside className="hidden lg:block w-[240px] shrink-0 sticky top-[84px]">
            <nav aria-label="Table of contents">
              <p className="text-[#1a1a1a] font-semibold text-[11px] tracking-[0.1em] uppercase mb-4">
                Contents
              </p>
              <ol className="space-y-[2px]">
                {SECTIONS.map((s) => {
                  const isActive = activeId === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`flex items-baseline gap-2 px-3 py-[6px] rounded-lg text-[13px] leading-snug transition-all duration-150 ${
                          isActive
                            ? "bg-[#f3f3f3] text-[#1a1a1a] font-medium"
                            : "text-[#888] hover:text-[#1a1a1a] hover:bg-[#f9f9f9]"
                        }`}
                      >
                        <span
                          className={`tabular-nums shrink-0 text-[11px] transition-colors ${
                            isActive ? "text-[#FF461E]" : "text-[#ccc]"
                          }`}
                        >
                          {s.number}.
                        </span>
                        {s.title}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </aside>

          {/* ── Main content ─────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            <div className="space-y-12">
              {SECTIONS.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-[84px]">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-[#FF461E] font-semibold text-[13px] shrink-0 tabular-nums">
                      {section.number}.
                    </span>
                    <h2 className="text-[#1a1a1a] font-semibold text-[clamp(1rem,2vw,1.15rem)] tracking-[-0.01em]">
                      {section.title}
                    </h2>
                  </div>

                  <div className="border-t border-[#ebebeb] mb-5" />

                  <div className="space-y-4">
                    {section.content.map((para, i) => (
                      <p key={i} className="text-[#555] text-[14px] leading-[1.85]">
                        {para}
                      </p>
                    ))}

                    {"contact" in section && section.contact && (
                      <address className="not-italic mt-4 bg-[#f7f7f7] border border-[#ebebeb] rounded-xl p-5 text-[14px] leading-[1.85] text-[#555] space-y-1">
                        <p className="font-semibold text-[#1a1a1a]">{section.contact.company}</p>
                        <p>{section.contact.address}</p>
                        <p>
                          Email:{" "}
                          <a
                            href={`mailto:${section.contact.email}`}
                            className="text-[#FF461E] hover:underline"
                          >
                            {section.contact.email}
                          </a>
                        </p>
                      </address>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* Bottom nav */}
            <div className="mt-16 pt-8 border-t border-[#ebebeb] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[#aaa] text-[12px]">
                © {new Date().getFullYear()} Reputation Experts Ltd. All rights reserved.
              </p>
              <div className="flex items-center gap-5">
                <Link href="/privacy-policy" className="text-[#888] text-[12px] hover:text-[#1a1a1a] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/contact" className="text-[#888] text-[12px] hover:text-[#1a1a1a] transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
