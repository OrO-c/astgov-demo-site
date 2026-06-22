// ============================================================
// AstGov 示例网站 — 站点配置
// 这个文件控制网站的所有显示内容
// 搜索 "TODO" 替换为你的实际数据
// ============================================================

import type { SiteConfig } from './types';

// 配色预设
const ColorPresets = {
  university: {
    primary: '#1A3C6E',
    primaryLight: '#2B5A8C',
    secondary: '#B22222',
    background: '#FFFFFF',
    text: '#222222',
    link: '#0056B3',
    linkVisited: '#6A0DAD',
    border: '#D0D0D0',
    divider: '#EEEEEE',
    fontFamily: '"微软雅黑", "Microsoft YaHei", "宋体", sans-serif',
  },
};

// ══════════════════════════════════════════════════════════════
// 从这里开始修改
// ══════════════════════════════════════════════════════════════

export const siteConfig: SiteConfig = {
  // ---- 基础信息 ----
  siteName: '王俊伊大学',                       // TODO: 替换为你的网站名称
  siteSubtitle: 'Wangjunyi University',          // TODO: 替换为副标题
  siteType: 'university',
  defaultFontSize: 'medium',                     // small | medium | large

  colors: ColorPresets.university,               // 配色方案

  // ---- 顶栏 ----
  topBar: {
    enabled: true,
    quickLinks: [                                // 左侧快捷入口
      { text: '学生', url: '/students' },
      { text: '教职工', url: '/faculty' },
      { text: '校友', url: '/alumni' },
      { text: 'English', url: '/en' },
    ],
    rightLinks: [                                // 右侧链接
      { text: '校长信箱', url: 'mailto:admin@example.com' },
    ],
    searchEnabled: false,
    searchPlaceholder: '请输入关键字',
  },

  // ---- 导航菜单（支持二级下拉） ----
  nav: [
    { text: '首页', url: '/' },
    {
      text: '学校概况', url: '/about',
      dropdown: [
        { text: '学校简介', url: '/about' },
        { text: '联系我们', url: '/contact' },
      ],
    },
    { text: '新闻中心', url: '/news' },
    { text: '招生信息', url: '/admission' },
  ],

  // ---- 模块开关 ----
  modules: {
    banner: true,          // 轮播
    headline: true,        // 头条卡片
    countdown: false,      // 倒计时
    quickLinks: true,      // 快速通道
    friendLinks: true,     // 友情链接
  },

  // ---- 分类区块（首页按此布局展示文章） ----
  // 每个分类对应 src/content/pages/ 下的子目录
  categories: [
    { title: '校园资讯', slug: 'news', limit: 8, side: 'main' },
    { title: '通知公告', slug: 'announce', limit: 5, side: 'side' },
    { title: '学术动态', slug: 'academics', limit: 5, side: 'side' },
  ],

  // ---- 快速通道 ----
  quickLinks: [
    { text: '招生信息', url: '/admission' },
    { text: '信息门户', url: 'https://portal.example.com' },
    { text: '图书馆', url: '/library' },
  ],

  // ---- 友情链接 ----
  friendLinks: [
    { text: '中华人民共和国教育部', url: 'http://www.moe.gov.cn' },
  ],

  // ---- 底部 ----
  footer: {
    organization: '王俊伊大学',                   // TODO: 替换
    contacts: [
      { label: '地址', value: '吉林省长春市 XX 路 123 号' },
      { label: '电话', value: '0431-88888888' },
    ],
    records: [
      { label: 'ICP备案', value: '吉ICP备 xxxxxx 号', link: 'https://beian.miit.gov.cn' },
    ],
    policeRecord: '吉公网安备 xxxxxxxxx 号',
    links: [
      { text: '关于我们', url: '/about' },
      { text: '网站地图', url: '/sitemap' },
    ],
  },

  // ---- 界面文字配置（所有硬编码文本都在这改） ----
  ui: {
    moreText: '更多 →',
    dropdownArrow: '▼',
    copyright: '版权所有 © {year} {org}',
    quickLinks: {
      title: '快速通道',
      expandText: '展开更多',
      collapseText: '收起',
    },
    friendLinks: {
      title: '友情链接',
    },
    fontSizeLabels: {
      small: '小',
      medium: '中',
      large: '大',
    },
    countdown: {
      labels: { days: '天', hours: '时', minutes: '分', seconds: '秒' },
    },
    dateFormat: '{month}月',
    article: {
      authorLabel: '作者：',
      tagLabel: '标签：',
      backLinkText: '← 返回列表',
    },
  },

  // ---- 元数据 ----
  meta: {
    keywords: '关键词1,关键词2',
    description: '网站描述信息',
  },
};
