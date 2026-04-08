"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const SECTIONS = [
  {
    id: "about-this-policy",
    number: "1",
    title: "About This Privacy Policy",
    content: [
      "Reputation Experts Ltd (\u201CReputation Experts\u201D, \u201Cwe\u201D, \u201Cus\u201D, or \u201Cour\u201D) is committed to protecting the privacy and security of the personal information entrusted to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at reputation-experts.co.uk (the \u201CSite\u201D) or engage our professional services.",
      "By accessing the Site or using our services, you acknowledge that you have read, understood, and agree to the practices described in this policy. If you do not agree with the terms of this policy, please do not access the Site or use our services.",
    ],
  },
  {
    id: "data-controller",
    number: "2",
    title: "Data Controller",
    content: [
      "The data controller responsible for your personal data is Reputation Experts Ltd, Company No. 16939732 (England & Wales), 167-169 Great Portland Street, 5th Floor, London, W1W 5PF. For data protection enquiries, please contact us at privacy@reputation-experts.co.uk.",
    ],
  },
  {
    id: "information-we-collect",
    number: "3",
    title: "Information We Collect",
    content: [
      "We may collect and process the following categories of personal data:",
      "Information you provide directly: When you fill out our contact or assessment form, register for a consultation, or correspond with us by email or telephone, we may collect your full name, email address, telephone number, company or organisation name, job title, and any additional details you choose to share about your enquiry.",
      "Case and service information: If you become a client, we may collect information necessary to deliver our reputation management services, including URLs and links to online content, names of platforms or publications, descriptions of the content at issue, supporting documentation, and correspondence related to your case.",
      "Payment information: When you purchase our services, we collect billing details such as your name, billing address, and payment card information. Payment processing is handled by our PCI-DSS-compliant payment processor, Stripe, and we do not store full card numbers on our systems.",
      "Information collected automatically: When you visit our Site, we automatically collect certain technical data including your IP address, browser type and version, operating system, referring URL, pages viewed, time and date of your visit, time spent on each page, and other diagnostic data. This information is collected through cookies and similar tracking technologies (see Section 10).",
    ],
  },
  {
    id: "how-we-use-your-information",
    number: "4",
    title: "How We Use Your Information",
    content: [
      "We use your personal data to respond to your enquiries, schedule consultations, and provide our professional services; to manage and administer your client account and case files; to process payments and send invoices; to communicate with you about the progress of your case and service updates; to improve, personalise, and optimise the performance and content of our Site; to analyse usage trends and measure the effectiveness of our marketing; to detect, prevent, and address fraud, security issues, or technical problems; to comply with applicable laws, regulations, and legal processes; and to enforce our terms of service and protect our legal rights.",
    ],
  },
  {
    id: "legal-basis-for-processing",
    number: "5",
    title: "Legal Basis for Processing",
    content: [
      "Under the UK General Data Protection Regulation (UK GDPR), we rely on the following lawful bases to process your personal data:",
      "Consent: Where you have given clear consent for us to process your personal data for a specific purpose, such as submitting a contact form or subscribing to communications.",
      "Contractual necessity: Where processing is necessary for the performance of a contract with you, or to take pre-contractual steps at your request.",
      "Legitimate interests: Where processing is necessary for our legitimate business interests, such as improving our services, ensuring network security, and preventing fraud, provided these interests are not overridden by your rights and freedoms.",
      "Legal obligation: Where processing is necessary to comply with a legal or regulatory obligation to which we are subject.",
    ],
  },
  {
    id: "how-we-share-your-information",
    number: "6",
    title: "How We Share Your Information",
    content: [
      "We do not sell, rent, or trade your personal data. We may share your information only in the following limited circumstances:",
      "Service providers: We share data with trusted third-party vendors who assist in operating our business, such as cloud hosting providers, payment processors (Stripe), email delivery services, and analytics platforms. These providers are contractually bound to process your data only on our instructions and in compliance with applicable data protection laws.",
      "Professional advisors: We may disclose information to our lawyers, accountants, insurers, and auditors where reasonably necessary for the purposes of managing risk, obtaining professional advice, or establishing, exercising, or defending legal claims.",
      "Legal requirements: We may disclose your data where required by law, regulation, court order, or governmental request, or where we reasonably believe disclosure is necessary to protect the rights, property, or safety of Reputation Experts, our clients, or others.",
      "Business transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal data may be transferred to the acquiring entity, subject to the same privacy protections described in this policy.",
    ],
  },
  {
    id: "international-data-transfers",
    number: "7",
    title: "International Data Transfers",
    content: [
      "Your personal data is primarily stored and processed within the United Kingdom and the European Economic Area (EEA). Where we transfer data outside of the UK or EEA, we ensure that appropriate safeguards are in place, such as Standard Contractual Clauses approved by the UK Information Commissioner, or transfers to countries that have been deemed to provide an adequate level of data protection.",
    ],
  },
  {
    id: "data-retention",
    number: "8",
    title: "Data Retention",
    content: [
      "We retain your personal data only for as long as is necessary to fulfil the purposes for which it was collected, or as required or permitted by law. Our standard retention periods are as follows:",
      "Enquiry and contact form data: Up to 24 months from the date of submission, unless you become a client.",
      "Client case data: Up to 6 years following the conclusion of services, in accordance with UK limitation periods and regulatory obligations.",
      "Financial and billing records: Up to 7 years, as required by HMRC and applicable tax legislation.",
      "Website analytics data: Up to 26 months, in accordance with our analytics provider\u2019s retention settings.",
      "When personal data is no longer required, we securely delete or anonymise it in accordance with our data retention procedures.",
    ],
  },
  {
    id: "information-security",
    number: "9",
    title: "Information Security",
    content: [
      "We take the security of your personal data seriously and implement appropriate technical and organisational measures to protect it against unauthorised access, alteration, disclosure, or destruction. These measures include encryption of data in transit using TLS/SSL protocols, secure access-controlled hosting environments, regular security assessments and vulnerability monitoring, strict access controls limiting data access to authorised personnel only, and confidentiality agreements with all staff and contractors who handle personal data.",
      "While we strive to protect your information, no method of electronic storage or transmission is completely secure. If you have reason to believe that your interaction with us is no longer secure, please contact us immediately at privacy@reputation-experts.co.uk.",
    ],
  },
  {
    id: "cookies-tracking",
    number: "10",
    title: "Cookies & Tracking Technologies",
    content: [
      "Our Site uses cookies and similar technologies to enhance your browsing experience and to collect information about how you use our Site.",
      "Strictly necessary cookies: Required for the Site to function properly. These cannot be disabled.",
      "Analytics cookies: Help us understand how visitors interact with the Site by collecting and reporting information anonymously.",
      "Functional cookies: Enable enhanced functionality and personalisation, such as remembering your preferences.",
      "You can manage your cookie preferences through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of our Site.",
    ],
  },
  {
    id: "your-privacy-rights",
    number: "11",
    title: "Your Privacy Rights",
    content: [
      "Under the UK GDPR, you have the following rights in relation to your personal data: the right of access to request a copy of the personal data we hold about you; the right to rectification to correct any inaccurate or incomplete data; the right to erasure to request deletion of your personal data, subject to certain legal exceptions; the right to restrict processing in certain circumstances; the right to data portability to request transfer of your data in a structured, commonly used, machine-readable format; the right to object to processing where we rely on legitimate interests; and the right to withdraw consent at any time without affecting the lawfulness of processing carried out before withdrawal.",
      "To exercise any of these rights, please email us at privacy@reputation-experts.co.uk. We will respond to your request within one month. We may ask you to verify your identity before processing your request.",
      "If you are not satisfied with how we handle your request, you have the right to lodge a complaint with the Information Commissioner\u2019s Office (ICO) at ico.org.uk.",
    ],
  },
  {
    id: "childrens-privacy",
    number: "12",
    title: "Children\u2019s Privacy",
    content: [
      "Our services are not directed at individuals under the age of 18, and we do not knowingly collect personal data from children. If we become aware that we have inadvertently collected data from a child, we will take steps to delete it promptly.",
    ],
  },
  {
    id: "third-party-links",
    number: "13",
    title: "Third-Party Links",
    content: [
      "Our Site may contain links to third-party websites and services that are not operated by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We recommend that you review the privacy policy of every site you visit.",
    ],
  },
  {
    id: "changes-to-this-policy",
    number: "14",
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will update the \u201CLast updated\u201D date at the top of this page. We encourage you to review this policy periodically. Your continued use of the Site or our services after any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    id: "contact-us",
    number: "15",
    title: "Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
    ],
    contact: {
      company: "Reputation Experts Ltd",
      address: "167-169 Great Portland Street, 5th Floor, London, W1W 5PF, United Kingdom.",
      privacyEmail: "privacy@reputation-experts.co.uk",
      generalEmail: "info@reputation-experts.co.uk",
    },
  },
];

export function PrivacyPolicyContent() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
            Privacy Policy
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
                          Privacy enquiries:{" "}
                          <a
                            href={`mailto:${section.contact.privacyEmail}`}
                            className="text-[#FF461E] hover:underline"
                          >
                            {section.contact.privacyEmail}
                          </a>
                        </p>
                        <p>
                          General enquiries:{" "}
                          <a
                            href={`mailto:${section.contact.generalEmail}`}
                            className="text-[#FF461E] hover:underline"
                          >
                            {section.contact.generalEmail}
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
                <Link href="/terms-of-service" className="text-[#888] text-[12px] hover:text-[#1a1a1a] transition-colors">
                  Terms of Service
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
