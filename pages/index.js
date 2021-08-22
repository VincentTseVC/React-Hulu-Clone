import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>

      <Header />

      <Navbar />

      <Results />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
}
