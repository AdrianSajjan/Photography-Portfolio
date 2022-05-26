import Head from "next/head";
import { Fragment } from "react";
import { Hero, Socials, Services, About } from "@components/Home";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Antarip Kabiraj</title>
        <meta name="description" content="Photography portfolio of Antair Kabiraj" />
        <link rel="icon" href="/static/icons/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Socials />
        <Services />
        <About />
      </main>
      <footer></footer>
    </Fragment>
  );
}
