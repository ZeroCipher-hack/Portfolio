import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akramov Tolqin — Cybersecurity Pentester',
  description: 'Cybersecurity Pentester · Full-Stack Developer · AI Security',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uz"><body>{children}</body></html>;
}