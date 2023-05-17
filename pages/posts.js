import React from "react";
import PostCard from "../Components/PostCard";
import Navbar from "../Components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import MemeCard from "../Components/MemeCard";
import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import Navbar2 from "../Components/Navbar2";
import { useState } from "react";

const Posts = () => {
  const [signined, setsignined] = useState(true);
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
    {signined ? <Navbar2 /> : <Navbar />}
    {/* <Card/> */}
    <MemeCard/>
    <MemeCard/>
    <MemeCard/>
    <MemeCard/>
    <MemeCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
  </ChakraProvider>
    </div>
  );
};

export default Posts;
