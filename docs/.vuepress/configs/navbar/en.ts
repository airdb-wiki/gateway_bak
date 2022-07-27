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
    link: '/waf/',
  },
  {
    text: 'Advanced',
    link: '/advanced/',
  }
]
