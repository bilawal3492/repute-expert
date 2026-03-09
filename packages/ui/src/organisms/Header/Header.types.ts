import { NavItem, SocialLink } from "../../types";

export interface HeaderProps {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  ctaLabel?: string;
  ctaLink?: string;
  navItems?: NavItem[];
  socialLinks?: SocialLink[];
  transparent?: boolean;
}
