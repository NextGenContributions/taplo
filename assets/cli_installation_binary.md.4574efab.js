import{_ as a,o as e,c as l,a as t}from"./app.41239797.js";const b=JSON.parse('{"title":"Binary Releases","description":"","frontmatter":{},"headers":[{"level":2,"title":"Variations","slug":"variations","link":"#variations","children":[{"level":3,"title":"Default Build","slug":"default-build","link":"#default-build","children":[]},{"level":3,"title":"Full Build","slug":"full-build","link":"#full-build","children":[]}]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"cli/installation/binary.md","lastUpdated":1684526896000}'),r={name:"cli/installation/binary.md"},s=t(`<h1 id="binary-releases" tabindex="-1">Binary Releases <a class="header-anchor" href="#binary-releases" aria-hidden="true">#</a></h1><p>We pre-compile each release for all major operating systems, these releases can be found on <a href="https://github.com/tamasfe/taplo/releases" target="_blank" rel="noreferrer">GitHub</a>.</p><h2 id="variations" tabindex="-1">Variations <a class="header-anchor" href="#variations" aria-hidden="true">#</a></h2><p>Taplo offers features \u2014 such as the language server \u2014 that might not be useful for most use-cases. For this reason we build multiple variations that differ in terms of features.</p><h3 id="default-build" tabindex="-1">Default Build <a class="header-anchor" href="#default-build" aria-hidden="true">#</a></h3><p>The default build with commonly-used features.</p><h4 id="download" tabindex="-1">Download <a class="header-anchor" href="#download" aria-hidden="true">#</a></h4><ul><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-linux-x86.gz" target="_blank" rel="noreferrer">Linux (x86)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-linux-x86_64.gz" target="_blank" rel="noreferrer">Linux (x86_64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-linux-aarch64.gz" target="_blank" rel="noreferrer">Linux (ARM64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-darwin-x86_64.gz" target="_blank" rel="noreferrer">macOS (x86_64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-darwin-aarch64.gz" target="_blank" rel="noreferrer">macOS (ARM64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-windows-x86_64.zip" target="_blank" rel="noreferrer">Windows (x86)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-windows-x86_64.zip" target="_blank" rel="noreferrer">Windows (x86_64)</a></li></ul><h3 id="full-build" tabindex="-1">Full Build <a class="header-anchor" href="#full-build" aria-hidden="true">#</a></h3><p>The full build contains the following additional features:</p><ul><li>Language Server</li><li>An interface for <a href="https://github.com/BurntSushi/toml-test" target="_blank" rel="noreferrer">toml-test</a></li></ul><h4 id="download-1" tabindex="-1">Download <a class="header-anchor" href="#download-1" aria-hidden="true">#</a></h4><ul><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-linux-x86.gz" target="_blank" rel="noreferrer">Linux (x86)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-linux-x86_64.gz" target="_blank" rel="noreferrer">Linux (x86_64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-linux-aarch64.gz" target="_blank" rel="noreferrer">Linux (ARM64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-darwin-x86_64.gz" target="_blank" rel="noreferrer">macOS (x86_64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-darwin-aarch64.gz" target="_blank" rel="noreferrer">macOS (ARM64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-windows-x86.zip" target="_blank" rel="noreferrer">Windows (x86)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-windows-x86_64.zip" target="_blank" rel="noreferrer">Windows (x86_64)</a></li></ul><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">curl -fsSL https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-linux-x86_64.gz \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> gzip -d - </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> install -m 755 /dev/stdin /usr/local/bin/taplo</span></span>
<span class="line"></span></code></pre></div>`,15),i=[s];function o(n,d,h,u,p,f){return e(),l("div",null,i)}const m=a(r,[["render",o]]);export{b as __pageData,m as default};
