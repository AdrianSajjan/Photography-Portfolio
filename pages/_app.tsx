import "@styles/global.scss";

import { Fragment } from "react";
import { Header, Footer } from "@components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
