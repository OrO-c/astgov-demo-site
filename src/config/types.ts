// ============================================================
// AstGov — 站点类型定义
// 所有界面文本和参数均可在此配置
// ============================================================

export interface TopBarConfig {
  enabled: boolean;
  quickLinks?: { text: string; url: string; target?: string }[];
  rightLinks?: { text: string; url: string; target?: string }[];
  searchEnabled?: boolean;
  searchPlaceholder?: string;
}

export interface NavItem {
  text: string;
  url: string;
  target?: string;
  highlight?: boolean;
  dropdown?: { text: string; url: string; target?: string }[];
}

export interface BannerImage {
  src: string;
  alt: string;
  link?: string;
}

export interface BannerConfig {
  images: BannerImage[];
  height?: number;
  autoplayInterval?: number;
  prevText?: string;
  nextText?: string;
}

export interface CategoryConfig {
  title: string;
  slug: string;
  limit: number;
  side: 'main' | 'side';
}

export interface HeadlineCard {
  src: string;
  alt: string;
  title: string;
  date: string;
  link?: string;
}

export interface QuickLinkItem {
  text: string;
  url: string;
}

export interface FriendLinkItem {
  text: string;
  url: string;
  target?: string;
}

export interface FooterContact {
  label: string;
  value: string;
}

export interface FooterRecord {
  label: string;
  value: string;
  link?: string;
}

export interface FooterLink {
  text: string;
  url: string;
}

export interface FooterQRCode {
  src: string;
  alt: string;
}

export interface FooterConfig {
  organization: string;
  footerLogo?: string;
  contacts?: FooterContact[];
  records?: FooterRecord[];
  policeRecord?: string;
  links?: FooterLink[];
  extraLinks?: FooterLink[];
  qrCodes?: FooterQRCode[];
}

// ============================================================
// UI 文本配置 — 所有界面文字都在这改
// ============================================================
export interface UIConfig {
  /** 快速通道 */
  quickLinks?: {
    title?: string;
    expandText?: string;
    collapseText?: string;
  };
  /** 友情链接 */
  friendLinks?: {
    title?: string;
  };
  /** "更多 →" */
  moreText?: string;
  /** 字号切换按钮文字 */
  fontSizeLabels?: {
    small?: string;
    medium?: string;
    large?: string;
  };
  /** 导航下拉箭头 */
  dropdownArrow?: string;
  /** 底部版权文字（{year} 和 {org} 会被替换） */
  copyright?: string;
  /** 倒计时标签 */
  countdown?: {
    labels?: {
      days?: string;
      hours?: string;
      minutes?: string;
      seconds?: string;
    };
  };
  /** 列表日期格式（如 "MM月"、"MM/DD"） */
  dateFormat?: string;
  /** 文章页面标签 */
  article?: {
    authorLabel?: string;
    tagLabel?: string;
    backLinkText?: string;
    publishedPrefix?: string;
  };
}

// ============================================================
// 站点主配置
// ============================================================
export interface SiteConfig {
  siteName: string;
  siteSubtitle?: string;
  siteLogo?: string;
  siteIcon?: string;
  siteType: string;
  defaultFontSize?: string;
  colors: any;
  topBar: TopBarConfig;
  nav: NavItem[];
  modules: Record<string, boolean>;
  categories?: CategoryConfig[];
  banner: BannerConfig;
  headlineCards?: HeadlineCard[];
  quickLinks?: QuickLinkItem[];
  friendLinks?: FriendLinkItem[];
  footer: FooterConfig;
  meta: { keywords: string; description: string };
  /** 所有界面文字配置 */
  ui?: UIConfig;
}
