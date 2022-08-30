import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function fourzerofour() {
  return (
    <>
      <Head>
        <title>Not Found | Poké Finder</title>
        <meta
          name='description'
          content='Not sure what you&#39;re looking for, but it&#39;s not here!'
        />
        <meta name='theme-color' content='#ff0000' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <p>Looks like PokeApi broke.</p>
      </main>
    </>
  );
}
