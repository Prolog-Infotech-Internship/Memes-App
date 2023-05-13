import React from 'react'
import Card from '../Components/PostCard'
import Navbar from '../Components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'

const Posts = () => {
  return (
    <div>
    <ChakraProvider>
    <Navbar/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </ChakraProvider>
    </div>
  )
}

export default Posts