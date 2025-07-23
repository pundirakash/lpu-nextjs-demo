import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to LPU Demo Site</h1>
      <p>This demo shows three different Next.js rendering methods:</p>
      
      <ul style={{ lineHeight: '2' }}>
        <li><Link href="/about">About (SSG)</Link></li>
        <li><Link href="/programs">Programs (ISR)</Link></li>
        <li><Link href="/dashboard">Dashboard (SSR)</Link></li>
      </ul>
      <p>@AkashPundir</p>
    </main>
  );
}
