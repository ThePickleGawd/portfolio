// React
import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

// Redux
import { Provider } from "react-redux";
import store from "../redux/store";

// Styiling
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../util/theme";

import Navbar from "../components/App/Navbar";
import HeadInfo from "../components/App/HeadInfo";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <HeadInfo />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Navbar />
          {pageLoading && <div>WE ARE LOADING</div>}
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
