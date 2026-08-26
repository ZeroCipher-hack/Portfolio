import Link from 'next/link';
import Portrait from '@/components/Portrait';

const projects = [
  {
    slug: 'hr-system',
    n: '01', status: 'PRODUCTION', title: 'HR System', type: 'AI-Powered HR Automation Platform',
    desc: 'CV qabul qilishdan intervyugacha bo\u2018lgan jarayonni Telegram bot, AI skrining va avtomatik yo\u2018naltirish bilan tezlashtiruvchi tizim.',
    flow: ['CV', 'Telegram Bot', 'AI Screening', 'HR', 'Interview', 'Hiring'],
    stack: ['Python', 'Django', 'PostgreSQL', 'Next.js', 'Tailwind CSS'],
    result: 'Natija: dastlabki filtrlash tezlashdi, HR jamoasi faqat eng mos nomzodlar bilan ishlaydi.',
    visual: 'hr',
  },
  {
    slug: 'sentinelx',
    n: '02', status: 'WORKING PROTOTYPE', title: 'SentinelX', type: 'AI-Powered Security Monitoring Platform',
    desc: 'Log fayllarni yig\u2018ib, AI yordamida tahlil qiluvchi, tahdidlarni aniqlab alert yuboradigan hamda honeypot orqali hujumchi xatti-harakatini o\u2018rganadigan monitoring tizimi.',
    flow: ['Logs', 'AI Analysis', 'Threat Detection', 'Alert', 'Simulation', 'Honeypot'],
    stack: ['Python', 'Django', 'PostgreSQL', 'AI Analysis', 'Honeypot'],
    result: 'Men nafaqat zaifliklarni topaman, balki ularni avtomatik aniqlaydigan tizimlar ham quraman.',
    visual: 'sentinel',
  },
  {
    slug: 'mini-ids-siem',
    n: '03', status: 'REAL-TIME MONITORING', title: 'Mini IDS/SIEM', type: 'Real-Time Network Intrusion Detection',
    desc: 'Port scan, SSH brute-force va ARP spoofing hujumlarini aniqlaydigan, Telegram alert, web dashboard va PDF hisobotga ega tarmoq monitoring tizimi.',
    flow: ['Network traffic', 'Detection', 'Telegram Alert', 'Dashboard', 'PDF Report'],
    stack: ['Python', 'Scapy', 'Telegram API', 'Web Dashboard', 'PDF Reporting'],
    result: 'Real vaqtli aniqlash va tezkor xabarnoma bilan incident response jarayonini tezlashtiradi.',
    visual: 'ids',
  },
];

const labSteps = ['RECON', 'ENUMERATION', 'INITIAL ACCESS', 'EXPLOITATION', 'PRIVILEGE ESCALATION', 'POST-EXPLOITATION', 'REPORTING'];

const techStack = [
  { title: 'OFFENSIVE SECURITY', items: ['Burp Suite', 'Metasploit', 'Nmap', 'SQLmap', 'Wireshark', 'Hydra', 'Gobuster'] },
  { title: 'WEB SECURITY', items: ['OWASP Top 10', 'API Security', 'SQL Injection', 'XSS', 'CSRF'] },
  { title: 'DEVELOPMENT', items: ['Python', 'C++', 'Django', 'Next.js', 'PostgreSQL'] },
  { title: 'SYSTEMS', items: ['Linux/Unix', 'Windows', 'Bash', 'PowerShell'] },
];

const facts = [
  '01 / Toshkent, O\u2018zbekiston',
  '02 / 3+ yil cybersecurity sohasida',
  '03 / Cybersecurity Instructor \u2014 1+ yil, 15+ o\u2018quvchi',
  '04 / TATU \u2014 Software Engineering, bakalavr',
];

const achievements = [
  '\uD83C\uDFC6 Jizzax Kiberxavfsizlik Startup Xakatoni \u2014 finalist',
  '\uD83E\uDD48 CTF musobaqasi \u2014 2-o\u2018rin',
];

const certificates = ['Python 3 Programming', 'Google IT Support', 'Introduction to Operating Systems', 'Google Data Analytics', 'HTB CJCA \u2014 upcoming'];

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

