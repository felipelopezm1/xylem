#!/usr/bin/env python3
"""Rebuild jec26-xylem-deck.html with UTF-8, EN/ES toggle, speaker notes."""
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "legacy" / "jec26-xylem-deck.html"

HEAD = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Xylem \u00d7 JEC26 \u2014 Biomimicry & Agentic AI for Critical Economics</title>
<meta name="description" content="A collaboration proposal for XX Jornadas de Econom\u00eda Cr\u00edtica \u2014 biomimicry and agentic AI for critical economics, development and ecology.">
<meta property="og:url" content="https://xylem-bio.vercel.app/legacy/jec26-xylem-deck.html">
<meta property="og:image" content="https://xylem-bio.vercel.app/og/jec-deck.jpg?v=4">
<meta property="og:image:secure_url" content="https://xylem-bio.vercel.app/og/jec-deck.jpg?v=4">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="627">
<meta property="og:image:alt" content="Xylem \u00d7 JEC26 collaboration deck \u2014 Biomimicry & Agentic AI for Critical Economics">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://xylem-bio.vercel.app/og/jec-deck.jpg?v=4">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
:root{--bg:#000;--ink:#f2f0d8;--muted:#a8a494;--muted2:#6e6b5e;--cyan:#48dbe6;--gold:#f4c542;--accent:#c8ff2e;--ehu:#e8e4d0;--line:rgba(242,240,216,.18);--serif:'Fraunces',Georgia,serif;--mono:'JetBrains Mono',ui-monospace,monospace;--disp:'Anton',Impact,sans-serif}
*{box-sizing:border-box;margin:0;padding:0}html,body{height:100%}
body{background:#000;color:var(--ink);font-family:var(--serif);-webkit-font-smoothing:antialiased;overflow:hidden}
.deck{position:fixed;inset:0;overflow:hidden}
.slide{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;padding:clamp(34px,5.2vw,76px) clamp(40px,6.5vw,104px);opacity:0;visibility:hidden;transition:opacity .55s ease;background:var(--bg)}
.slide.active{opacity:1;visibility:visible;z-index:2}
body.notes-open .slide{padding-bottom:clamp(120px,18vh,180px)}
.bar{position:absolute;left:0;right:0;display:flex;justify-content:space-between;align-items:center;padding:0 clamp(40px,6.5vw,104px);font-family:var(--mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);z-index:65;pointer-events:none}
.bar.top{top:clamp(22px,3vw,40px)}.bar.bot{bottom:clamp(22px,3vw,40px)}
.bar .brand{color:var(--ink)}.bar-right{display:flex;align-items:center;gap:14px;pointer-events:auto}
.lang{display:flex;border:1px solid var(--line);border-radius:999px;overflow:hidden}
.lang button{background:none;border:0;color:var(--muted);padding:5px 11px;cursor:pointer;font-family:var(--mono);font-size:11px;letter-spacing:.1em}
.lang button.on{background:var(--accent);color:#000;font-weight:700}
.notes-btn{background:none;border:1px solid var(--line);color:var(--muted);padding:5px 11px;border-radius:999px;cursor:pointer;font-family:var(--mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase}
.notes-btn.on,.notes-btn:hover{color:var(--ink);border-color:var(--ink)}
.pageprog{position:absolute;left:0;bottom:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--cyan));width:0;z-index:6;transition:width .4s}
.veins{position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:.3}
.inner{position:relative;z-index:3;width:100%}
.eyebrow{font-family:var(--mono);font-size:clamp(11px,1.15vw,14px);letter-spacing:.32em;text-transform:uppercase;color:var(--muted);font-weight:500}
.eyebrow.g{color:var(--accent)}.eyebrow.gold{color:var(--gold)}
h1{font-family:var(--disp);font-weight:400;line-height:.95;letter-spacing:.02em;text-transform:uppercase;font-size:clamp(42px,6.8vw,96px)}
h1 .it{font-family:var(--serif);font-style:italic;font-weight:300;color:var(--cyan);text-transform:none}
h2{font-family:var(--disp);font-weight:400;line-height:1;letter-spacing:.02em;text-transform:uppercase;font-size:clamp(30px,4.8vw,62px)}
h2 em,h2 .g{font-family:var(--serif);font-style:italic;font-weight:300;color:var(--cyan);text-transform:none}
h2 .g{color:var(--accent)}
.lead{font-weight:300;font-size:clamp(18px,2.2vw,30px);line-height:1.34;color:var(--ink);max-width:30ch}
.lead b{color:var(--accent);font-weight:500}
.body{font-family:var(--mono);font-weight:300;font-size:clamp(13px,1.35vw,16px);line-height:1.7;color:var(--ink)}
.body b{color:var(--cyan);font-weight:700}
.kj{color:var(--muted);font-family:var(--mono);font-size:clamp(11px,1.1vw,13px)}
.step{opacity:0;transform:translateY(14px)}.slide.active .step{opacity:1;transform:none;transition:opacity .6s,transform .6s}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:clamp(28px,4vw,64px);align-items:center}
.grid2.tilt{grid-template-columns:1.05fr .95fr}.stack>*+*{margin-top:18px}
.cards{display:grid;gap:14px;margin-top:8px}
.c5{grid-template-columns:repeat(5,1fr)}.c4{grid-template-columns:repeat(4,1fr)}.c3{grid-template-columns:repeat(3,1fr)}
.card{border:1px solid var(--line);border-radius:5px;padding:clamp(16px,1.5vw,24px);background:rgba(10,10,10,.85);position:relative}
.card .ix{font-family:var(--mono);font-size:11px;color:var(--muted)}
.card .gly{font-family:var(--mono);font-size:clamp(22px,2.4vw,32px);color:var(--c,var(--cyan));font-weight:700;margin:8px 0 6px}
.card h4{font-weight:600;font-size:clamp(15px,1.5vw,21px);color:var(--ink)}
.card .role{font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--c,var(--cyan));margin-top:3px}
.card p{font-family:var(--mono);font-size:clamp(11px,1.05vw,13px);line-height:1.55;color:var(--muted);margin-top:10px}
.card .edge{position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--c,var(--cyan))}
.panel{border:1px solid var(--line);border-radius:6px;padding:clamp(20px,2.4vw,34px);background:rgba(10,10,10,.85)}
.panel.jec{background:rgba(242,240,216,.04);border-color:rgba(242,240,216,.22)}
.panel h3{font-weight:500;font-size:clamp(20px,2.2vw,30px);color:var(--ink)}
.panel .tag{font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase}
ul.ticks{list-style:none}
ul.ticks li{font-family:var(--mono);font-size:clamp(12.5px,1.3vw,15.5px);line-height:1.5;color:var(--ink);padding-left:26px;position:relative;margin-top:14px}
ul.ticks li::before{content:"\\2192";position:absolute;left:0;color:var(--cyan)}
ul.ticks.g li::before{color:var(--accent)}ul.ticks.gold li::before{color:var(--gold)}
.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);margin-top:26px}
.metric{background:var(--bg);padding:clamp(16px,2vw,26px)}
.metric .v{font-size:clamp(28px,3.6vw,52px);line-height:1;color:var(--cyan)}
.metric .v em{font-style:italic;color:var(--accent)}
.metric .l{font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-top:10px}
.video{position:relative;width:100%;aspect-ratio:16/9;border:1px solid var(--line);border-radius:6px;overflow:hidden;background:rgba(10,10,10,.8)}
.video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.lockup{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.lockup img{display:block;width:auto;height:auto;object-fit:contain;flex-shrink:0}
.lockup img.jec{max-height:clamp(54px,8vw,96px);max-width:min(340px,42vw)}
.lockup img.ehu{max-height:clamp(44px,6vw,72px);max-width:min(280px,36vw)}
.lockup .for{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);line-height:1.7}
.lockup .for b{color:var(--ehu);display:block;font-weight:500}
.credit{display:flex;flex-wrap:wrap;gap:8px 26px;font-family:var(--mono);font-size:clamp(11px,1.1vw,13px);letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.credit b{color:var(--cyan)}
.ui{position:fixed;z-index:50;font-family:var(--mono)}
.dots{bottom:clamp(22px,3vw,40px);left:50%;transform:translateX(-50%);display:flex;gap:8px}
body.notes-open .dots{bottom:clamp(130px,19vh,190px)}
.dots button{width:8px;height:8px;border-radius:50%;border:0;background:var(--muted2);cursor:pointer;padding:0}
.dots button.on{background:var(--accent);width:22px;border-radius:5px}
.zones{position:fixed;left:0;right:0;top:clamp(56px,7.5vw,72px);bottom:clamp(48px,6.5vw,64px);z-index:20;display:flex;pointer-events:none}.zones span{flex:1;cursor:pointer;pointer-events:auto}.zones span:first-child{flex:0 0 30%}
.hint{position:fixed;right:clamp(22px,3vw,40px);bottom:clamp(54px,6vw,84px);z-index:50;font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted2)}
body.notes-open .hint{bottom:clamp(140px,20vh,200px)}
.notes-panel{position:fixed;left:0;right:0;bottom:0;z-index:60;background:rgba(0,0,0,.94);border-top:1px solid var(--line);padding:14px clamp(40px,6.5vw,104px) 18px;transform:translateY(100%);transition:transform .35s;font-family:var(--mono)}
.notes-panel.open{transform:translateY(0)}
.notes-panel h3{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--accent);margin-bottom:8px}
.notes-panel p{font-size:clamp(12px,1.2vw,14px);line-height:1.55;color:var(--ink);max-width:90ch}
.notes-panel .time{color:var(--muted);margin-right:8px}
@media(max-width:760px){.c5,.c4{grid-template-columns:repeat(2,1fr)}.c3{grid-template-columns:1fr}.grid2,.grid2.tilt{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="deck" id="deck">
"""

TAIL = """
  <div class="bar top">
    <span class="brand" data-i18n="meta.brand">XYLEM \u00d7 JEC26</span>
    <div class="bar-right">
      <button class="notes-btn" id="notesBtn" type="button">N \u00b7 Notes</button>
      <div class="lang"><button type="button" data-lang="en" class="on">EN</button><button type="button" data-lang="es">ES</button></div>
      <span id="secLabel">Title</span>
    </div>
  </div>
  <div class="bar bot">
    <span data-i18n="meta.barTitle">Biomimicry & Agentic AI for Critical Economics</span>
    <span><span id="cur">01</span> / <span id="tot">16</span></span>
  </div>
  <div class="pageprog" id="prog"></div>
</div>
<div class="zones"><span id="zPrev"></span><span id="zNext"></span></div>
<div class="ui dots" id="dots"></div>
<div class="hint" data-i18n="meta.hint">\u2190 \u2192 to navigate \u00b7 F fullscreen \u00b7 P print/PDF \u00b7 N speaker notes</div>
<div class="notes-panel" id="notesPanel"><h3 data-i18n="ui.notesTitle">15-min speaker notes</h3><p id="notesText"></p></div>
<script src="jec26-deck-i18n.js"></script>
<script>
(function(){
  const I=window.JEC26_I18N; let lang=localStorage.getItem('jec26-lang')||'en';
  const slides=[...document.querySelectorAll('.slide')], tot=slides.length, dotsWrap=document.getElementById('dots');
  document.getElementById('tot').textContent=String(tot).padStart(2,'0');
  let i=0, notesOpen=false;
  slides.forEach((_,n)=>{const b=document.createElement('button');b.onclick=()=>go(n);dotsWrap.appendChild(b);});
  const dots=[...dotsWrap.children];
  function t(path){const p=path.split('.');let o=I[lang];for(const k of p){if(o==null)return '';o=Array.isArray(o)&&/^\\d+$/.test(k)?o[+k]:o[k];}return o!=null?o:'';}
  function secName(n){const s=I[lang].secs;return Array.isArray(s)?(s[n]||''):'';}
  function applyLang(){
    document.documentElement.lang=lang; document.title=t('meta.title');
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k=el.getAttribute('data-i18n'), v=t(k); if(!v)return;
      if(v.includes('<')) el.innerHTML=v; else el.textContent=v;
    });
    document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.lang===lang));
    document.getElementById('notesBtn').textContent=(lang==='es'?'N \u00b7 Notas':'N \u00b7 Notes');
    updateNotes(); localStorage.setItem('jec26-lang',lang);
  }
  function updateNotes(){document.getElementById('secLabel').textContent=secName(i);document.getElementById('notesText').innerHTML='<span class="time">Slide '+(i+1)+'</span>'+(t('notes.'+i)||'');}
  function go(n){i=Math.max(0,Math.min(tot-1,n));slides.forEach((s,k)=>s.classList.toggle('active',k===i));dots.forEach((d,k)=>d.classList.toggle('on',k===i));document.getElementById('cur').textContent=String(i+1).padStart(2,'0');document.getElementById('prog').style.width=((i+1)/tot*100)+'%';updateNotes();history.replaceState(null,'','#'+(i+1));}
  function next(){go(i+1)} function prev(){go(i-1)}
  document.getElementById('zNext').onclick=next; document.getElementById('zPrev').onclick=prev;
  document.querySelectorAll('.lang button').forEach(b=>b.onclick=e=>{e.stopPropagation();lang=b.dataset.lang;applyLang();});
  document.getElementById('notesBtn').onclick=e=>{e.stopPropagation();notesOpen=!notesOpen;document.getElementById('notesPanel').classList.toggle('open',notesOpen);document.body.classList.toggle('notes-open',notesOpen);document.getElementById('notesBtn').classList.toggle('on',notesOpen);};
  addEventListener('keydown',e=>{
    if(['ArrowRight','ArrowDown',' ','PageDown'].includes(e.key)){e.preventDefault();next();}
    else if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){e.preventDefault();prev();}
    else if(e.key==='Home')go(0); else if(e.key==='End')go(tot-1);
    else if(e.key==='f'||e.key==='F'){if(!document.fullscreenElement)document.documentElement.requestFullscreen?.();else document.exitFullscreen?.();}
    else if(e.key==='p'||e.key==='P')window.print();
    else if(e.key==='n'||e.key==='N')document.getElementById('notesBtn').click();
  });
  let sx=null; addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
  addEventListener('touchend',e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50){dx<0?next():prev();}sx=null;},{passive:true});
  applyLang(); go((parseInt(location.hash.replace('#',''))||1)-1);
})();
</script>
</body>
</html>
"""

# Slide bodies use data-i18n keys; default EN text as fallback
SLIDES = """
  <section class="slide" data-sec="Title">
    <svg class="veins" viewBox="0 0 1280 720" aria-hidden="true"><g stroke="rgba(168,164,148,.12)" stroke-width="1.2"><path d="M180 760 C180 520 120 420 200 240"/><path d="M620 780 C620 520 620 220"/><path d="M1060 760 C1060 520 1040 240"/></g></svg>
    <div class="inner stack">
      <div class="step"><span class="eyebrow" data-i18n="s1.eye">A collaboration proposal \u00b7 Xylem \u00d7 JEC26</span></div>
      <h1 class="step" data-i18n="s1.h1">Biomimicry &amp; <span class="it">Agentic AI</span><br>for Critical Economics &amp; Development</h1>
      <p class="lead step" style="max-width:52ch" data-i18n="s1.lead">Reading nature as <b>model, measure &amp; mentor</b> \u2014 and turning its solutions into algorithms for economies that regenerate.</p>
      <div class="step" style="margin-top:14px"><div class="credit"><span data-i18n="s1.credit">MSc. Felipe L\u00f3pez Mantilla</span><span><b data-i18n="s1.inst">UAL \u00b7 Creative Computing Institute</b></span></div></div>
      <div class="step" style="margin-top:18px"><div class="lockup">
        <img class="jec" src="JEC26_branding/jec26-wordmark.png" alt="JEC26">
        <img class="ehu" src="JEC26_branding/ehu-facultad-bizkaia.png" alt="EHU Facultad de Econom\u00eda y Empresa">
        <span class="for"><span data-i18n="s1.for">Prepared for</span><b data-i18n="s1.forB">XX Jornadas de Econom\u00eda Cr\u00edtica \u00b7 Bilbao 2026</b><span data-i18n="s1.forSub">EHU Bizkaia \u00b7 Facultad de Econom\u00eda y Empresa</span></span>
      </div></div>
    </div>
  </section>
  <section class="slide" data-sec="Premise">
    <div class="inner"><span class="eyebrow step" data-i18n="s2.eye">The premise</span>
      <h2 class="step" style="margin-top:24px;max-width:24ch" data-i18n="s2.h2">Nature has run distributed optimisation for <em>3.8 billion years.</em></h2>
      <p class="lead step" style="margin-top:26px;max-width:46ch" data-i18n="s2.lead">Xylem turns those solutions into working algorithms. This deck asks a simple question: <b>how can they serve critical economics and the developing world?</b></p>
    </div>
  </section>
  <section class="slide" data-sec="The fit">
    <div class="inner"><span class="eyebrow gold step" data-i18n="s3.eye">Where JEC26 &amp; Xylem already meet</span>
      <h2 class="step" style="margin:18px 0 30px" data-i18n="s3.h2">One shared ground: <span class="g">Nature's Intelligence</span></h2>
      <div class="grid2 step"><div class="panel jec"><div class="tag" style="color:var(--ehu)" data-i18n="s3.jecTag">JEC26 \u00b7 Bilbao 2026</div><h3 style="margin:10px 0 14px" data-i18n="s3.jecH">Critical economics for a world in transition</h3>
        <ul class="ticks"><li data-i18n="s3.jec1">Macro policy, industrial strategy &amp; development</li><li data-i18n="s3.jec2">Technology, AI &amp; labour in the Global South</li><li data-i18n="s3.jec3">Ecology, bioeconomy &amp; Amazon corridors</li><li data-i18n="s3.jec4"><b>Xylem of Society</b> \u00b7 growth on nature proxies &amp; AI</li></ul></div>
        <div class="panel"><div class="tag" style="color:var(--cyan)" data-i18n="s3.xyTag">Xylem \u00b7 Practice</div><h3 style="margin:10px 0 14px" data-i18n="s3.xyH">Biomimicry + Agentic AI for task &amp; system optimisation</h3>
        <ul class="ticks g"><li data-i18n="s3.xy1">Nature read as model, measure &amp; mentor</li><li data-i18n="s3.xy2">Biomimetic layers as interchangeable policies</li><li data-i18n="s3.xy3">Agentic AI rehearsed in 3D simulation</li><li data-i18n="s3.xy4"><b>CHAGRA-NET</b> \u00b7 Amazon corridor \u00b7 bioeconomy</li></ul></div></div>
      <p class="body step" style="margin-top:22px;color:var(--muted)" data-i18n="s3.foot">JEC26 already convenes critical economics across macro, development and ecology \u2014 Xylem offers a <b>computational proxy layer</b> for those debates.</p>
    </div>
  </section>
  <section class="slide" data-sec="What is Xylem">
    <div class="inner grid2 tilt"><div class="stack"><span class="eyebrow step" data-i18n="s4.eye">What is Xylem</span>
      <h2 class="step" style="font-size:clamp(26px,3.6vw,46px)" data-i18n="s4.h2">Agents that move like <em>nature moves</em></h2>
      <p class="body step" data-i18n="s4.body">A deterministic 3D proxy where agents are governed by interchangeable <b>biomimetic layers</b>. A Python decision bridge calls a language model for staging and routing choices.</p>
      <div class="metrics step"><div class="metric"><div class="v">5</div><div class="l" data-i18n="s4.m1">biomimetic layers</div></div><div class="metric"><div class="v">1550</div><div class="l" data-i18n="s4.m2">simulation runs</div></div><div class="metric"><div class="v"><em>3</em></div><div class="l" data-i18n="s4.m3">policies per layer</div></div></div></div>
      <div class="step"><div class="video"><iframe src="https://www.youtube-nocookie.com/embed/CtQIhM4RpXQ" title="Xylem" allowfullscreen loading="lazy"></iframe></div>
      <p class="kj" style="text-align:center;margin-top:14px" data-i18n="s4.vidSub">Level 1 \u00b7 Seed 33333 \u00b7 a lattice of identical arenas, one decision policy each</p></div>
    </div>
  </section>
  <section class="slide" data-sec="The layers">
    <div class="inner"><span class="eyebrow step" data-i18n="s5.eye">The biomimetic layers</span><h2 class="step" style="margin:16px 0 28px" data-i18n="s5.h2">Five ways to <em>solve the same task</em></h2>
      <div class="cards c5 step">
        <div class="card" style="--c:#c7d0e2"><span class="edge"></span><div class="ix">001</div><h4>Human</h4><div class="role" data-i18n="s5.c1r">benchmark</div><p data-i18n="s5.c1d">How a person would reason \u2014 the reference everything is measured against.</p></div>
        <div class="card" style="--c:#7ce9e6"><span class="edge"></span><div class="ix">010</div><h4>Dijkstra</h4><div class="role" data-i18n="s5.c2r">shortest path</div><p data-i18n="s5.c2d">Pure efficiency between nodes \u2014 blind to staging &amp; externalities.</p></div>
        <div class="card" style="--c:#48dbe6"><span class="edge"></span><div class="ix">011</div><h4>Ants</h4><div class="role" data-i18n="s5.c3r">colony intelligence</div><p data-i18n="s5.c3d">Pheromone trails &amp; reciprocity \u2014 decentralised coordination.</p></div>
        <div class="card" style="--c:#c8ff2e"><span class="edge"></span><div class="ix">100</div><h4>Physarum</h4><div class="role" data-i18n="s5.c4r">slime networks</div><p data-i18n="s5.c4d">Grows near-optimal, resilient network topologies.</p></div>
        <div class="card" style="--c:#f4c542"><span class="edge"></span><div class="ix">101</div><h4>River / Steiner</h4><div class="role" data-i18n="s5.c5r">flow networks</div><p data-i18n="s5.c5d">Branching geometries that minimise total network cost.</p></div>
      </div>
      <p class="body step" style="margin-top:26px" data-i18n="s5.foot">The same switch \u2014 swap the layer, keep the task \u2014 lets us test <b>different development strategies</b> on identical ground.</p>
    </div>
  </section>
  <section class="slide" data-sec="Transfer">
    <div class="inner"><span class="eyebrow g step" data-i18n="s6.eye">From biology to economics</span><h2 class="step" style="margin:16px 0 28px" data-i18n="s6.h2">Nature proxies are <em>transferable algorithms</em></h2>
      <div class="cards c4 step">
        <div class="card" style="--c:#48dbe6"><h4>Ants</h4><div class="role" data-i18n="s6.c1r">\u2192 coordination</div><p data-i18n="s6.c1d">Pheromones = decentralised information. Maps to price signals, technology diffusion, market discovery.</p></div>
        <div class="card" style="--c:#c8ff2e"><h4>Physarum</h4><div class="role" data-i18n="s6.c2r">\u2192 infrastructure</div><p data-i18n="s6.c2d">Reproduces efficient rail &amp; grid layouts. Maps to supply chains and resilient infrastructure.</p></div>
        <div class="card" style="--c:#f4c542"><h4>River / Steiner</h4><div class="role" data-i18n="s6.c3r">\u2192 distribution</div><p data-i18n="s6.c3d">Connects many-to-many at least cost. Maps to logistics and value flow.</p></div>
        <div class="card" style="--c:#7ce9e6"><h4>Dijkstra</h4><div class="role" data-i18n="s6.c4r">\u2192 baseline</div><p data-i18n="s6.c4d">The efficiency-only benchmark. Useful because it ignores care and externalities.</p></div>
      </div>
    </div>
  </section>
  <section class="slide" data-sec="Mapping to JEC26">
    <div class="inner"><span class="eyebrow gold step" data-i18n="s7.eye">Mapping onto JEC26 research streams</span><h2 class="step" style="margin:16px 0 28px" data-i18n="s7.h2">A method for <span class="g">each frontier</span></h2>
      <div class="cards c3 step">
        <div class="panel"><div class="tag" style="color:var(--cyan)" data-i18n="s7.p1t">Macro &amp; policy</div><h3 style="margin:8px 0 12px" data-i18n="s7.p1h">Industrial strategy &amp; coordination</h3><p class="body" data-i18n="s7.p1d">Simulation as a rehearsal sandbox \u2014 test policies thousands of times before they touch a person or a place.</p></div>
        <div class="panel"><div class="tag" style="color:var(--accent)" data-i18n="s7.p2t">Development</div><h3 style="margin:8px 0 12px" data-i18n="s7.p2h">Growth in the Global South</h3><p class="body" data-i18n="s7.p2d">Agent-based + ML models of technology diffusion \u2014 finding bottlenecks, leapfrog points and green windows.</p></div>
        <div class="panel jec"><div class="tag" style="color:var(--ehu)" data-i18n="s7.p3t">Ecology &amp; bioeconomy</div><h3 style="margin:8px 0 12px" data-i18n="s7.p3h">Amazon corridors &amp; regeneration</h3><p class="body" data-i18n="s7.p3d">Biomimicry pipelines feeding CHAGRA-NET \u2014 principles, not appearances; growth that regenerates.</p></div>
      </div>
    </div>
  </section>
  <section class="slide" data-sec="AI/ML diffusion">
    <div class="inner grid2 tilt"><div class="stack"><span class="eyebrow step" data-i18n="s8.eye">AI &amp; ML applied \u00b7 01</span><h2 class="step" style="font-size:clamp(26px,3.6vw,46px)" data-i18n="s8.h2">Modelling <em>technology diffusion</em></h2><p class="body step" data-i18n="s8.body">Represent adopters as heterogeneous agents; let an LLM decision bridge reason about each actor's context.</p></div>
      <div class="step"><ul class="ticks"><li data-i18n="s8.t1"><b>Agents</b> \u2014 firms, regions, institutions</li><li data-i18n="s8.t2"><b>ML</b> \u2014 learn diffusion parameters from trade &amp; patent data</li><li data-i18n="s8.t3"><b>Proxy</b> \u2014 ant-colony information flow surfaces adoption thresholds</li><li data-i18n="s8.t4"><b>Output</b> \u2014 diffusion maps &amp; predicted windows of opportunity</li></ul></div>
    </div>
  </section>
  <section class="slide" data-sec="AI/ML policy">
    <div class="inner grid2 tilt"><div class="stack"><span class="eyebrow g step" data-i18n="s9.eye">AI &amp; ML applied \u00b7 02</span><h2 class="step" style="font-size:clamp(26px,3.6vw,46px)" data-i18n="s9.h2">Industrial policy as a <span class="g">sandbox</span></h2><p class="body step" data-i18n="s9.body">Seed a policy, run it thousands of times, and read collisions as proxies for <b>misallocation and coordination failure</b>.</p></div>
      <div class="step"><ul class="ticks g"><li data-i18n="s9.t1"><b>Rehearse</b> green windows before committing capital</li><li data-i18n="s9.t2"><b>Compare</b> strategies on identical ground</li><li data-i18n="s9.t3"><b>Optimise</b> for resilience, not throughput alone</li><li data-i18n="s9.t4"><b>Feed</b> JEC26 workshops &amp; working papers with evidence</li></ul></div>
    </div>
  </section>
  <section class="slide" data-sec="AI/ML biodiversity">
    <div class="inner grid2 tilt"><div class="stack"><span class="eyebrow gold step" data-i18n="s10.eye">AI &amp; ML applied \u00b7 03</span><h2 class="step" style="font-size:clamp(26px,3.6vw,46px)" data-i18n="s10.h2">Biodiversity \u2192 <em>innovation</em></h2><p class="body step" data-i18n="s10.body">A machine-readable pipeline from nature to industry \u2014 extending the <b>chagra</b> as a model for cultivated knowledge.</p></div>
      <div class="step"><ul class="ticks gold"><li data-i18n="s10.t1"><b>Catalogue</b> \u2014 structured library of biological strategies</li><li data-i18n="s10.t2"><b>Extract</b> \u2014 principles, not appearances</li><li data-i18n="s10.t3"><b>Match</b> \u2014 ML pairs principles with industrial challenges</li><li data-i18n="s10.t4"><b>Ground</b> \u2014 CHAGRA-NET corridor as a living LatAm testbed</li></ul></div>
    </div>
  </section>
  <section class="slide" data-sec="Governance">
    <div class="inner"><span class="eyebrow step" data-i18n="s11.eye">Method &amp; governance</span><h2 class="step" style="margin:16px 0 28px" data-i18n="s11.h2">Model \u00b7 Measure \u00b7 Mentor \u2014 as an <em>ML governance frame</em></h2>
      <div class="cards c3 step">
        <div class="card" style="--c:#48dbe6"><span class="edge"></span><h4>Model</h4><p data-i18n="s11.c1d">Structure ML on the form of living networks \u2014 distributed, redundant, adaptive.</p></div>
        <div class="card" style="--c:#c8ff2e"><span class="edge"></span><h4>Measure</h4><p data-i18n="s11.c2d">Benchmark against ecological resilience \u2014 not GDP or throughput alone.</p></div>
        <div class="card" style="--c:#f4c542"><span class="edge"></span><h4>Mentor</h4><p data-i18n="s11.c3d">Biomimetic governance: assistance not dependency, cooperation not domination.</p></div>
      </div>
      <p class="body step" style="margin-top:24px;color:var(--muted)" data-i18n="s11.foot">Optimisation that does not eclipse meaning \u2014 the ethical floor is set by nature, not bolted on afterwards.</p>
    </div>
  </section>
  <section class="slide" data-sec="Architecture">
    <div class="inner"><span class="eyebrow g step" data-i18n="s12.eye">How it fits together</span><h2 class="step" style="margin:14px 0 22px" data-i18n="s12.h2">A reference <em>architecture</em></h2>
      <div class="step"><svg viewBox="0 0 1180 300" style="width:100%;height:auto" aria-hidden="true" font-family="JetBrains Mono,monospace">
        <defs><linearGradient id="ag" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c8ff2e"/><stop offset="1" stop-color="#48dbe6"/></linearGradient><marker id="mk" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#48dbe6"/></marker></defs>
        <rect x="10" y="60" width="240" height="180" rx="6" fill="rgba(10,10,10,.85)" stroke="rgba(242,240,216,.25)"/>
        <text x="130" y="48" text-anchor="middle" fill="#e8e4d0" font-size="14" data-i18n="arch.data">DATA</text>
        <text x="34" y="100" fill="#f2f0d8" font-size="13" data-i18n="arch.d1">\u00b7 biodiversity &amp; strategies</text>
        <text x="34" y="128" fill="#f2f0d8" font-size="13" data-i18n="arch.d2">\u00b7 trade &amp; patents</text>
        <text x="34" y="156" fill="#f2f0d8" font-size="13" data-i18n="arch.d3">\u00b7 technology &amp; firms</text>
        <text x="34" y="184" fill="#f2f0d8" font-size="13" data-i18n="arch.d4">\u00b7 policy &amp; territory</text>
        <rect x="330" y="60" width="240" height="180" rx="6" fill="rgba(10,10,10,.85)" stroke="rgba(200,255,46,.35)"/>
        <text x="450" y="48" text-anchor="middle" fill="#c8ff2e" font-size="14" data-i18n="arch.prox">NATURE PROXIES</text>
        <text x="354" y="100" fill="#f2f0d8" font-size="13" data-i18n="arch.p1">Ants \u2014 coordination</text>
        <text x="354" y="128" fill="#f2f0d8" font-size="13" data-i18n="arch.p2">Physarum \u2014 networks</text>
        <text x="354" y="156" fill="#f2f0d8" font-size="13" data-i18n="arch.p3">Steiner \u2014 distribution</text>
        <text x="354" y="184" fill="#f2f0d8" font-size="13" data-i18n="arch.p4">Dijkstra \u2014 baseline</text>
        <rect x="650" y="60" width="240" height="180" rx="6" fill="rgba(10,10,10,.85)" stroke="rgba(72,219,230,.4)"/>
        <text x="770" y="48" text-anchor="middle" fill="#48dbe6" font-size="14" data-i18n="arch.ai">AGENTIC AI</text>
        <text x="674" y="100" fill="#f2f0d8" font-size="13" data-i18n="arch.a1">\u00b7 multi-agent sim</text>
        <text x="674" y="128" fill="#f2f0d8" font-size="13" data-i18n="arch.a2">\u00b7 LLM decision bridge</text>
        <text x="674" y="156" fill="#f2f0d8" font-size="13" data-i18n="arch.a3">\u00b7 run \u00d7 1000s</text>
        <text x="674" y="184" fill="#f2f0d8" font-size="13" data-i18n="arch.a4">\u00b7 ML calibration</text>
        <rect x="970" y="60" width="200" height="180" rx="6" fill="rgba(244,197,66,.08)" stroke="rgba(244,197,66,.5)"/>
        <text x="1070" y="48" text-anchor="middle" fill="#f4c542" font-size="14" data-i18n="arch.out">OUTPUTS</text>
        <text x="994" y="100" fill="#f2f0d8" font-size="13" data-i18n="arch.o1">\u00b7 diffusion maps</text>
        <text x="994" y="128" fill="#f2f0d8" font-size="13" data-i18n="arch.o2">\u00b7 policy scenarios</text>
        <text x="994" y="156" fill="#f2f0d8" font-size="13" data-i18n="arch.o3">\u00b7 resilience scores</text>
        <text x="994" y="184" fill="#f2f0d8" font-size="13" data-i18n="arch.o4">\u00b7 JEC26 papers</text>
        <g stroke="url(#ag)" stroke-width="2" fill="none" marker-end="url(#mk)"><line x1="252" y1="150" x2="328" y2="150"/><line x1="572" y1="150" x2="648" y2="150"/><line x1="892" y1="150" x2="968" y2="150"/></g>
      </svg></div>
    </div>
  </section>
  <section class="slide" data-sec="Pilot">
    <div class="inner"><span class="eyebrow step" data-i18n="s13.eye">A concrete first pilot</span><h2 class="step" style="margin:14px 0 24px" data-i18n="s13.h2">Green industrial-policy windows for a <span class="g">LatAm corridor</span></h2>
      <div class="grid2 step"><div class="panel"><div class="tag" style="color:var(--cyan)" data-i18n="s13.inTag">Inputs</div><ul class="ticks"><li data-i18n="s13.in1">Industrial-policy &amp; FDI datasets (LatAm / EU)</li><li data-i18n="s13.in2">Biodiversity &amp; bioeconomy strategies</li><li data-i18n="s13.in3">CHAGRA-NET corridor geography (Leticia \u2192 Bel\u00e9m)</li></ul></div>
      <div class="panel jec"><div class="tag" style="color:var(--gold)" data-i18n="s13.outTag">Outputs</div><ul class="ticks gold"><li data-i18n="s13.out1">Simulated green-window scenarios &amp; rankings</li><li data-i18n="s13.out2">Resilience &amp; coordination scores per strategy</li><li data-i18n="s13.out3">A JEC26 workshop paper + Bilbao presentation</li></ul></div></div>
    </div>
  </section>
  <section class="slide" data-sec="Roadmap">
    <div class="inner"><span class="eyebrow g step" data-i18n="s14.eye">How we'd get there</span><h2 class="step" style="margin:14px 0 28px" data-i18n="s14.h2">A four-phase <em>roadmap</em></h2>
      <div class="cards c4 step">
        <div class="card" style="--c:#48dbe6"><div class="ix" data-i18n="s14.p1i">PHASE 1 \u00b7 ~8 wks</div><h4 data-i18n="s14.p1h">Frame &amp; data</h4><p data-i18n="s14.p1d">Scope a problem with JEC26 / EHU; assemble datasets; define resilience metrics.</p></div>
        <div class="card" style="--c:#c8ff2e"><div class="ix" data-i18n="s14.p2i">PHASE 2 \u00b7 ~12 wks</div><h4 data-i18n="s14.p2h">Proxy &amp; sim</h4><p data-i18n="s14.p2d">Build the proxy library and the agentic simulation engine.</p></div>
        <div class="card" style="--c:#f4c542"><div class="ix" data-i18n="s14.p3i">PHASE 3 \u00b7 ~8 wks</div><h4 data-i18n="s14.p3h">ML calibration</h4><p data-i18n="s14.p3d">Fit to real data; validate against historical outcomes.</p></div>
        <div class="card" style="--c:#f2f0d8"><div class="ix" data-i18n="s14.p4i">PHASE 4 \u00b7 ongoing</div><h4 data-i18n="s14.p4h">Scenarios &amp; paper</h4><p data-i18n="s14.p4d">Generate policy scenarios; publish; present at JEC26 Bilbao.</p></div>
      </div>
    </div>
  </section>
  <section class="slide" data-sec="The practice">
    <div class="inner"><span class="eyebrow gold step" data-i18n="s15.eye">The practice behind the proposal</span><h2 class="step" style="margin:14px 0 26px" data-i18n="s15.h2">One root system, many <em>branches</em></h2>
      <div class="cards c4 step">
        <div class="card" style="--c:#48dbe6"><h4>Xylem</h4><div class="role" data-i18n="s15.c1r">research \u00b7 simulation</div><p data-i18n="s15.c1d">Biomimicry + Agentic AI for task optimisation in 3D.</p></div>
        <div class="card" style="--c:#7ce9e6"><h4>The Symbiotic Code</h4><div class="role" data-i18n="s15.c2r">writing \u00b7 CRC Press</div><p data-i18n="s15.c2d">Principles for human\u2013machine\u2013nature co-evolution.</p></div>
        <div class="card" style="--c:#c8ff2e"><h4>CHAGRA-NET</h4><div class="role" data-i18n="s15.c3r">platform \u00b7 regenerative</div><p data-i18n="s15.c3d">A solarpunk Amazon corridor \u2014 biomimicry as governance.</p></div>
        <div class="card" style="--c:#f4c542"><h4>Xylem of Society</h4><div class="role" data-i18n="s15.c4r">economics \u00b7 provocation</div><p data-i18n="s15.c4d">Growth &amp; trade built on nature proxies &amp; AI.</p></div>
      </div>
      <p class="kj step" style="margin-top:24px" data-i18n="s15.links">xylem \u00b7 xylem-of-society \u00b7 chagra-net.vercel.app \u00b7 jec2026.com</p>
    </div>
  </section>
  <section class="slide" data-sec="Let's build">
    <svg class="veins" viewBox="0 0 1280 720" aria-hidden="true"><g stroke="rgba(168,164,148,.12)" stroke-width="1.6"><path d="M200 760 C200 520 140 420 240 220"/><path d="M1040 760 C1040 520 1100 420 1000 220"/></g></svg>
    <div class="inner stack"><span class="eyebrow g step" data-i18n="s16.eye">Let's collaborate</span>
      <h1 class="step" style="font-size:clamp(40px,7vw,96px)" data-i18n="s16.h1">Grow what <span class="it" style="font-style:italic;color:var(--accent)">regenerates.</span></h1>
      <p class="lead step" style="max-width:46ch" data-i18n="s16.lead">An open invitation to bring biomimicry and agentic AI into critical economics \u2014 showcasing at <b>London Tech Week</b> and <b>EHU Bilbao</b> for JEC26.</p>
      <div class="step" style="margin-top:18px"><div class="lockup"><img class="jec" src="JEC26_branding/jec26-wordmark.png" alt="JEC26">
        <span class="for"><span data-i18n="s16.credit">MSc. Felipe L\u00f3pez Mantilla</span><b data-i18n="s16.inst">UAL \u00b7 Creative Computing Institute</b><span data-i18n="s16.mentors">Mentors \u00b7 Tim Smith &amp; Hernando Bernal \u00b7 jec2026.com \u2197</span></span></div></div>
    </div>
  </section>
"""

if __name__ == "__main__":
    OUT.write_text(HEAD + SLIDES + TAIL, encoding="utf-8")
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")
