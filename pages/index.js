import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ChakraProvider } from '@chakra-ui/react'
import Card from '../Components/PostCard';
import Navbar from '../Components/Navbar';

export default function Home() {
  return (
    <ChakraProvider>
    <Navbar/>
  </ChakraProvider>
  )
}
