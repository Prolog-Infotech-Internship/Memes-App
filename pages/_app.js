import React from "react";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar2 from "../Components/Navbar2";
import Head from "next/head";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [signined, setsignined] = useState(true);
  const [token, setToken] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
      setsignined(true);
    }
  }, []);
  return (
    <>
      <ChakraProvider>
        <Head>
          <title>Memes App</title>
        </Head>
        {signined ? <Navbar2 position="sticky" /> : <Navbar />}
        <Component token={token} {...pageProps} />
      </ChakraProvider>
    </>
  );
}
