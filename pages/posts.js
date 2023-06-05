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
import { useContext } from 'react';
import AppContext from "../AppContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Posts = () => {
  const {posts,userid} = useContext(AppContext);
  const [signined, setsignined] = useState(true);
  const router = useRouter();
  useEffect(() => {

    if (!localStorage.getItem("token")) {
      router.push('/signin')
    }
  }, [])

  const handleLike = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/likememe/${id}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userid: userid })
      });
      const json = await response.json()
    } catch (error) {
      console.error(error);
    }
  };

  const handleReportMeme = async (id) =>{
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/reportmeme/${id}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userid: userid })
      });
      const json = await response.json();

      if(json.reported){
        toast.success("Meme reported successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      else{
        toast.error("Invalid Error Occured", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <Head>
        <title>Memes App</title>
      </Head>
      <ChakraProvider>
      <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        {/* {signined ? <Navbar2 /> : <Navbar />} */}
        {/* <Card/> */}
        {posts.map((meme) => (
          <div key={meme._id}>
            <MemeCard meme={meme} handleLike={handleLike} handleReportMeme={handleReportMeme} liked={meme.likes.includes(userid) ? true:false} reported={meme.reports.includes(userid) ? true:false} />
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
        <PostCard />
        {/* <PostCard/>
    <PostCard/> */}
      </ChakraProvider>
    </div>
  );
};

export default Posts;
