// ════════════════════════════════
// NAVIGATION — JS-only, no href hash
// ════════════════════════════════
function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navH = document.querySelector('nav').offsetHeight;
  const y = el.getBoundingClientRect().top + window.pageYOffset - navH - 4;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function closeMob() {
  document.getElementById('mobMenu').classList.remove('open');
}

document.getElementById('hamburger').onclick = () => {
  document.getElementById('mobMenu').classList.toggle('open');
};

// Active nav highlight
const secIds = ['home','about','skills','projects','experience','education','riddle','connect'];
const navAs = document.querySelectorAll('.nav-links a');

function updateNav() {
  const navH = document.querySelector('nav').offsetHeight;
  let cur = 'home';

  secIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - navH - 10) cur = id;
  });

  navAs.forEach(a => {
    const onclick = a.getAttribute('onclick') || '';
    a.classList.toggle('active', onclick.includes("'" + cur + "'"));
  });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ════════════════════════════════
// LINK OPENERS
// ════════════════════════════════
function openLink(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

function openContact(type, value) {
  window.location.href = type + ':' + value;
}

/* ✅ NEW FUNCTION FOR OFFER LETTER */
function openPDF(file) {
  window.open(file, '_blank', 'noopener,noreferrer');
}

// ════════════════════════════════
// CURSOR
// ════════════════════════════════
const cDot = document.getElementById('cDot');
const cRing = document.getElementById('cRing');
let mx = -200, my = -200, rx = -200, ry = -200, lx = -200, ly = -200;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cDot.style.left = mx + 'px'; cDot.style.top = my + 'px';
  const spd = Math.hypot(mx - lx, my - ly);
  if (spd > 5) {
    const t = document.createElement('div');
    t.className = 'ctrail';
    const sz = Math.min(spd * 0.35, 7);
    t.style.cssText = `left:${mx}px;top:${my}px;width:${sz}px;height:${sz}px;background:${spd > 16 ? 'var(--accent2)' : 'var(--accent)'};`;
    document.body.appendChild(t);
    t.addEventListener('animationend', () => t.remove());
  }
  lx = mx; ly = my;
});

const hoverSel = 'a,button,.proj-card,.sk-cat,.cc-card,.edu-card';
document.addEventListener('mouseover', e => {
  if (e.target.closest(hoverSel)) {
    cDot.style.cssText = `left:${mx}px;top:${my}px;width:16px;height:16px;background:var(--accent3);box-shadow:0 0 18px var(--accent3),0 0 38px rgba(244,114,182,.6);border-radius:50%;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .15s,height .15s,background .15s,box-shadow .15s`;
    cRing.style.width = '52px'; cRing.style.height = '52px';
    cRing.style.borderColor = 'rgba(244,114,182,.7)';
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.closest(hoverSel)) {
    cDot.style.cssText = `left:${mx}px;top:${my}px;width:9px;height:9px;background:var(--accent);box-shadow:0 0 14px var(--accent),0 0 30px rgba(167,139,250,.55);border-radius:50%;pointer-events:none;z-index:99999;transform:translate(-50%,-50%);transition:width .15s,height .15s,background .15s,box-shadow .15s`;
    cRing.style.width = '34px'; cRing.style.height = '34px';
    cRing.style.borderColor = 'rgba(167,139,250,.55)';
  }
});

(function animRing() {
  rx += (mx - rx) * 0.11; ry += (my - ry) * 0.11;
  cRing.style.left = rx + 'px'; cRing.style.top = ry + 'px';
  requestAnimationFrame(animRing);
})();

// ════════════════════════════════
// TYPING EFFECT
// ════════════════════════════════
const typEl = document.getElementById('typingText');
const texts = ['AI/ML Developer','Data Analyst','Machine Learning Engineer','Deep Learning Enthusiast','Problem Solver','Prompt Engineer','AI Researcher & Innovator','Web Developer'];
let tIdx = 0, cIdx = 0, isDel = false;
function typeEffect() {
  const t = texts[tIdx];
  typEl.textContent = isDel ? t.substring(0, cIdx - 1) : t.substring(0, cIdx + 1);
  isDel ? cIdx-- : cIdx++;
  let spd = isDel ? 50 : 100;
  if (!isDel && cIdx === t.length) { spd = 2000; isDel = true; }
  else if (isDel && cIdx === 0) { isDel = false; tIdx = (tIdx + 1) % texts.length; spd = 500; }
  setTimeout(typeEffect, spd);
}
typeEffect();

// ════════════════════════════════
// RIDDLE
// ════════════════════════════════
const riddles = [
  { text: "I am not a pirate's map, yet I guide recruiters to the greatest treasure of all — me. What am I?", explanation: "A resume is your treasure map, leading directly to your value as a candidate." },
  { text: "I am no wizard's grimoire, yet every page carries a spell of my journey. What am I?", explanation: "A resume is like a grimoire — filled with pages of experience and skills that define your journey." }
];
const chosen = riddles[Math.floor(Math.random() * riddles.length)];
let revealed = ['_','_','_','_','_','_'];
document.getElementById('riddleText').textContent = chosen.text;
document.getElementById('riddleClue').textContent = revealed.join(' ');

