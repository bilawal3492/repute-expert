import { NavItem, SocialLink } from "../../types";

export interface HeaderProps {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  brandName?: string;
  ctaLabel?: string;
  ctaLink?: string;
  phoneNumber?: string;
  phoneHref?: string;
  navItems?: NavItem[];
  socialLinks?: SocialLink[];
  transparent?: boolean;
}
