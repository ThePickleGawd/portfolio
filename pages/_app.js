// React
import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

// Redux
import { Provider } from "react-redux";
import store from "../redux/store";

// Styiling
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../util/theme";

// Components
import Navbar from "../components/App/Navbar";
import HeadInfo from "../components/App/HeadInfo";
import Messages from "../components/App/Messages";
import NProgress from "nprogress"; // Loading bar
import "nprogress/nprogress.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState(false);

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      setPageLoading(true);
    };
    const handleComplete = () => {
      NProgress.done();
      setPageLoading(false);
    };

    NProgress.configure({ trickleSpeed: 100, showSpinner: false });

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
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Navbar />
            <Messages />
            <Component {...pageProps} />
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
