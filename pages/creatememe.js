import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";

const creatememe = () => {
  return (
    <div>
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
      CreateMeme
    </div>
  );
};

export default creatememe;
