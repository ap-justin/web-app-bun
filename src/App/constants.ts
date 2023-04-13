import { Link, LinkGroup, SocialMediaLink } from "./types";
import { BASE_DOMAIN, DAPP_DOMAIN } from "constants/common";
import { appRoutes } from "constants/routes";
import { LITEPAPER } from "constants/urls";

export type LINKS = {
  HEADER_LINKS: Link[];
  GROUPS_DATA: LinkGroup[];
  SOCIAL_MEDIA_LINKS: SocialMediaLink[];
};

export const NON_AST_LINKS: LINKS = {
  HEADER_LINKS: [
    { title: "For Non-Profits", href: BASE_DOMAIN, external: true },
    {
      title: "Marketplace",
      href: appRoutes.marketplace,
    },
    {
      title: "Giving Partners",
      href: `${BASE_DOMAIN}/giving-partners-csr/`,
      external: true,
    },
    {
      title: "About",
      href: `${BASE_DOMAIN}/about-angel-giving/`,
      external: true,
    },
    { title: "Register", href: appRoutes.register },
    // NOTE: governance will be reenabled when we relaunch the $HALO token
    // { title: "Governance", href: appRoutes.govern },
  ],
  GROUPS_DATA: [
    {
      title: "Products",
      links: [
        {
          text: "Non-profits",
          href: `${BASE_DOMAIN}`,
        },
        {
          text: "Giving Partners (CSR)",
          href: `${BASE_DOMAIN}/giving-partners-csr/`,
        },
        { text: "Impact Board", href: `${DAPP_DOMAIN}/leaderboard/` },
        // {
        //   text: "For Giftcards",
        //   href: "https://app.angel.giving/gift",
        // },
      ],
    },
    {
      title: "About",
      links: [
        { text: "About us", href: `${BASE_DOMAIN}/about-angel-giving/` },
        {
          text: "Meet the team",
          href: `${BASE_DOMAIN}/about/#:~:text=MEET%20THE%20TEAM-`,
        },
        { text: "News", href: `${BASE_DOMAIN}/news/` },
        { text: "Careers", href: `${BASE_DOMAIN}/careers/` },
      ],
    },
    {
      title: "Docs",
      links: [
        { text: "Litepaper", href: LITEPAPER },
        { text: "FAQs", href: "https://intercom.help/angel-protocol/en" },
        { text: "Technical doc (coming soon)" },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          text: "Privacy policy",
          href: `${BASE_DOMAIN}/privacy-policy/`,
        },
        {
          text: "Terms of Use",
          href: `${BASE_DOMAIN}/terms-of-use/`,
        },
        { text: "Terms for NPO", href: `${BASE_DOMAIN}/terms-of-use-npo/` },
      ],
    },
  ],
  SOCIAL_MEDIA_LINKS: [
    {
      title: "Twitter",
      icon: {
        type: "Twitter",
        size: 24,
      },
      href: "https://twitter.com/angelgiving_",
    },
    {
      title: "Telegram",
      icon: {
        type: "Telegram",
        size: 24,
      },
      href: "https://t.me/angelprotocoI",
    },
    {
      title: "Discord",
      icon: {
        type: "Discord",
        size: 24,
      },
      href: "https://discord.gg/angelprotocol",
    },
    {
      title: "YouTube",
      icon: {
        type: "Youtube",
        size: 24,
      },
      href: "https://www.youtube.com/@AngelGiving",
    },
    {
      title: "Medium",
      icon: {
        type: "Medium",
        size: 24,
      },
      href: "https://angelprotocol.medium.com",
    },
    {
      title: "Facebook",
      icon: {
        type: "FacebookCircle",
        size: 24,
      },
      href: "https://www.facebook.com/AngelgivingFB/",
    },
    {
      title: "Linkedin",
      icon: {
        type: "Linkedin",
        size: 24,
      },
      href: "https://www.linkedin.com/company/angel-giving/",
    },
    {
      title: "Instagram",
      icon: {
        type: "Instagram",
        size: 24,
      },
      href: "https://www.instagram.com/angel.giving/",
    },
  ],
};

export const AST_LINKS: LINKS = {
  HEADER_LINKS: [
    { title: "For Non-Profits", href: BASE_DOMAIN, external: true },
    {
      title: "Marketplace",
      href: appRoutes.marketplace,
    },
    {
      title: "About",
      href: `https://angelprotocol.io/about/`,
    },
    {
      title: "Pricing",
      href: `https://angelprotocol.io/pricing/`,
    },
    { title: "Register", href: appRoutes.register },
  ],
  GROUPS_DATA: [
    {
      title: "About",
      links: [
        { text: "About us", href: `${BASE_DOMAIN}/about-angel-giving/` },
        {
          text: "Meet the team",
          href: `${BASE_DOMAIN}/about/#:~:text=MEET%20THE%20TEAM-`,
        },
        { text: "News", href: `${BASE_DOMAIN}/news/` },
        { text: "Careers", href: `${BASE_DOMAIN}/careers/` },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          text: "Privacy policy",
          href: `${BASE_DOMAIN}/privacy-policy/`,
        },
        {
          text: "Terms of Use",
          href: `${BASE_DOMAIN}/terms-of-use/`,
        },
        { text: "Terms for NPO", href: `${BASE_DOMAIN}/terms-of-use-npo/` },
      ],
    },
  ],
  SOCIAL_MEDIA_LINKS: [
    {
      title: "Twitter",
      icon: {
        type: "Twitter",
        size: 24,
      },
      href: "https://twitter.com/AngelProtocol",
    },
    {
      title: "Telegram",
      icon: {
        type: "Telegram",
        size: 24,
      },
      href: "https://t.me/angelprotocoI",
    },
    {
      title: "Discord",
      icon: {
        type: "Discord",
        size: 24,
      },
      href: "https://discord.gg/angelprotocol",
    },
    {
      title: "YouTube",
      icon: {
        type: "Youtube",
        size: 24,
      },
      href: "https://www.youtube.com/angelprotocol",
    },
    {
      title: "Medium",
      icon: {
        type: "Medium",
        size: 24,
      },
      href: "https://angelprotocol.medium.com",
    },
    {
      title: "Linkedin",
      icon: {
        type: "Linkedin",
        size: 24,
      },
      href: "https://www.linkedin.com/company/angel-protocol/",
    },
  ],
};
