import{_ as e,p as i,q as a,a1 as p}from"./framework-204010b2.js";const r={},n=p(`<h1 id="代理ip常见的一些功能" tabindex="-1"><a class="header-anchor" href="#代理ip常见的一些功能" aria-hidden="true">#</a> 代理ip常见的一些功能</h1><ul><li><p>1.突破自身ip访问限制，现在有许多的网站都对ip地址访问进行了限制，这时则可以通过代理ip来突破限制，让自己进入网站。</p></li><li><p>2.提高访问速度，通常代理ip服务器都设置一个较大的硬盘缓冲区，当有外信息市，则直接由缓冲区中取出信息，传给用户，以提高访问速度。</p></li><li><p>3.隐藏真实ip达到匿名效果，可以通过代理ip上网，隐藏真实的ip地址，避免受到黑客攻击。</p></li><li><p>4.突破ip封锁，例如要抓取一个网站的数据，但是网站对每个ip所能抓取的数据做了限制，这时我们使用代理ip，不停地切换ip，就可以突破限制，从而提高工作效率。</p></li></ul><h1 id="代理的级别" tabindex="-1"><a class="header-anchor" href="#代理的级别" aria-hidden="true">#</a> 代理的级别</h1><pre><code>根据代理匿名程度的不同，可以划分为透明代理、普通匿名代理、欺骗匿名代理和高匿代理。
</code></pre><h1 id="如何识别代理" tabindex="-1"><a class="header-anchor" href="#如何识别代理" aria-hidden="true">#</a> 如何识别代理</h1><ul><li><p>一、反向探测技术 扫描IP是不是开通了80，8080, 443等代理服务器经常开通的端口，显然一个普通的用户IP不太可能开通如上的端口。</p></li><li><p>二、HTTP头部的X_Forwarded_For</p></li></ul><p>开通了HTTP代理的IP可以通过此法来识别是不是代理IP；如果带有XFF信息，该IP是代理IP无疑。</p><ul><li>三、Keep-alive报文</li></ul><p>如果带有Proxy-Connection的Keep-alive报文，该IP毫无疑问是代理IP。</p><ul><li>四、查看IP上端口</li></ul><p>如果一个IP有的端口大于10000，那么该IP大多也存在问题，普通的家庭IP开这么大的端口几乎是不可能的。</p><p>这四种代理IP检测的方法几乎都是公开的，一些大公司为了避免恶意IP还会采取其他方法。比如利用网络爬虫爬取代理IP并作以标记，更有甚者，会通过业务建模收集恶意IP，然后再通过协议扫描的方式来判断这些IP是不是代理IP。</p><h1 id="如何确定使用的代理是否为高匿名代理" tabindex="-1"><a class="header-anchor" href="#如何确定使用的代理是否为高匿名代理" aria-hidden="true">#</a> 如何确定使用的代理是否为高匿名代理</h1><p>验证接口：http://httpbin.org/get</p><p>验证方法：设置好代理，请求此接口（只需要带一个UA即可），解析响应的json文件，获取匿名程度。</p><p>a.如果origin中包含自己真实的IP，则为透明代理；</p><p>b.如果响应中包含Proxy-Connection参数，则为匿名代理；</p><p>c.其他情况则为高匿代理；</p><h1 id="怎样快速判断代理ip是否可用" tabindex="-1"><a class="header-anchor" href="#怎样快速判断代理ip是否可用" aria-hidden="true">#</a> 怎样快速判断代理ip是否可用</h1><p>telnet</p><h1 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h1><p>https://www.wanbianip.com/News-newsInfo-id-213.html https://www.dailiproxy.com/how-to-detect-if-an-ip-address-is-a-proxy/</p>`,22),t=[n];function d(h,l){return i(),a("div",null,t)}const c=e(r,[["render",d],["__file","indentify-proxy.html.vue"]]);export{c as default};
