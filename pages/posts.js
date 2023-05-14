import React from 'react'
import PostCard from '../Components/PostCard'
import Navbar from '../Components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import MemeCard from '../Components/MemeCard'

const Posts = () => {
  return (
    <div>
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
  )
}

export default Posts