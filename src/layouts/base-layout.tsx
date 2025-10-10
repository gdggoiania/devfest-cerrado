import React, { ReactNode } from "react";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "../components/footers/footer";
import configValues from "helpers/config";
import { Navbar } from "components/navbar/navbar";

interface BaseLayout {
  children: ReactNode;
}

//id="base-layout" className="main-content"
const BaseLayout: React.FC<BaseLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="functions-insert-dynamic-og" />
        <title>{configValues.name}</title>
      </Head>
      <main className="absolute-position">
        <Navbar />
        <div>{children}</div>
         <SpeedInsights />
        <Footer />
      </main>
    </>
  );
};

export default BaseLayout;
