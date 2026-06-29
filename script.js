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
const secIds = ['home','about','skills','projects','experience','extracurriculars','education','connect'];
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
