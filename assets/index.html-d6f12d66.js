import{_ as o,M as a,p as l,q as s,R as e,t as r,N as n,a1 as p}from"./framework-204010b2.js";const i={},h=p('<h2 id="爬虫检测技术" tabindex="-1"><a class="header-anchor" href="#爬虫检测技术" aria-hidden="true">#</a> 爬虫检测技术</h2><ul><li><p>行为检测: 通过分析网页上用户的操作（鼠标的移动、点击、滚动行为和浏览行为）来判断操作者是否是机器控制的网络爬虫。</p></li><li><p>指纹识别: 通过分析设备和浏览器的信息来判断访问者是否为网络爬虫。</p></li></ul><p>虽然指纹识别有被攻破和绕过的可能，但是指纹识别相较于行为检测，可以比较快速地对访问者做出识别和判断，将那些看了几篇教程就撸起袖子一通乱干的爬虫死死地摁在地上。</p><h2 id="ja3-s-的使用原理" tabindex="-1"><a class="header-anchor" href="#ja3-s-的使用原理" aria-hidden="true">#</a> JA3(s) 的使用原理</h2><p>Q: 为什么 Ja3 的计算结果能够用于识别 TSL/SSL 指纹信息？ A: 这其实源于John Althouse的一个研究结果：<strong>同一个服务器对同一个客户端的多次请求返回相同的响应信息。</strong></p><h2 id="ja3-不同" tabindex="-1"><a class="header-anchor" href="#ja3-不同" aria-hidden="true">#</a> Ja3 不同</h2><ol><li>chrome</li></ol><p>指纹: 192, 0-4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53, 0-23-65281-10-11-35-16-5-13-18-51-45-43-27-21, 29-23-24, 0</p><p>edge</p><p>192, 0-4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53, 0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513-21, 29-23-24, 0</p><p>新版edge也是用的chromium的内核，Extention扩展多了一个17513</p><p>csharp的HttpClient 指纹: 3072, 49196-49195-49200-49199-159-158-49188-49187-49192-49191-49162-49161-49172-49171-157-156-61-60-53-47-10, 0-10-11-13-35-23-65281, 29-23-24, 0</p><ol start="4"><li>Fiddler</li></ol><p>指纹: 3072, 49196-49195-49200-49199-159-158-49188-49187-49192-49191-49162-49161-49172-49171-157-156-61-60-53-47-10, 0-10-11-13-35-23-65281, 29-23-24, 0</p><p>因为Fiddler是csharp写的，应该用的都是微软的封装的ssl实现吧。 所以和csharp的HttpClient是一样的指纹。</p><p>java JDK自带的HttpsURLConnection</p><p>指纹: 3072, 49187-49191-60-49189-49193-103-64-49161-49171-47-49156-49166-51-50-49195-49199-156-49197-49201-158-162-49160-49170-10-49155-49165-22-19-255, 10-11-13, 23-1-3-19-21-6-7-9-10-24-11-12-25-13-14-15-16-17-2-18-4-5-20-8-22, 0</p><p>明显可以看出来 EllipticCurve 多了很多！</p>',18),c={href:"https://www.cnblogs.com/yudongdong/p/14855507.html",target:"_blank",rel:"noopener noreferrer"},d={href:"http://www.jsjkx.com/CN/article/openArticlePDF.jsp?id=18951",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.guildhab.top/2021/04/%E9%80%9A%E8%BF%87-ja3s-%E5%AE%9E%E7%8E%B0-tls-%E6%8C%87%E7%BA%B9%E8%AF%86%E5%88%AB",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.tr0y.wang/2020/06/28/ja3/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/fooinha/nginx-ssl-ja3",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.secrss.com/articles/11014",target:"_blank",rel:"noopener noreferrer"},b={href:"https://ares-x.com/2021/04/18/SSL-%E6%8C%87%E7%BA%B9%E8%AF%86%E5%88%AB%E5%92%8C%E7%BB%95%E8%BF%87",target:"_blank",rel:"noopener noreferrer"},E={href:"https://juejin.cn/post/6844903970180169742",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blogs.cisco.com/security/tls-fingerprinting-in-the-real-world",target:"_blank",rel:"noopener noreferrer"},w={href:"https://bbs.huaweicloud.com/blogs/270253",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.alibabacloud.com/zh/products/antibot",target:"_blank",rel:"noopener noreferrer"},x={href:"https://patents.google.com/patent/CN105930727A/zh",target:"_blank",rel:"noopener noreferrer"};function j(A,B){const t=a("ExternalLinkIcon");return l(),s("div",null,[h,e("p",null,[e("a",c,[r("区分指纹"),n(t)])]),e("p",null,[r("IDS Intrusion Detection System "),e("a",d,[r("改进的TLS指纹增强用户行为安全分析能力"),n(t)])]),e("p",null,[e("a",_,[r("通过-ja3s-实现-tls-指纹识别"),n(t)])]),e("p",null,[e("a",f,[r("JA3(S)，简单而有效的 TLS 指纹"),n(t)])]),e("p",null,[e("a",u,[r("nginx-ssl-ja3"),n(t)])]),e("p",null,[e("a",g,[r("混淆加密流量规避检测：黑客利用加密流量趋势明显"),n(t)])]),e("p",null,[e("a",b,[r("SSL-指纹识别和绕过"),n(t)])]),e("p",null,[e("a",E,[r("浏览器指纹追踪技术简述"),n(t)])]),e("p",null,[e("a",m,[r("TLS Fingerprinting in the Real World"),n(t)])]),e("p",null,[e("a",w,[r("Python常见的反爬手段和反反爬虫方法"),n(t)])]),e("p",null,[e("a",k,[r("爬虫风险管理"),n(t)])]),e("p",null,[e("a",x,[r("基于Web的爬虫识别算法"),n(t)])])])}const C=o(i,[["render",j],["__file","index.html.vue"]]);export{C as default};
