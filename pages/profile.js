import React from "react";
import Navbar from "../Components/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const profile = () => {
  const router = useRouter();
  useEffect(() => {

    if (!localStorage.getItem("token")) {
      router.push('/signin')
    }
  }, [])
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
