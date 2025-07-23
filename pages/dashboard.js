export async function getServerSideProps() {
  return {
    props: {
      timestamp: new Date().toLocaleString(),
    },
  };
}

export default function Dashboard({ timestamp }) {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Dashboard (SSR)</h1>
      <p>This page was rendered on the server at: {timestamp}</p>
       <p>@AkashPundir</p>
    </main>
  );
}