function checkRiddleAnswer() {
  const val = document.getElementById('riddleAnswer').value.trim().toLowerCase();
  const fb = document.getElementById('riddleFeedback');
  const cl = document.getElementById('riddleClue');
  if (val === 'resume') {
    fb.textContent = '🎉 Correct! You\'ve unlocked my Resume!'; fb.className = 'ok';
    cl.style.cssText = 'font-size:14px;letter-spacing:0;color:var(--muted);font-weight:400;min-height:0';
    cl.textContent = chosen.explanation;
    document.getElementById('resumeLinkSection').innerHTML = '<a href="resume.pdf" target="_blank" class="res-link">📄 View My Resume</a>';
  } else {
    fb.textContent = '❌ Not quite! Here\'s a clue:'; fb.className = 'no';
    const hi = revealed.map((c,i) => c==='_'?i:null).filter(i=>i!==null);
    if (hi.length) { const ri = hi[Math.floor(Math.random()*hi.length)]; revealed[ri] = 'RESUME'[ri]; }
    document.getElementById('riddleClue').textContent = revealed.join(' ');
  }
}
document.getElementById('riddleAnswer').addEventListener('keypress', e => { if (e.key==='Enter') checkRiddleAnswer(); });

// ════════════════════════════════
// ROCKET HINT ANIMATION
// ════════════════════════════════
let rocketActive = false;
function launchRocket() {
  if (rocketActive) return;
  rocketActive = true;
  document.getElementById('hintBtn').disabled = true;

  // Create rocket
  const rk = document.createElement('div');
  rk.id = 'rocketEl';
  rk.textContent = '🚀';
  rk.style.cssText = 'position:fixed;font-size:58px;z-index:9999;pointer-events:none;top:55vh;left:-120px;transform:rotate(75deg);filter:drop-shadow(0 0 16px rgba(167,139,250,1)) drop-shadow(0 0 32px rgba(244,114,182,.8));';
  document.body.appendChild(rk);

  // Flame interval
  const flameInt = setInterval(() => spawnFlame(rk), 42);

  // Animate rocket: left → center (1.4s) → hold (0.6s) → exit right (1s)
  const cx = Math.round(window.innerWidth * 0.42);
  const halfH = Math.round(window.innerHeight * 0.43);

  rk.animate([
    { left:'-120px', top:'55vh', opacity:'0', transform:'rotate(75deg) scale(0.6)', offset:0 },
    { left:'-60px',  top:'54vh', opacity:'1', transform:'rotate(75deg) scale(1.0)', offset:0.05 },
    { left: cx+'px', top: halfH+'px', transform:'rotate(73deg) scale(1.08)',        offset:0.42 },
    { left: cx+'px', top: halfH+'px', transform:'rotate(73deg) scale(1.0)',         offset:0.60 },
    { left:'110vw',  top:'34vh', opacity:'1', transform:'rotate(75deg) scale(0.85)',offset:0.95 },
    { left:'110vw',  top:'34vh', opacity:'0', transform:'rotate(75deg) scale(0.7)', offset:1    }
  ], { duration: 3000, easing:'cubic-bezier(0.4,0,0.2,1)', fill:'forwards' });

  // At center: explosion + show panel
  setTimeout(() => {
    const rkRect = rk.getBoundingClientRect();
    starBurst(rkRect.left + rkRect.width/2, rkRect.top + rkRect.height/2);
    setTimeout(() => openHintPanel(), 200);
  }, 1260);

  // Cleanup
  setTimeout(() => {
    clearInterval(flameInt);
    rk.remove();
    rocketActive = false;
    document.getElementById('hintBtn').disabled = false;
  }, 3100);
}

function spawnFlame(el) {
  const r = el.getBoundingClientRect();
  if (!r || r.left < -80 || r.left > window.innerWidth + 80) return;
  const cols = ['#f472b6','#a78bfa','#fb923c','#fbbf24','#38bdf8','#ffffff'];
  const f = document.createElement('div');
  const sz = 3 + Math.random() * 9;
  const col = cols[Math.floor(Math.random() * cols.length)];
  f.style.cssText = `
    position:fixed;
    left:${r.left + r.width * 0.15 + (Math.random()-0.5)*12}px;
    top:${r.top + r.height * 0.55 + (Math.random()-0.5)*14}px;
    width:${sz}px;height:${sz}px;border-radius:50%;
    background:${col};box-shadow:0 0 ${sz*2.5}px ${col};
    pointer-events:none;z-index:9997;
    animation:flameDie ${0.22+Math.random()*0.32}s ease-out forwards;
  `;
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 550);
}

