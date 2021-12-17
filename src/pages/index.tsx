import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <h1>Spock Paper Lizzard</h1>
      <Link href="/game">Play!</Link>
    </Layout>
  );
}
