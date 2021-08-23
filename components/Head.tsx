import Head from "next/head";

interface HeadingProps {
  title?: string;
}

export default function Heading({ title = "" }: HeadingProps): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      {/* <meta name="description" content="Generated by create next app" /> */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
