const projects = [
  { n:'01', title:'HR System', type:'AI-POWERED HR AUTOMATION', desc:'A full-stack HR platform focused on automating recruitment and internal workflows.', tags:['Django','React','AI','PostgreSQL'], featured:true },
  { n:'02', title:'SentinelX', type:'CYBERSECURITY / SIEM', desc:'Security monitoring platform for collecting events, detecting threats and visualizing incidents.', tags:['Security','SIEM','Python','Dashboard'] },
  { n:'03', title:'Mathlearn MathematicsWeb', type:'EDTECH / FULL-STACK', desc:'Interactive mathematics learning experience designed to make practice, progress and concepts easier to understand.', tags:['Web','Education','Interactive UI','Full-Stack'] },
];

export default function Home(){
  return <main>
    <header className="container nav">
      <a className="logo" href="#top">AT<span className="green">.</span></a>
      <nav className="navlinks"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="mono" href="https://github.com/ZeroCipher-hack" target="_blank">GITHUB ↗</a>
    </header>

    <section id="top" className="hero grid-bg">
      <div className="container">
        <div className="eyebrow">[ CYBERSECURITY / FULL-STACK / AI SECURITY ]</div>
        <h1>AKRAMOV<br/><span>TOLQIN</span></h1>
        <p className="lead">Cybersecurity pentester and full-stack developer building secure systems, breaking weak ones, and turning security research into practical products.</p>
        <div className="actions"><a className="btn primary" href="#work">VIEW PROJECTS ↓</a><a className="btn" href="https://www.linkedin.com/in/to-lqin-akramov-380524275/" target="_blank">LINKEDIN ↗</a></div>
      </div>
    </section>

    <section id="about" className="section"><div className="container">
      <div className="section-head"><div><div className="eyebrow">01 / PROFILE</div><h2>I BUILD.<br/>I BREAK.</h2></div><p className="section-note">My focus sits where software engineering and offensive security meet: web applications, secure architecture, automation and AI security.</p></div>
      <div className="terminal"><div className="terminal-bar"><i className="dot"/><i className="dot"/><i className="dot"/></div><pre><span className="green">$ whoami</span>{'\n\nakramov_tolqin\n\nrole:      cybersecurity researcher\n           penetration tester\n           full-stack developer\n\nfocus:     web security\n           offensive security\n           AI security\n           secure systems</pre></div>
    </div></section>

    <section id="work" className="section"><div className="container">
      <div className="section-head"><div><div className="eyebrow">02 / SELECTED WORK</div><h2>PROJECTS</h2></div><p className="section-note">Three products that demonstrate the range: security, engineering and product thinking.</p></div>
      <div className="projects">{projects.map(p=><article className={`project ${p.featured?'featured':''}`} key={p.n}><div><div className="project-num">{p.n} / {p.type}</div><h3>{p.title}</h3><p>{p.desc}</p></div><div className="tags">{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div></article>)}</div>
    </div></section>

    <section className="section"><div className="container"><div className="section-head"><div><div className="eyebrow">03 / CAPABILITIES</div><h2>TOOLKIT</h2></div></div><div className="tags" style={{gap:10}}>{['Penetration Testing','Web Security','Python','Django','React','Next.js','TypeScript','Linux','Burp Suite','Nmap','SQL','AI Security','Git','Docker'].map(x=><span className="tag" key={x} style={{fontSize:13,padding:'10px 14px'}}>{x}</span>)}</div></div></section>

    <section id="contact" className="contact"><div className="container"><div className="eyebrow">04 / CONTACT</div><h2>LET'S BUILD<br/><span className="green">SOMETHING SECURE.</span></h2><p className="section-note" style={{margin:'0 auto 28px'}}>Open to security engineering, penetration testing and ambitious product work.</p><a className="btn primary" href="mailto:akramovtolqin0327@gmail.com">GET IN TOUCH ↗</a></div></section>
    <footer className="container footer"><span>© 2026 AKRAMOV TOLQIN</span><span>CYBERSECURITY · FULL-STACK · AI SECURITY</span></footer>
  </main>
}