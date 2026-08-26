import Link from 'next/link';

const data: Record<string, { title: string; type: string; desc: string; flow: string[]; stack: string[]; result: string; n: string }> = {
  'hr-system': {
    n: '01', title: 'HR System', type: 'AI-Powered HR Automation Platform',
    desc: 'CV qabul qilishdan intervyugacha bo\u2018lgan jarayonni Telegram bot, AI skrining va avtomatik yo\u2018naltirish bilan tezlashtiruvchi tizim.',
    flow: ['CV', 'Telegram Bot', 'AI Screening', 'HR', 'Interview', 'Hiring'],
    stack: ['Python', 'Django', 'PostgreSQL', 'Next.js', 'Tailwind CSS'],
    result: 'Natija: dastlabki filtrlash tezlashdi, HR jamoasi faqat eng mos nomzodlar bilan ishlaydi.',
  },
  sentinelx: {
    n: '02', title: 'SentinelX', type: 'AI-Powered Security Monitoring Platform',
    desc: 'Log fayllarni yig\u2018ib, AI yordamida tahlil qiluvchi, tahdidlarni aniqlab alert yuboradigan hamda honeypot orqali hujumchi xatti-harakatini o\u2018rganadigan monitoring tizimi.',
    flow: ['Logs', 'AI Analysis', 'Threat Detection', 'Alert', 'Simulation', 'Honeypot'],
    stack: ['Python', 'Django', 'PostgreSQL', 'AI Analysis', 'Honeypot'],
    result: 'Men nafaqat zaifliklarni topaman, balki ularni avtomatik aniqlaydigan tizimlar ham quraman.',
  },
  'mini-ids-siem': {
    n: '03', title: 'Mini IDS/SIEM', type: 'Real-Time Network Intrusion Detection',
    desc: 'Port scan, SSH brute-force va ARP spoofing hujumlarini aniqlaydigan, Telegram alert, web dashboard va PDF hisobotga ega tarmoq monitoring tizimi.',
    flow: ['Network traffic', 'Detection', 'Telegram Alert', 'Dashboard', 'PDF Report'],
    stack: ['Python', 'Scapy', 'Telegram API', 'Web Dashboard', 'PDF Reporting'],
    result: 'Real vaqtli aniqlash va tezkor xabarnoma bilan incident response jarayonini tezlashtiradi.',
  },
  mathlearn: {
    n: '04', title: 'Mathlearn MathematicsWeb', type: 'Interactive Mathematics Learning Platform',
    desc: 'Mashqlar, progress tracking va aniq tushuntirishlar atrofida qurilgan interaktiv matematika o\u2018rganish platformasi.',
    flow: ['Mavzu', 'Interaktiv dars', 'Mashq', 'Tekshiruv', 'Progress tracking'],
    stack: ['Next.js', 'TypeScript', 'Education', 'Interactive UI'],
    result: 'Natija: o\u2018quvchilar tushunchalarni amaliyot orqali mustahkamlaydi, progress real vaqtda kuzatiladi.',
  },
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = data[slug];
  if (!p) {
    return (
      <main className="container section">
        <h1>Loyiha topilmadi.</h1>
        <Link className="text-link" href="/">\u2190 Bosh sahifaga</Link>
      </main>
    );
  }
  return (
    <main>
      <nav className="site-nav container">
        <Link className="brand" href="/">AT//SEC</Link>
        <Link className="text-link" href="/">\u2190 ORQAGA</Link>
      </nav>
      <section className="section container">
        <div className="section-kicker">{p.n} / CASE STUDY <span /></div>
        <h1 className="section-title">{p.title}</h1>
        <p className="project-type">{p.type}</p>
        <p className="hero-lead" style={{ marginTop: 24, maxWidth: 640 }}>{p.desc}</p>
        <div className="arch-flow" style={{ marginTop: 40, maxWidth: 700 }}>
          <span className="arch-label">ARCHITECTURE FLOW</span>
          <div className="arch-steps">
            {p.flow.map((step, i) => (
              <span key={step} className="arch-step">{step}{i < p.flow.length - 1 && <b>\u2192</b>}</span>
            ))}
          </div>
        </div>
        <div className="tags" style={{ marginTop: 28 }}>{p.stack.map(x => <span key={x}>{x}</span>)}</div>
        <p className="project-result" style={{ marginTop: 32, maxWidth: 640 }}>{p.result}</p>
      </section>
    </main>
  );
}
