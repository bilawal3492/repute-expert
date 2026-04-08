export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  paragraphs: string[];
  imageBg: string;
}

export const ALL_POSTS: BlogPost[] = [
  {
    slug: "online-reputation-most-valuable-business-asset",
    category: "Reputation Strategy",
    title: "Why Your Online Reputation Is Your Most Valuable Business Asset",
    date: "March 2026",
    readTime: "5 min read",
    excerpt:
      "In today's digital-first world, your online reputation often forms the first impression for potential clients, partners, and employers. We explore why proactive reputation management has become essential.",
    imageBg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    paragraphs: [
      "In 2026, your online reputation is not just a reflection of your brand. Before a potential client picks up the phone, they search your name. What they find shapes every interaction that follows.",
      "A recent study found that 87% of consumers read online reviews for local businesses. For executives, a single negative article on the first page of Google can reduce trust by as much as 22%.",
      "The challenge is that reputation is no longer something you can control through traditional PR alone. Search engines, review platforms, social media, and AI-powered answer engines all contribute to how you are perceived online.",
      "Proactive reputation management means monitoring what appears when people search for you, building authoritative content, and addressing negative information through legitimate channels.",
      "At Reputation Experts, we work with clients across industries to build, protect, and restore their digital presence. Be proactive, be strategic, and take control of your narrative.",
    ],
  },
  {
    slug: "how-search-results-shape-perception",
    category: "Search Management",
    title: "Understanding How Search Results Shape Perception",
    date: "March 2026",
    readTime: "4 min read",
    excerpt:
      "What appears on the first page of Google when someone searches your name or brand has an outsized impact on trust and decision-making.",
    imageBg: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    paragraphs: [
      "When someone searches your name on Google, the results on the first page function as your digital business card. Over 75% of users never scroll past the first page.",
      "If negative content appears in those top positions, it is effectively the first thing most people learn about you. Search results create an anchoring effect that influences all subsequent judgements.",
      "The good news is that search results are not static. They can be influenced through content creation, SEO, and strategic digital PR.",
      "This is not about hiding the truth. It is about ensuring that your search results accurately reflect who you are and the value you provide.",
    ],
  },
  {
    slug: "respond-when-reputation-under-attack",
    category: "Crisis Management",
    title: "How to Respond When Your Reputation Is Under Attack",
    date: "February 2026",
    readTime: "7 min read",
    excerpt:
      "A practical guide to the first 48 hours of a reputation crisis.",
    imageBg: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
    paragraphs: [
      "A reputation crisis can strike without warning. Your response in the first 48 hours will determine whether the situation is contained or escalates.",
      "The first rule: do not panic. Start by documenting everything. Screenshot the negative content, note URLs, record dates and times.",
      "Assess the scope. Is this a single post or is it gaining traction? The most effective response is usually a calm, factual statement.",
      "For severe crises, working with experienced reputation management professionals can make the difference between a temporary setback and permanent damage.",
      "With the right strategy, most reputations can be fully restored and often emerge stronger than before.",
    ],
  },
  {
    slug: "building-authority-strategic-content-placement",
    category: "Digital PR",
    title: "Building Authority Through Strategic Content Placement",
    date: "February 2026",
    readTime: "5 min read",
    excerpt:
      "How thought leadership articles and high-authority content can transform your digital presence.",
    imageBg: "linear-gradient(135deg, #0d1b2a 0%, #1b2838 50%, #2a475e 100%)",
    paragraphs: [
      "Content is the foundation of online reputation. Strategically placed content on authoritative websites actively shapes what people find when they search for you.",
      "Search engines prioritise content from authoritative and trustworthy websites. By securing placements on high-authority platforms, you can influence which content appears on your first page.",
      "The most effective strategy combines thought leadership articles, press features, executive profiles, and strategic social media use.",
      "The results are cumulative. Over time, you build an increasingly strong digital presence that is difficult for negative content to displace.",
    ],
  },
  {
    slug: "complete-guide-managing-review-presence",
    category: "Review Management",
    title: "The Complete Guide to Managing Your Review Presence",
    date: "January 2026",
    readTime: "8 min read",
    excerpt:
      "How to build authentic positive reviews, respond to feedback strategically, and address problematic content.",
    imageBg: "linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 100%)",
    paragraphs: [
      "93% of consumers say online reviews influence their purchasing decisions. Businesses with a rating below 4 stars risk losing up to 70% of potential customers.",
      "Building positive reviews starts with delivering excellent service, but implementing a systematic review generation process can dramatically increase volume.",
      "Responding to negative reviews with empathy and professionalism demonstrates accountability and can actually improve your reputation.",
      "The goal is not a perfect score but a review profile that builds trust with prospective customers.",
    ],
  },
  {
    slug: "executive-reputation-protecting-personal-digital-footprint",
    category: "Personal Branding",
    title: "Executive Reputation: Protecting Your Personal Digital Footprint",
    date: "January 2026",
    readTime: "6 min read",
    excerpt:
      "For C-suite leaders, personal reputation management is no longer optional.",
    imageBg: "linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)",
    paragraphs: [
      "Your personal reputation is inseparable from your company's reputation. A strong digital footprint opens doors and builds trust.",
      "Start with a thorough audit of your current digital presence. Search your name in Google, review your social profiles, and check for mentions on news sites.",
      "Build a multi-channel presence: LinkedIn, a professional website, and profiles on industry platforms. Invest in thought leadership content.",
      "Implement ongoing monitoring. Your digital footprint is not static and requires continuous attention.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string): BlogPost[] {
  return ALL_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
}
