import{_ as r,r as o,o as l,c as a,a as e,b as t,d as n,e as i}from"./app-c6ba43cf.js";const p={},h=e("h1",{id:"tls-fingerprint",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tls-fingerprint","aria-hidden":"true"},"#"),t(" TLS Fingerprint")],-1),c={href:"https://xz.aliyun.com/t/2531",target:"_blank",rel:"noopener noreferrer"},d={href:"https://pkg.go.dev/crypto/tls#ClientHelloInfo",target:"_blank",rel:"noopener noreferrer"},_={href:"https://developers.cloudflare.com/bots/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://resources.sei.cmu.edu/asset_files/Presentation/2019_017_001_539902.pdf",target:"_blank",rel:"noopener noreferrer"},m={href:"https://halfrost.com/https_tls1-2_handshake/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://halfrost.com/https_tls1-3_handshake/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://halfrost.com/https-extensions/",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"指纹类型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#指纹类型","aria-hidden":"true"},"#"),t(" 指纹类型")],-1),v=e("p",null,"INVALID: 不合法 BOT Browser Empty Unkown",-1),k={href:"https://www.defensive-security.com/blog/hiding-behind-ja3-hash",target:"_blank",rel:"noopener noreferrer"},w=i(`<p>openssl s_client ssldump tshark tcpdump</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Extension: padding (len=203)
    Type: padding (21)
    Length: 203
    Padding Data: 000000000000000000000000000000000000000000000000000000000000000000000000…

771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513-21,29-23-24,0

17513-21 (application_setting, padding)
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),S={href:"https://imququ.com/post/optimize-tls-handshake.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://icefrozen.github.io/article/tcpip-4-SSL-TLS-3/",target:"_blank",rel:"noopener noreferrer"},L=e("p",null,"TLS 常见的攻击举例",-1),T=e("ul",null,[e("li",null,"Heartbleed（心脏出血）"),e("li",null,"Replay Attacks（重放攻击）"),e("li",null,"降级攻击(FREAK，LogJam 和 CurveSwap)")],-1),x={href:"https://learn.microsoft.com/en-us/dotnet/api/system.net.security.tlsciphersuite?view=net-7.0",target:"_blank",rel:"noopener noreferrer"},E={href:"https://developer.apple.com/documentation/security/1550981-ssl_cipher_suite_values",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.ssllabs.com/ssltest/analyze.html?d=google.com",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_set_session_ticket_cb.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://www.openssl.org/docs/man1.1.1/man3/SSL_client_hello_get0_ciphers.html",target:"_blank",rel:"noopener noreferrer"};function I(P,B){const s=o("ExternalLinkIcon");return l(),a("div",null,[h,e("p",null,[e("a",c,[t("https://xz.aliyun.com/t/2531"),n(s)])]),e("p",null,[e("a",d,[t("https://pkg.go.dev/crypto/tls#ClientHelloInfo"),n(s)])]),e("p",null,[e("a",_,[t("https://developers.cloudflare.com/bots/"),n(s)])]),e("p",null,[t("Cisco ssl fingerprint is a more complete implementation "),e("a",u,[t("https://resources.sei.cmu.edu/asset_files/Presentation/2019_017_001_539902.pdf"),n(s)])]),e("p",null,[t("HTTPS 温故知新（三） —— 直观感受 TLS 握手流程(上) "),e("a",m,[t("https://halfrost.com/https_tls1-2_handshake/"),n(s)])]),e("p",null,[t("HTTPS 温故知新（四） —— 直观感受 TLS 握手流程(下) "),e("a",f,[t("https://halfrost.com/https_tls1-3_handshake/"),n(s)])]),e("p",null,[t("HTTPS 温故知新（六） —— TLS 中的 Extensions "),e("a",g,[t("https://halfrost.com/https-extensions/"),n(s)])]),b,v,e("p",null,[t("defensive security "),e("a",k,[t("https://www.defensive-security.com/blog/hiding-behind-ja3-hash"),n(s)])]),w,e("p",null,[e("a",S,[t("https://imququ.com/post/optimize-tls-handshake.html"),n(s)])]),e("p",null,[e("a",y,[t("https://icefrozen.github.io/article/tcpip-4-SSL-TLS-3/"),n(s)])]),L,T,e("p",null,[t("TlsCipherSuite Enum "),e("a",x,[t("https://learn.microsoft.com/en-us/dotnet/api/system.net.security.tlsciphersuite?view=net-7.0"),n(s)])]),e("p",null,[t("ios cipher values "),e("a",E,[t("https://developer.apple.com/documentation/security/1550981-ssl_cipher_suite_values"),n(s)])]),e("p",null,[e("a",z,[t("https://www.ssllabs.com/ssltest/analyze.html?d=google.com"),n(s)])]),e("p",null,[t("OpenSSL: "),e("a",C,[t("https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_set_session_ticket_cb.html"),n(s)])]),e("p",null,[e("a",H,[t("https://www.openssl.org/docs/man1.1.1/man3/SSL_client_hello_get0_ciphers.html"),n(s)])])])}const N=r(p,[["render",I],["__file","tls-fingerprint.html.vue"]]);export{N as default};
