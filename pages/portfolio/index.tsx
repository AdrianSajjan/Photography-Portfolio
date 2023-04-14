import Head from "next/head";
import { Fragment } from "react";

export default function Portfolio() {
  return (
    <Fragment>
      <Head>
        <title>Portfolio | Antarip Kabiraj</title>
        <meta name="description" content="Photography portfolio of Antair Kabiraj" />
        <link rel="icon" href="/static/icons/favicon.ico" />
      </Head>
      <main>
        <section className="portfolio">
          <h2 className="portfolio__heading">My portfolio</h2>
          <div className="portfolio-grid"></div>
        </section>
      </main>
    </Fragment>
  );
}
