import Head from "next/head";

const TITLE = "Dylan Lu | Portfolio";
const DESCRIPTION =
  "Dylan Lu - Web Developer and Game Developer. Contact me for help on React, Unity, or virtualy any other type of project. Or, view some of my previous work";

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
      <meta charSet="utf-8" />
      <link rel="icon" href="favicon.ico" />
    </Head>
  );
};

export default HeadInfo;
