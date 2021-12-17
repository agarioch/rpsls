import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>RPSLS</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖖</text></svg>"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className={styles.container}>{children}</main>
    </div>
  );
}
