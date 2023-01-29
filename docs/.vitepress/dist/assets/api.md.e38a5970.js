import{_ as s,c as a,o as n,a as e}from"./app.b0e8f446.js";const _=JSON.parse('{"title":"API","description":"","frontmatter":{},"headers":[{"level":2,"title":"GET Jobs by id","slug":"get-jobs-by-id","link":"#get-jobs-by-id","children":[{"level":3,"title":"parameters","slug":"parameters","link":"#parameters","children":[]},{"level":3,"title":"response","slug":"response","link":"#response","children":[]}]}],"relativePath":"api.md"}'),p={name:"api.md"},l=e(`<h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h1><p>The API is using Laravel 9 backend (REST API). It returns a JSON object.</p><p><strong>Status codes</strong>:</p><p><strong>Authentication</strong>: The API bearer token must be sent in the headers in order to access the API.</p><h2 id="get-jobs-by-id" tabindex="-1">GET Jobs by id <a class="header-anchor" href="#get-jobs-by-id" aria-hidden="true">#</a></h2><p>URL: <code>GET /jobs/{$id}</code></p><h3 id="parameters" tabindex="-1">parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h3><p>job id (integer)</p><h3 id="response" tabindex="-1">response <a class="header-anchor" href="#response" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  id: integer,</span></span>
<span class="line"><span style="color:#A6ACCD;">  job_name: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  workplace: (0 or 1),</span></span>
<span class="line"><span style="color:#A6ACCD;">  remote: (0 or 1),</span></span>
<span class="line"><span style="color:#A6ACCD;">  workdays: (0 or 1),</span></span>
<span class="line"><span style="color:#A6ACCD;">  saturday: (0 or 1),</span></span>
<span class="line"><span style="color:#A6ACCD;">  sunday: (0 or 1),</span></span>
<span class="line"><span style="color:#A6ACCD;">  bank_holidays: (0 or 1),</span></span>
<span class="line"><span style="color:#A6ACCD;">  sat_sun_bh_only: (0 or 1),</span></span>
<span class="line"><span style="color:#A6ACCD;">  normal_hours: (0 or 1),</span></span>
<span class="line"><span style="color:#A6ACCD;">  nightshift: (0 or 1),</span></span>
<span class="line"><span style="color:#A6ACCD;">  nightshift_only: (0 or 1),</span></span>
<span class="line"><span style="color:#A6ACCD;">  other_shift: (0 or 1),</span></span>
<span class="line"><span style="color:#A6ACCD;">  other_shift_only: (0 or 1),</span></span>
<span class="line"><span style="color:#A6ACCD;">  overtime: (0 or 1),</span></span>
<span class="line"><span style="color:#A6ACCD;">  keywords: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  similar_jobs: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">  created_at: timestamp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  updated_at: timestamp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  similar_jobitems: array</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,10),o=[l];function r(t,i,c,d,A,h){return n(),a("div",null,o)}const y=s(p,[["render",r]]);export{_ as __pageData,y as default};
