import React from "react";
import Navbar from "../Components/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar2 from "../Components/Navbar2";
import { Button, ButtonGroup } from '@chakra-ui/react'

const Profile = () => {
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

  const handleSignOut = () => {
    localStorage.clear();
    router.push('/signin')
  }
  return (
    <div>
      <ChakraProvider>
      <Head>
        <title>Memes App</title>
      </Head>
      {/* {signined ? <Navbar2 /> : <Navbar />} */}
        Profile

        <Button colorScheme='blue' onClick={handleSignOut}>Sign Out</Button>
      </ChakraProvider>
      
    </div>
  );
};

export default Profile;
