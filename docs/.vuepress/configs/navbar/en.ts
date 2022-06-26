import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'DNS',
    children: [
      {
        text: 'Bind',
        children: [
          { text: 'CLI', link: '/reference/cli.html', },
        ],
      },
      {
        text: 'CoreDNS',
        children: [
          { text: 'CaddyServer', link: '/reference/cli.html', },
        ],
      },
    ],
  },
  {
    text: 'Network Load Balancer',
    children: [
      {
        text: '4 Layer',
        children: [
          '/reference/plugin/pwa.md',
          '/reference/plugin/pwa-popup.md',
        ],
      },
      {
        text: '7 Layer',
        children: [
          '/reference/plugin/prismjs.md',
          '/reference/plugin/shiki.md',
        ],
      },
    ],
  },
  {
    text: 'Application Load Balancer',
    children: [
      {
        text: 'Nginx',
        children: [
          '/advanced/architecture.md',
          '/advanced/plugin.md',
          '/advanced/theme.md',
          {
            text: 'Cookbook',
            link: '/advanced/cookbook/',
          },
        ],
      },
      {
        text: 'OpenResty',
        children: [
          '/contributing.md',
          {
            text: 'Awesome VuePress',
            link: 'https://github.com/vuepress/awesome-vuepress',
          },
        ],
      },
      {
        text: 'Caddy',
        children: [
          '/contributing.md',
        ],
      },
      {
        text: 'HTTPS SSL certificate',
        children: [
          '/contributing.md',
        ],
      },
    ],
  },
  {
    text: 'WAF',
    children: [
      {
        text: '0 Day',
        children: [
          {
            text: 'Cookbook',
            link: '/advanced/cookbook/',
          },
        ],
      },
      {
        text: 'Anti-Bot',
        children: [
          '/contributing.md',
          {
            text: 'Awesome VuePress',
            link: 'https://github.com/vuepress/awesome-vuepress',
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
