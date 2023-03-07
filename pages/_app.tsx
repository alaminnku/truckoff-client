import "@/styles/globals.css";
import type { AppProps } from "next/app";
import DataProvider from "@contexts/Data";
import Header from "@/components/layout/Header";
import Footer from "@components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </DataProvider>
  );
}
