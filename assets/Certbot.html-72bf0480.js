import{_ as a,p as n,q as e,a1 as s}from"./framework-96b046e1.js";const t={},r=s(`<h1 id="certbot" tabindex="-1"><a class="header-anchor" href="#certbot" aria-hidden="true">#</a> Certbot</h1><p>https://eff-certbot.readthedocs.io/en/stable/install.html</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--name</span> certbot <span class="token punctuation">\\</span>
            <span class="token parameter variable">-v</span> <span class="token string">&quot;/etc/letsencrypt:/etc/letsencrypt&quot;</span> <span class="token punctuation">\\</span>
            <span class="token parameter variable">-v</span> <span class="token string">&quot;/var/lib/letsencrypt:/var/lib/letsencrypt&quot;</span> <span class="token punctuation">\\</span>
            certbot/certbot certonly
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ certbot certonly <span class="token punctuation">\\</span>
	<span class="token parameter variable">--authenticator</span> certbot-dnspod <span class="token punctuation">\\</span>
	--certbot-dnspod-credentials /srv/dnspod.ini <span class="token punctuation">\\</span>
	<span class="token parameter variable">--email</span> tech@airdb.net <span class="token punctuation">\\</span>
	--cert-name wildcard.airdb.dev <span class="token punctuation">\\</span>
	<span class="token parameter variable">-d</span> airdb.dev  <span class="token punctuation">\\</span>
	<span class="token parameter variable">-d</span> *.airdb.dev <span class="token punctuation">\\</span>
	--preferred-challenges dns <span class="token parameter variable">-n</span> <span class="token parameter variable">--expand</span> <span class="token punctuation">\\</span>
	--agree-tos <span class="token punctuation">\\</span>
	<span class="token parameter variable">--server</span> https://acme-v02.api.letsencrypt.org/directory <span class="token punctuation">\\</span>
	--reuse-key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[r];function c(l,p){return n(),e("div",null,i)}const d=a(t,[["render",c],["__file","Certbot.html.vue"]]);export{d as default};
