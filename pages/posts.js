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
import axios from "axios";

const Posts = () => {
  const [memes, setMemes] = useState([]);
  const [signined, setsignined] = useState(true);
  const router = useRouter();
  useEffect(() => {

    if (!localStorage.getItem("token")) {
      router.push('/signin')
    }
    getMemes();
  }, [])
  const getMemes = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/getmemes`);
      setMemes(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleLike = async (id) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_HOST}/memes/${id}/like`);
      getMemes();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Head>
        <title>Memes App</title>
      </Head>
    <ChakraProvider>
    {/* {signined ? <Navbar2 /> : <Navbar />} */}
    {/* <Card/> */}
    {memes.reverse().map((meme) => (
          <div key={meme._id}>
            <MemeCard meme={meme} handleLike={handleLike}/>
            {/* <img src={meme.memeUrl} alt="meme" style={{ width: '300px' }} />
            <p>Name: {meme.name}</p>
            <p>Description: {meme.description}</p>
            <p>Date: {new Date(meme.date).toLocaleString()}</p>
            <p>Likes: {meme.likes}</p>
            <button onClick={() => handleLike(meme._id)}>Like</button> */}
          </div>
        ))}
    
    {/* <MemeCard/>
    <MemeCard/>
    <MemeCard/>
    <MemeCard/> */}
    <PostCard/>
    {/* <PostCard/>
    <PostCard/> */}
  </ChakraProvider>
    </div>
  );
};

export default Posts;
