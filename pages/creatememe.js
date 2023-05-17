import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import Head from "next/head";

const creatememe = () => {
  return (
    <div>
      <Head>
        <title>Memes App</title>
      </Head>
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
      CreateMeme
    </div>
  );
};

export default creatememe;
