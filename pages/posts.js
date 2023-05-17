import React from "react";
import PostCard from "../Components/PostCard";
import Navbar from "../Components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import MemeCard from "../Components/MemeCard";
import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect } from "react";

const Posts = () => {
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
    <Navbar/>
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
