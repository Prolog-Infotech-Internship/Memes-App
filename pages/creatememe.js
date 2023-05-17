import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import Navbar2 from "../Components/Navbar2";
import { useState } from "react";

const creatememe = () => {
  const [signined, setsignined] = useState(true);
  const router = useRouter();
  useEffect(() => {

    if (!localStorage.getItem("token")) {
      setsignined(false);
      router.push('/signin')
    }
    else{
      setsignined(true);
    }
  }, [])
  return (
    <div>
      <Head>
        <title>Memes App</title>
      </Head>
      <ChakraProvider>
      {signined ? <Navbar2 /> : <Navbar />}
      </ChakraProvider>
      CreateMeme
    </div>
  );
};

export default creatememe;
