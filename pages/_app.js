import React from "react";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar2 from "../Components/Navbar2";
import Head from "next/head";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [signined, setsignined] = useState(true);
  const [token, setToken] = useState(null);
  const [userid, setUserId] = useState('')
  const [username, setUserName] = useState('')
  const [useremail, setUserEmail] = useState('')
  const [userprofilepic, setUserProfilePic] = useState('')


  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
      console.log("hello")
      getUser();
      setsignined(true);
    }
  }, []);

  const getUser = async () => {
    const id = await localStorage.getItem("userId")
    setUserId(id)
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser/${id}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'auth-token': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
    });
    const json = await response.json();

    await setUserName(json.username)
    await setUserEmail(json.useremail)
    await setUserProfilePic(json.userpic)

    console.log(username)
  }
  return (
    <>
      <ChakraProvider>
        <Head>
          <title>Memes App</title>
        </Head>
        {signined ? <Navbar2 position="sticky" /> : <Navbar />}
        <Component token={token} userid={userid} username={username} useremail={useremail} userprofilepic={userprofilepic} {...pageProps} />
      </ChakraProvider>
    </>
  );
}
