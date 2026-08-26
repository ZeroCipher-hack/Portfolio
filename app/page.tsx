import Portrait from '@/components/Portrait';

const projects = [
  { num: '01', title: 'HR System', type: 'AI-POWERED HR AUTOMATION', desc: 'A full-stack HR platform designed to automate recruitment, candidate screening and internal HR workflows.', tags: ['Django', 'React', 'AI', 'PostgreSQL'], href: '/projects/hr-system', visual: 'hr' },
  { num: '02', title: 'SentinelX', type: 'CYBERSECURITY / SIEM', desc: 'Security monitoring platform for collecting events, detecting threats and visualizing incidents.', tags: ['Python', 'SIEM', 'Security', 'Dashboard'], href: '/projects/sentinelx', visual: 'sentinel' },
  { num: '03', title: 'Mathlearn MathematicsWeb', type: 'EDTECH / FULL-STACK', desc: 'Interactive mathematics learning experience for practice, progress tracking and clearer concepts.', tags: ['Next.js', 'TypeScript', 'Education', 'Full-Stack'], href: '/projects/mathlearn', visual: 'math' },
];

const skills = {
  security: ['Penetration Testing', 'Web Security', 'Network Security', 'SIEM / SOC', 'OWASP Top 10'],
  development: ['Next.js', 'TypeScript', 'React', 'Django', 'REST APIs'],
  tools: ['Git & GitHub', 'PostgreSQL', 'Docker', 'Linux', 'Burp Suite', 'Nmap'],
  ai: ['AI Integration', 'AI Security', 'Python', 'Automation', 'OpenAI API'],
};

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

function ProjectVisual({ type }: { type: string }) {
  if (type === 'sentinel') return <div className="project-visual sentinel-visual"><div className="mini-nav">SENTINELX <span>LIVE</span></div><div className="threat-grid"><i /><i /><i /></div><div className="mini-stats"><b>1,284</b><b>37</b><b>99.8%</b></div></div>;
  if (type === 'math') return <div className="project-visual math-visual"><span>MATHEMATICS</span><strong>f(x) = x² + 2x + 1</strong><small>PROGRESS 82%</small><div className="progress-line"><i /></div></div>;
  return <div className="project-visual hr-visual"><div className="mini-nav">HR SYSTEM <span>OVERVIEW</span></div><div className="chart"><i /><i /><i /><i /><i /><i /></div><div className="mini-stats"><b>248</b><b>64</b><b>91%</b></div></div>;
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav container">
        <a className="brand" href="#top">AKRAMOV TOLQIN</a>
        <div className="nav-links"><a href="#about">ABOUT</a><a href="#projects">PROJECTS</a><a href="#skills">SKILLS</a><a href="#contact">CONTACT</a></div>
        <a className="nav-status" href="mailto:akramovtolqin0327@gmail.com"><span /> AVAILABLE</a>
      </nav>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">CYBERSECURITY PENTESTER · FULL-STACK DEVELOPER · AI SECURITY</div>
          <h1>AKRAMOV<br /><span>TOLQIN</span></h1>
          <p className="hero-lead">I build secure, scalable and intelligent systems. Specialized in cybersecurity, pentesting and full-stack development with AI.</p>
          <div className="hero-actions"><a className="button" href="#projects">VIEW PROJECTS <b>↗</b></a><a className="text-link" href="mailto:akramovtolqin0327@gmail.com">GET IN TOUCH <b>↗</b></a></div>
          <div className="socials"><a href="https://github.com/ZeroCipher-hack" target="_blank" rel="noreferrer">GH</a><a href="https://www.linkedin.com/in/to-lqin-akramov-380524275/" target="_blank" rel="noreferrer">in</a><a href="mailto:akramovtolqin0327@gmail.com">@</a></div>
        </div>
        <div className="hero-portrait-wrap"><div className="portrait-glow" /><Portrait /><div className="portrait-label"><span>01 / PROFILE</span><span>UZ · 2026</span></div></div>
      </section>

      <div className="ticker"><div>CYBERSECURITY · PENETRATION TESTING · FULL-STACK DEVELOPMENT · AI SECURITY · SECURE SYSTEMS · </div><div aria-hidden="true">CYBERSECURITY · PENETRATION TESTING · FULL-STACK DEVELOPMENT · AI SECURITY · SECURE SYSTEMS · </div></div>

      <section id="about" className="section container">
        <div className="section-kicker">ABOUT ME <span /></div>
        <div className="about-grid"><div><h2>I&apos;M A CYBERSECURITY ENTHUSIAST AND FULL-STACK DEVELOPER WHO LOVES BUILDING IMPACTFUL DIGITAL PRODUCTS.</h2><p>My work sits where software engineering and offensive security meet. I enjoy solving complex problems, breaking weak systems and turning security research into practical products.</p></div><div className="facts"><div><Icon>⌁</Icon><span>FOCUS</span><b>Cybersecurity<br />Pentesting<br />AI Security</b></div><div><Icon>&lt;/&gt;</Icon><span>DEVELOPMENT</span><b>Full-Stack<br />Web Applications<br />APIs & Integrations</b></div><div><Icon>◇</Icon><span>EDUCATION</span><b>TATU Graduate<br />Software Engineering</b></div></div></div>
      </section>

      <section id="projects" className="section container">
        <div className="section-kicker">FEATURED PROJECTS <span /></div>
        <div className="projects-grid">{projects.map((project) => <a className="project-card" href={project.href} key={project.title}><div className="project-head"><span>{project.num}</span><span>↗</span></div><ProjectVisual type={project.visual} /><div className="project-body"><div><h3>{project.title}</h3><p className="project-type">{project.type}</p></div><p>{project.desc}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></a>)}</div>
      </section>

      <section id="skills" className="section container">
        <div className="section-kicker">TECHNICAL SKILLS <span /></div>
        <div className="skills-grid">
          <div><Icon>◈</Icon><h3>CYBERSECURITY</h3>{skills.security.map(x => <p key={x}>{x}</p>)}</div>
          <div><Icon>&lt;/&gt;</Icon><h3>DEVELOPMENT</h3>{skills.development.map(x => <p key={x}>{x}</p>)}</div>
          <div><Icon>◎</Icon><h3>DATABASE & TOOLS</h3>{skills.tools.map(x => <p key={x}>{x}</p>)}</div>
          <div><Icon>✦</Icon><h3>AI & AUTOMATION</h3>{skills.ai.map(x => <p key={x}>{x}</p>)}</div>
        </div>
      </section>

      <section id="contact" className="contact container"><div className="section-kicker">GET IN TOUCH <span /></div><div className="contact-grid"><div><h2>LET&apos;S BUILD SOMETHING GREAT TOGETHER.</h2><a className="button" href="mailto:akramovtolqin0327@gmail.com">START A CONVERSATION <b>↗</b></a></div><div className="contact-links"><a href="mailto:akramovtolqin0327@gmail.com"><small>EMAIL</small><span>akramovtolqin0327@gmail.com</span></a><a href="https://www.linkedin.com/in/to-lqin-akramov-380524275/" target="_blank" rel="noreferrer"><small>LINKEDIN</small><span>akramov_tolqin ↗</span></a><a href="https://github.com/ZeroCipher-hack" target="_blank" rel="noreferrer"><small>GITHUB</small><span>ZeroCipher-hack ↗</span></a></div></div></section>

      <footer className="footer container"><span>© 2026 AKRAMOV TOLQIN</span><span>CYBERSECURITY · FULL-STACK · AI SECURITY</span></footer>
    </main>
  );
}
