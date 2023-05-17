import React from "react";
import Navbar from "../Components/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar2 from "../Components/Navbar2";

const profile = () => {
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
      <ChakraProvider>
      <Head>
        <title>Memes App</title>
      </Head>
      {signined ? <Navbar2 /> : <Navbar />}
        Profile
      </ChakraProvider>
      
    </div>
  );
};

export default profile;
