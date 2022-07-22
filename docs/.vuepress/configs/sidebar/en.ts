import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/README.md',
        '/guide/getting-started.md',
        '/guide/configuration.md',
        '/guide/page.md',
        '/guide/markdown.md',
        '/guide/assets.md',
        '/guide/i18n.md',
        '/guide/deployment.md',
        '/guide/theme.md',
        '/guide/plugin.md',
        '/guide/bundler.md',
        '/guide/migration.md',
      ],
    },
  ],
  '/alb/': [
    {
      text: 'nginx',
      children: [
        '/alb/nginx.md',
      ],
    },
    {
      text: 'caddy',
      children: [
        '/alb/caddy.md',
      ],
    },
    {
      text: 'tools',
      children: [
        '/alb/certbot.md',
        '/alb/traffic-replay.md',
      ],
    },
  ],
  '/waf/': [
    {
      text: 'waf',
      collapsible: false,
      children: [
        '/waf/README.md',
        '/waf/cybersecurity.md',
        '/waf/anti-bot.md',
        '/waf/anti-cc.md',
        '/waf/anti-crawler.md',
      ],
    },
    {
      text: 'tools',
      children: [
        '/waf/tcp-fingerprint.md',
        '/waf/tls-fingerprint.md',
        '/waf/http2-fingerprint.md',
      ],
    },
    {
      text: 'strategy',
      children: [
        '/waf/strategy.md',
      ],
    }
  ],
  '/replay/': [
    {
      text: 'Traffic Replay',
      children: [
        '/replay/README.md',
        '/replay/tcp.md',
      ]
    }
  ]
}
