import React from "react";
import Navbar from "../Components/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
import Head from "next/head";

const profile = () => {
  return (
    <div>
      <ChakraProvider>
      <Head>
        <title>Memes App</title>
      </Head>
        <Navbar />
        Profile
      </ChakraProvider>
      
    </div>
  );
};

export default profile;
