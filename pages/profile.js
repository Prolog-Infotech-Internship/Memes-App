import React from "react";
import Navbar from "../Components/Navbar";
import { ChakraProvider } from '@chakra-ui/react'

const profile = () => {
  return (
    <div>
      <ChakraProvider>
        <Navbar />
        Profile
      </ChakraProvider>
      
    </div>
  );
};

export default profile;
