import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import DataProvider from "@contexts/Data";
import Header from "@/components/layout/Header";
import Footer from "@components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <DataProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </DataProvider>
    </>
  );
}
