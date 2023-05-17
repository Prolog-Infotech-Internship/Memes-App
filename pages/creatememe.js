import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect } from "react";

const creatememe = () => {
  const router = useRouter();
  useEffect(() => {

    if (!localStorage.getItem("token")) {
      router.push('/signin')
    }
  }, [])
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
