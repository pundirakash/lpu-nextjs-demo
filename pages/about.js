export async function getStaticProps() {
  return {
    props: {
      dateGenerated: new Date().toLocaleString(),
    },
  };
}

export default function About({ dateGenerated }) {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>About Us (SSG)</h1>
      <p>This page was statically generated at build time.</p>
      <p>Generated at: {dateGenerated}</p>
       <p>@AkashPundir</p>
    </main>
  );
}