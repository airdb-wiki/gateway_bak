import{_ as s,o as n,c as e,e as a}from"./app.ddf3b6f8.js";const l={},t=a(`<h1 id="certbot" tabindex="-1"><a class="header-anchor" href="#certbot" aria-hidden="true">#</a> Certbot</h1><p>https://eff-certbot.readthedocs.io/en/stable/install.html</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">docker run -it --rm --name certbot \\</span></span>
<span class="line"><span style="color:#D4D4D4;">            -v </span><span style="color:#CE9178;">&quot;/etc/letsencrypt:/etc/letsencrypt&quot;</span><span style="color:#D4D4D4;"> \\</span></span>
<span class="line"><span style="color:#D4D4D4;">            -v </span><span style="color:#CE9178;">&quot;/var/lib/letsencrypt:/var/lib/letsencrypt&quot;</span><span style="color:#D4D4D4;"> \\</span></span>
<span class="line"><span style="color:#D4D4D4;">            certbot/certbot certonly</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">$ certbot certonly \\</span></span>
<span class="line"><span style="color:#D4D4D4;">	--authenticator certbot-dnspod \\</span></span>
<span class="line"><span style="color:#D4D4D4;">	--certbot-dnspod-credentials /srv/dnspod.ini \\</span></span>
<span class="line"><span style="color:#D4D4D4;">	--email tech@airdb.net \\</span></span>
<span class="line"><span style="color:#D4D4D4;">	--cert-name wildcard.airdb.dev \\</span></span>
<span class="line"><span style="color:#D4D4D4;">	-d airdb.dev  \\</span></span>
<span class="line"><span style="color:#D4D4D4;">	-d *.airdb.dev \\</span></span>
<span class="line"><span style="color:#D4D4D4;">	--preferred-challenges dns -n --expand \\</span></span>
<span class="line"><span style="color:#D4D4D4;">	--agree-tos \\</span></span>
<span class="line"><span style="color:#D4D4D4;">	--server https://acme-v02.api.letsencrypt.org/directory \\</span></span>
<span class="line"><span style="color:#D4D4D4;">	--reuse-key</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[t];function c(i,p){return n(),e("div",null,r)}var d=s(l,[["render",c],["__file","Certbot.html.vue"]]);export{d as default};