function ProjectVisual({ type }: { type: string }) {
  return (
    <div className="project-visual">
      <span>INTERFACE PREVIEW</span>
      <small>Screenshots soon</small>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav container">
        <a className="brand" href="#top">AT//SEC</a>
        <div className="nav-links"><a href="#projects">Loyihalar</a><a href="#contact">Bog\u2018lanish</a></div>
      </nav>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">CYBERSECURITY \u00B7 FULL-STACK \u00B7 AI SECURITY</div>
          <h1 className="glitch-title" aria-label="AKRAMOV TOLQIN">
            <span aria-hidden="true">AKRAMOV<br />TOLQIN</span>
            <span aria-hidden="true">AKRAMOV<br />TOLQIN</span>
            <span>AKRAMOV<br />TOLQIN</span>
          </h1>
          <p className="hero-lead">Men xavfsiz tizimlar quraman, ularni hujumchi nazari bilan sinayman va xavfsizlik jarayonlarini AI yordamida avtomatlashtiraman.</p>
          <div className="hero-actions">
            <a className="button" href="#projects">Loyihalarni ko\u2018rish <b>\u2197</b></a>
            <a className="text-link" href="https://github.com/ZeroCipher-hack" target="_blank" rel="noreferrer">GitHub <b>\u2197</b></a>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-glow" />
          <Portrait />
          <div className="whoami">
            <div className="whoami-line"><span className="prompt">$</span> whoami</div>
            <div className="whoami-line result">akramov_tolqin</div>
            <div className="whoami-tags">
              <span>[ RED TEAM ]</span><span>[ WEB SECURITY ]</span><span>[ AI SECURITY ]</span>
            </div>
            <div className="whoami-line muted">3+ years learning &amp; building</div>
          </div>
        </div>
      </section>

      <div className="ticker"><div>CYBERSECURITY \u00B7 PENETRATION TESTING \u00B7 FULL-STACK DEVELOPMENT \u00B7 AI SECURITY \u00B7 SECURE SYSTEMS \u00B7 </div><div aria-hidden="true">CYBERSECURITY \u00B7 PENETRATION TESTING \u00B7 FULL-STACK DEVELOPMENT \u00B7 AI SECURITY \u00B7 SECURE SYSTEMS \u00B7 </div></div>

      <section id="about" className="section container">
        <div className="section-kicker">02 \u2014 MEN HAQIMDA <span /></div>
        <div className="about-grid">
          <div>
            <h2>Hujumchi kabi fikrlab, himoya uchun quraman.</h2>
            <p>Penetration testing, Red Team operatsiyalari, Linux, tarmoq xavfsizligi va xavfsizlikni avtomatlashtirish bo\u2018yicha amaliy tajribaga ega cybersecurity-yo\u2018naltirilgan muhandis.</p>
            <p className="about-closing">Men nazariyadan ko\u2018ra amaliyotga ishonaman: har bir loyiham \u2014 real muammoni hal qilish uchun qurilgan tizim.</p>
          </div>
          <div className="facts">
            {facts.map((f) => <div key={f}><span>{f}</span></div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="section container">
        <div className="section-kicker">03 \u2014 TANLANGAN LOYIHALAR <span /></div>
        <h2 className="section-title">Xavfsizlikni real mahsulotga aylantirgan ishlar.</h2>
        <div className="section-sub">01 \u2014 03 / CASE STUDIES</div>
        <div className="projects-grid">
          {projects.map((project) => (
            <Link className="project-card" href={`/projects/${project.slug}`} key={project.title}>
              <ProjectVisual type={project.visual} />
              <div className="project-head"><span>{project.n} \u2014 {project.status}</span></div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p className="project-type">{project.type}</p>
                <p>{project.desc}</p>
                <div className="arch-flow">
                  <span className="arch-label">ARCHITECTURE FLOW</span>
                  <div className="arch-steps">
                    {project.flow.map((step, i) => (
                      <span key={step} className="arch-step">{step}{i < project.flow.length - 1 && <b>\u2192</b>}</span>
                    ))}
                  </div>
                </div>
                <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                <p className="project-result">{project.result}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="lab" className="section container">
        <div className="section-kicker">04 \u2014 SECURITY LAB <span /></div>
        <h2 className="section-title">Metodik jarayon. Real lablar.</h2>
        <p className="lab-desc">Har bir bosqich real lab yoki CTF tajribasiga asoslangan: HTB mashinalari, CTF challenge\u2019lar va ichki lab muhitlari orqali sinovdan o\u2018tgan workflow.</p>
        <div className="lab-flow">
          {labSteps.map((step, i) => (
            <div className="lab-step" key={step}>
              <span>{step}</span>
              {i < labSteps.length - 1 && <b>\u2193</b>}
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section container">
        <div className="section-kicker">05 \u2014 TECH STACK <span /></div>
        <div className="skills-grid">
          {techStack.map(cat => (
            <div key={cat.title}>
              <h3>{cat.title}</h3>
              {cat.items.map(x => <p key={x}>{x}</p>)}
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section container">
        <div className="section-kicker">06 / 07 \u2014 TAJRIBA &amp; YUTUQLAR <span /></div>
        <div className="exp-grid">
          <div className="exp-col">
            <p>Red Team / Offensive Security \u2014 2024 \u2192 Hozirgi kungacha</p>
            <p>Cybersecurity Instructor \u2014 1+ yil \u00B7 15 nafar o\u2018quvchi</p>
            <p>TATU \u2014 Software Engineering, bakalavr</p>
          </div>
          <div className="exp-col">
            {achievements.map(a => <p key={a}>{a}</p>)}
          </div>
          <div className="exp-col certs">
            <p>{certificates.join(' \u00B7 ')}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact container">
        <div className="section-kicker">08 \u2014 BOG\u2018LANISH <span /></div>
        <div className="contact-grid">
          <div>
            <h2>Xavfsizlikka muhtoj tizimingiz bormi?</h2>
            <a className="button" href="mailto:akramovtolqin0327@gmail.com">Keling, gaplashaylik \u2192</a>
          </div>
          <div className="contact-links">
            <a href="https://github.com/ZeroCipher-hack" target="_blank" rel="noreferrer"><small>GITHUB</small><span>ZeroCipher-hack \u2197</span></a>
            <a href="https://t.me/your_telegram" target="_blank" rel="noreferrer"><small>TELEGRAM</small><span>@your_telegram \u2197</span></a>
          </div>
        </div>
      </section>

      <footer className="footer container"><span>AKRAMOV TOLQIN / 2026 / TOSHKENT, O\u2018ZBEKISTON</span></footer>
    </main>
  );
}
