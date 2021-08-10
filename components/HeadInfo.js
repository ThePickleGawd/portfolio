import Head from "next/head";

const TITLE = "Dylan Lu | Portfolio";
const DESCRIPTION =
  "A portfolio website built by Dylan Lu, a high school student and programmer at Gunn High School. This is a place to see my current and previous projects and to see contact information";

export const HeadInfo = () => {
  return (
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dylanlu.com" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <link rel="icon" href="favicon.ico" />
    </Head>
  );
};

export default HeadInfo;
