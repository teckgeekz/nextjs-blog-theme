import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
    <meta name="google-site-verification" content="I2fWi7JNRpZWiBnvDlh7wMZ5VgJm3dK69b-AcMCxWJo" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}
