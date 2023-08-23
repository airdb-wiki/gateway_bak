import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/dns/': [
    {
      text: 'DNS',
      children: [
        '/dns/README.md',
        '/dns/doh.md',
        '/dns/coredns.md',
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
        '/alb/lego.md',
        '/alb/certbot.md',
        '/alb/traffic-replay.md',
      ],
    },
    {
      text: 'Protection',
      collapsible: false,
      children: [
        '/alb/rate-limit.md',
        '/alb/downgrade.md',
        '/alb/circuit-break.md',
      ],
    }, 
  ],
  '/security/': [
    {
      text: 'security',
      collapsible: false,
      children: [
        '/security/README.md',
        '/security/cybersecurity.md',
        '/security/anti-cc.md',
        '/security/anti-crawler.md',
      ],
    },
    {
      text: 'http',
      children: [
        '/security/http/ip.md',
        '/security/http/user-agent.md',
        '/security/http/general-header.md',
        '/security/http/custom-header.md',
      ],
    },
    {
      text: 'fingerprint',
      children: [
        '/security/fp/tcp-fingerprint.md',
        '/security/fp/tls-fingerprint.md',
        '/security/fp/http2-fingerprint.md',
      ],
    },
    {
      text: 'strategy',
      children: [
        '/security/strategy.md',
      ],
    }
  ],
  '/advanced/': [
    {
      text: 'Disaster Recovery',
      children: [
        '/advanced/README.md',
        '/advanced/dr.md',
      ]
    },
    {
      text: 'Traffic Replay',
      collapsible: true,
      children: [
        '/advanced/replay/README.md',
        '/advanced/replay/tcp.md',
        '/advanced/replay/udp.md',
        '/advanced/replay/http.md',
      ]
    }
  ]
}