function starBurst(cx, cy) {
  const cols = ['#a78bfa','#38bdf8','#f472b6','#fbbf24','#fb923c','#ffffff','#4ade80'];
  // Particles
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    const angle = (i / 40) * Math.PI * 2;
    const dist = 55 + Math.random() * 200;
    const sz = 2.5 + Math.random() * 8;
    const col = cols[Math.floor(Math.random() * cols.length)];
    p.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;width:${sz}px;height:${sz}px;border-radius:50%;background:${col};box-shadow:0 0 ${sz*3}px ${col};pointer-events:none;z-index:9998;`;
    p.animate([
      { transform:'translate(-50%,-50%) scale(2)', opacity:'1' },
      { transform:`translate(calc(-50% + ${Math.cos(angle)*dist}px),calc(-50% + ${Math.sin(angle)*dist}px)) scale(0)`, opacity:'0' }
    ], { duration: 500 + Math.random()*500, easing:'ease-out', fill:'forwards' });
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1100);
  }
  // Shockwave ring
  for (let i = 0; i < 2; i++) {
    const ring = document.createElement('div');
    ring.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;width:10px;height:10px;border-radius:50%;border:2.5px solid ${i===0?'#a78bfa':'#f472b6'};pointer-events:none;z-index:9996;transform:translate(-50%,-50%);`;
    ring.animate([
      { width:'10px', height:'10px', opacity:'1', border:'2.5px solid currentColor' },
      { width:'240px', height:'240px', opacity:'0', border:'1px solid transparent' }
    ], { duration: 650 + i*150, easing:'ease-out', fill:'forwards', delay: i*100 });
    document.body.appendChild(ring);
    setTimeout(() => ring.remove(), 900);
  }
}

function openHintPanel() {
  document.getElementById('hintOverlay').classList.add('show');
  document.getElementById('hintPanel').classList.add('show');
}
function closeHint() {
  document.getElementById('hintOverlay').classList.remove('show');
  document.getElementById('hintPanel').classList.remove('show');
}

// ════════════════════════════════
// CANVAS BACKGROUND
// ════════════════════════════════
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let W, H, pts;
const COLS = ['#a78bfa','#38bdf8','#f472b6'];

function initCanvas() {
  W = canvas.width = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
  pts = Array.from({ length: 80 }, () => ({
    x: Math.random()*W, y: Math.random()*H,
    vx: (Math.random()-.5)*.4, vy: (Math.random()-.5)*.4,
    r: Math.random()*2+1, color: COLS[Math.floor(Math.random()*3)],
    pulse: Math.random()*Math.PI*2, ps: 0.02+Math.random()*0.02
  }));
}

const sts = [];
setInterval(() => sts.push({ x:Math.random()*W, y:Math.random()*H*.4, len:100+Math.random()*120, speed:7+Math.random()*6, alpha:1, angle:Math.PI/5+Math.random()*.3 }), 2200);

function draw() {
  ctx.clearRect(0, 0, W, H);
  for (let i = sts.length-1; i >= 0; i--) {
    const s = sts[i]; ctx.save(); ctx.globalAlpha = s.alpha*.7;
    const g = ctx.createLinearGradient(s.x, s.y, s.x-Math.cos(s.angle)*s.len, s.y-Math.sin(s.angle)*s.len);
    g.addColorStop(0,'#fff'); g.addColorStop(1,'transparent');
    ctx.strokeStyle=g; ctx.lineWidth=1.5; ctx.beginPath(); ctx.moveTo(s.x,s.y); ctx.lineTo(s.x-Math.cos(s.angle)*s.len,s.y-Math.sin(s.angle)*s.len); ctx.stroke(); ctx.restore();
    s.x+=Math.cos(s.angle)*s.speed; s.y+=Math.sin(s.angle)*s.speed; s.alpha-=0.013;
    if(s.alpha<=0) sts.splice(i,1);
  }
  for (let i=0;i<pts.length;i++) for (let j=i+1;j<pts.length;j++) {
    const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
    if(d<130){ctx.globalAlpha=(1-d/130)*.18;ctx.strokeStyle=pts[i].color;ctx.lineWidth=.5;ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke();}
  }
  pts.forEach(p => {
    p.pulse+=p.ps; const gw=.5+Math.sin(p.pulse)*.5;
    ctx.globalAlpha=.28+gw*.5; ctx.fillStyle=p.color; ctx.beginPath(); ctx.arc(p.x,p.y,p.r*(.8+gw*.5),0,Math.PI*2); ctx.fill();
    ctx.globalAlpha=.05*gw; ctx.beginPath(); ctx.arc(p.x,p.y,p.r*5,0,Math.PI*2); ctx.fill();
    p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1;
  });
  ctx.globalAlpha=1; requestAnimationFrame(draw);
}
initCanvas(); draw();
window.addEventListener('resize', initCanvas);
canvas.addEventListener('mousemove', e => {
  const r=canvas.getBoundingClientRect(), ex=e.clientX-r.left, ey=e.clientY-r.top;
  pts.forEach(p => { const dx=p.x-ex,dy=p.y-ey,d=Math.sqrt(dx*dx+dy*dy); if(d<90){p.vx+=dx/d*.4;p.vy+=dy/d*.4;} const s=Math.sqrt(p.vx*p.vx+p.vy*p.vy); if(s>2){p.vx=p.vx/s*2;p.vy=p.vy/s*2;} });
});
