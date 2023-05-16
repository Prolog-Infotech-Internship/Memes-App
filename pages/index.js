import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Memes App</title>
      </Head>
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
    </>
  );
}
