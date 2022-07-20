import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Home',
    link: 'https://airdb.wiki/',
  },
  {
    text: 'DNS',
    link: '/dns/',
  },
  {
    text: 'Network Load Balancer',
    link: '/nlb/',
  },
  {
    text: 'Application Load Balancer',
    link: '/alb/',
  },
  {
    text: 'WAF',
    children: [
      {
        text: '0 Day',
        children: [
          {
            text: 'Cookbook',
            link: '/waf/',
          },
        ],
      },
      {
        text: 'Anti-Bot',
        children: [
          '/waf/README.md',
          {
            text: 'Awesome VuePress',
            link: '/waf/',
          },
        ],
      },
      {
        text: 'Anti-CC',
        children: [
          '/contributing.md',
          {
            text: 'Awesome VuePress',
            link: 'https://github.com/vuepress/awesome-vuepress',
          },
        ],
      },
      {
        text: 'APIs Protection',
        children: [
          '/contributing.md',
          {
            text: 'Awesome VuePress',
            link: '/advanced/cookbook/',
          },
        ],
      },
    ],
  },
]
