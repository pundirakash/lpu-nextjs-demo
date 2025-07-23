import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'programs.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const programs = JSON.parse(fileContents);

  return {
    props: {
      programs,
      dateGenerated: new Date().toLocaleString(),
    },
    revalidate: 30,
  };
}

export default function Programs({ programs, dateGenerated }) {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Programs (ISR)</h1>
      <p>Page revalidated at: {dateGenerated}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {programs.map((p, idx) => (
          <li key={idx} style={{ marginBottom: '2rem' }}>
            <h3>{p.name}</h3>
            {p.image && (
              <Image src={p.image} width={400} height={250} alt={p.name} />
            )}
          </li>
        ))}
      </ul>
       <p>@AkashPundir</p>
    </main>
  );
}