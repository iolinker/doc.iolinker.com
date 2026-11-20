import{_ as n,o as s,c as o,a2 as t}from"./chunks/framework.C-si7TFR.js";const q=JSON.parse('{"title":"Moonshot AI","description":"支持调用Kimi AI大模型接口，集成AI大模型能力。","frontmatter":{"title":"Moonshot AI","description":"支持调用Kimi AI大模型接口，集成AI大模型能力。","meta":[{"name":"keywords","content":"Kimi AI, AI大模型, Moonshot AI调用, Kimi接口调用, 低代码, AI工作流, 流程引擎"}]},"headers":[],"relativePath":"zh/llm_kimi.md","filePath":"zh/llm_kimi.md"}'),e={name:"zh/llm_kimi.md"};function p(l,a,i,r,c,u){return s(),o("div",null,[...a[0]||(a[0]=[t(`<h2 id="moonshot-ai" tabindex="-1">Moonshot AI <a class="header-anchor" href="#moonshot-ai" aria-label="Permalink to &quot;Moonshot AI&quot;">​</a></h2><p>通过<a href="https://platform.moonshot.cn/console/api-keys" target="_blank" rel="noreferrer">Moonshot</a>平台的API，调用大模型接口，该平台有一定的免费Token额度可以使用。</p><blockquote><p>历史界面图片在复核并重拍前不展示，请按当前界面核对操作。</p></blockquote><h2 id="输入" tabindex="-1">输入 <a class="header-anchor" href="#输入" aria-label="Permalink to &quot;输入&quot;">​</a></h2><blockquote><p>历史界面图片在复核并重拍前不展示，请按当前界面核对操作。</p></blockquote><h3 id="api-key" tabindex="-1">API Key <a class="header-anchor" href="#api-key" aria-label="Permalink to &quot;API Key&quot;">​</a></h3><p>可在【应用开发】&gt;【凭据管理】里创建Moonshot API Key凭据类型。需要配置如下几个选项：</p><ul><li>API Key。<a href="https://platform.moonshot.cn/console/api-keys" target="_blank" rel="noreferrer">Moonshot</a>平台生成的API Key。</li></ul><blockquote><p>原截图含凭据、令牌或应用标识，已停止公开。请在对应平台自行创建秘密并填入本地配置。</p></blockquote><blockquote><p>历史界面图片在复核并重拍前不展示，请按当前界面核对操作。</p></blockquote><h3 id="模型" tabindex="-1">模型 <a class="header-anchor" href="#模型" aria-label="Permalink to &quot;模型&quot;">​</a></h3><p>当前支持的模型，可以参考官方<a href="https://platform.moonshot.cn/docs/introduction#%E5%85%B6%E4%BB%96%E5%80%BC%E5%BE%97%E6%B3%A8%E6%84%8F%E7%9A%84%E9%87%8D%E8%A6%81%E4%BA%8B%E9%A1%B9" target="_blank" rel="noreferrer">文档</a>。</p><blockquote><p>历史界面图片在复核并重拍前不展示，请按当前界面核对操作。</p></blockquote><h3 id="输入-1" tabindex="-1">输入 <a class="header-anchor" href="#输入-1" aria-label="Permalink to &quot;输入&quot;">​</a></h3><p>提示语内容。</p><h3 id="temperature" tabindex="-1">Temperature <a class="header-anchor" href="#temperature" aria-label="Permalink to &quot;Temperature&quot;">​</a></h3><p>参考<a href="https://platform.moonshot.cn/docs/guide/migrating-from-openai-to-kimi#temperature-%E5%92%8C-n-%E5%80%BC" target="_blank" rel="noreferrer">官方文档</a>，一般使用默认值即可。</p><h2 id="输出" tabindex="-1">输出 <a class="header-anchor" href="#输出" aria-label="Permalink to &quot;输出&quot;">​</a></h2><blockquote><p>历史界面图片在复核并重拍前不展示，请按当前界面核对操作。</p></blockquote><p>完整输出如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;choices&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;finish_reason&quot;: &quot;stop&quot;,</span></span>
<span class="line"><span>        &quot;index&quot;: 0,</span></span>
<span class="line"><span>        &quot;message&quot;: {</span></span>
<span class="line"><span>          &quot;content&quot;: &quot;嗨，我是Kimi，Moonshot AI 提供的人工智能助手。我擅长中英文对话，能帮你解答问题、处理文档、分析数据等。有什么可以帮你的吗？&quot;,</span></span>
<span class="line"><span>          &quot;role&quot;: &quot;assistant&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;created&quot;: 1751520102,</span></span>
<span class="line"><span>    &quot;id&quot;: &quot;chatcmpl-68661366db4ea7dcfa135b00&quot;,</span></span>
<span class="line"><span>    &quot;model&quot;: &quot;kimi-latest-8k&quot;,</span></span>
<span class="line"><span>    &quot;object&quot;: &quot;chat.completion&quot;,</span></span>
<span class="line"><span>    &quot;result&quot;: &quot;嗨，我是Kimi，Moonshot AI 提供的人工智能助手。我擅长中英文对话，能帮你解答问题、处理文档、分析数据等。有什么可以帮你的吗？&quot;,</span></span>
<span class="line"><span>    &quot;usage&quot;: {</span></span>
<span class="line"><span>      &quot;completion_tokens&quot;: 41,</span></span>
<span class="line"><span>      &quot;prompt_tokens&quot;: 80,</span></span>
<span class="line"><span>      &quot;total_tokens&quot;: 121</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span></code></pre></div>`,21)])])}const m=n(e,[["render",p]]);export{q as __pageData,m as default};
