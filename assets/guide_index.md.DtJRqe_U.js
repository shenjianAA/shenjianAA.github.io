import{d as i,c as e,k as s,a,t,m as l,R as n,o as h}from"./chunks/framework.E0rNYo87.js";const p="0.0.1",r=s("h1",{id:"get-started",tabindex:"-1"},[a("Get Started "),s("a",{class:"header-anchor",href:"#get-started","aria-label":'Permalink to "Get Started"'},"​")],-1),o=s("p",null,[s("strong",null,[s("span",{style:{color:"var(--vp-c-brand)","font-size":"16px"}},"@zhonghe/utils")]),a(" 是一个集成业务中常用的工具函数库。集成封装常用业务函数库，可以极大程度上的提高开发者的效率。")],-1),d={style:{color:"var(--vp-c-brand)","font-weight":"600","font-size":"16px"}},k=n(`<h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><img src="https://img.shields.io/npm/v/@zhonghe/utils?style=plastic&amp;logo=npm&amp;label=@zhonghe/utils&amp;link=https://www.npmjs.com/package/@zhonghe/utils" alt="@zhonghe/utils" style="margin-top:10px;"><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-tErWv" id="tab-ejsEgCp" checked="checked"><label for="tab-ejsEgCp">npm</label><input type="radio" name="group-tErWv" id="tab-fI1zx2U"><label for="tab-fI1zx2U">yarn</label><input type="radio" name="group-tErWv" id="tab-fyRQw2D"><label for="tab-fyRQw2D">pnpm</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @zhonghe/utils</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @zhonghe/utils</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @zhonghe/utils</span></span></code></pre></div></div></div><h2 id="usage-example" tabindex="-1">Usage Example <a class="header-anchor" href="#usage-example" aria-label="Permalink to &quot;Usage Example&quot;">​</a></h2><h3 id="zhonghe-utils" tabindex="-1"><code>@zhonghe/utils</code> <a class="header-anchor" href="#zhonghe-utils" aria-label="Permalink to &quot;\`@zhonghe/utils\`&quot;">​</a></h3><p>集成所有浏览器环境下的工具函数</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { generateUUID } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@zhonghe/utils&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> uuid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> generateUUID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="usage-cdn" tabindex="-1">Usage CDN <a class="header-anchor" href="#usage-cdn" aria-label="Permalink to &quot;Usage CDN&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这里使用了 <a href="https://unpkg.com/" target="_blank" rel="noreferrer">unpkg</a> ，但也可以使用其他提供包服务的 CDN， 例如 <a href="https://www.jsdelivr.com/" target="_blank" rel="noreferrer">jsdelivr</a> 或 <a href="https://cdnjs.com/" target="_blank" rel="noreferrer">cdnjs</a>，也可以下载此文件并自行提供服务。</p></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// All non-Node module methods are injected into the zh global variable</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://unpkg.com/@zhonghe/utils@\${version}/index.browser.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.log(zh)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="technology-stack" tabindex="-1">Technology Stack <a class="header-anchor" href="#technology-stack" aria-label="Permalink to &quot;Technology Stack&quot;">​</a></h2><ul><li><a href="https://github.com/egoist/tsup" target="_blank" rel="noreferrer">tsup</a> 构建工具</li><li><a href="https://github.com/vitest-dev/vitest" target="_blank" rel="noreferrer">vitest</a> 测试工具</li><li><a href="https://github.com/vuejs/vitepress" target="_blank" rel="noreferrer">vitepress</a> 文档工具</li><li><a href="https://github.com/flingyp/vitepress-demo-preview" target="_blank" rel="noreferrer">vitepress-demo-preview</a> 组件预览工具</li><li><a href="https://github.com/gulpjs/gulp" target="_blank" rel="noreferrer">gulp</a> 流程构建工具</li></ul>`,12),y=JSON.parse('{"title":"Get Started","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md","lastUpdated":1716887138000}'),g={name:"guide/index.md"},v=i({...g,setup(c){return(u,b)=>(h(),e("div",null,[r,o,s("p",null,[a("当前版本："),s("span",d,"v"+t(l(p)),1)]),k]))}});export{y as __pageData,v as default};
