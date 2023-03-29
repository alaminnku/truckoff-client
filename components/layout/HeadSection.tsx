import Head from "next/head";
import { IHeadSectionProps } from "@types";

export default function HeadSection({
  title,
  pageType,
  ogTitle,
}: IHeadSectionProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:image:width" content="920" />
      <meta property="og:image:height" content="470" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
