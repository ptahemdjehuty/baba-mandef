"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "@/components/Nav";
import theme from "@/themes";

export default function Layout({ children }) {
  return (
    <>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <Head>
            <title>Baba Mandef</title>
            <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
            <meta
              name="description"
              content="Imagination, beyond comprehension"
            ></meta>
          </Head>
          {children}
          <Nav />
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
