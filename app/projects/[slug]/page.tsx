import Link from 'next/link';

const data: Record<string,{title:string;eyebrow:string;desc:string;stack:string[]}> = {
  'hr-system': {title:'HR System',eyebrow:'AI-POWERED HR AUTOMATION',desc:'A full-stack HR platform designed to automate recruitment workflows and make internal HR operations faster and more structured.',stack:['Django','React','AI','PostgreSQL','REST API']},
  sentinelx: {title:'SentinelX',eyebrow:'CYBERSECURITY / SIEM',desc:'A security monitoring concept focused on event visibility, threat detection and incident-oriented dashboards.',stack:['Python','Security','SIEM','Linux','Dashboard']},
  mathlearn: {title:'Mathlearn MathematicsWeb',eyebrow:'EDTECH / FULL-STACK',desc:'An interactive mathematics learning platform built around clear explanations, practice and an engaging web experience.',stack:['TypeScript','Web','Education','Interactive UI']}
};

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const p=data[slug];
  if(!p) return <main className="container section"><h1>Project not found.</h1><Link className="btn" href="/">← Back</Link></main>;
  return <main><header className="container nav"><Link className="logo" href="/">AT<span className="green">.</span></Link><Link className="mono" href="/">← BACK</Link></header><section className="hero"><div className="container"><div className="eyebrow">{p.eyebrow}</div><h1>{p.title}</h1><p className="lead">{p.desc}</p><div className="tags">{p.stack.map(x=><span className="tag" key={x}>{x}</span>)}</div></div></section><section className="section"><div className="container"><div className="terminal"><div className="terminal-bar"><i className="dot"/><i className="dot"/><i className="dot"/></div><pre><span className="green">$ project.status</span>{'\n\nBUILDING → TESTING → HARDENING\n\nMore detailed case-study material and\nproject screenshots will be added here.</pre></div></div></section></main>;
}