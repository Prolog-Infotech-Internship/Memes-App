import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar2 from "../Components/Navbar2";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push('/signin')
    }
    // if (localStorage.getItem("token")) {
    //   router.push('/posts')
    // }
  }, [])
  return (
    <>
      <Head>
        <title>Memes App</title>
      </Head>
      <ChakraProvider>
        {/* <Navbar/> */}
      </ChakraProvider>
    </>
  );
}
