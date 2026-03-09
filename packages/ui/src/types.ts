// ─── Shared Types ────────────────────────────────────────────────────────────
// Used across all components. When Sanity is integrated, these will be
// replaced/augmented by auto-generated types from sanity-schemas package.

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export interface MuxAsset {
  playbackId: string;
  assetId?: string;
  thumbnailTime?: number;
  poster?: string;
}

export interface SocialLink {
  platform: "facebook" | "dribbble" | "linkedin" | "instagram" | "twitter" | "youtube";
  url: string;
  label?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  external?: boolean;
}
