import React from "react";
import Navbar from "../Components/Navbar";
import { ChakraProvider, Img } from '@chakra-ui/react'
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar2 from "../Components/Navbar2";
import { Button, ButtonGroup } from '@chakra-ui/react'
import User from "../models/User";

const Profile = ({token, userprofilepic}) => {
  const [signined, setsignined] = useState(true);
  const router = useRouter();
  useEffect(() => {
    console.log(userprofilepic)
    if (!localStorage.getItem("token")) {
      setsignined(false);
      
      router.push('/signin')
    }
    else{
      setsignined(true);
    }
  }, [])

  const handleSignOut = () => {
    localStorage.clear();
    router.push('/signin')
  }
  return (
    <div>
      <ChakraProvider>
      <Head>
        <title>Memes App</title>
      </Head>
      {/* {signined ? <Navbar2 /> : <Navbar />} */}
        Profile
        <Img src={userprofilepic} alt="Image" style={{width:"70px", height:"70px"}}/>
        <Button colorScheme='blue' onClick={handleSignOut}>Sign Out</Button>
        
      </ChakraProvider>
      
    </div>
  );
};

// export async function getServerSideProps(context) {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI)
//   }
  
//     const base64Url = token.split('.')[1];
//     const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
//       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));


//   return {
//     props: { electronicproducts: JSON.parse(JSON.stringify(electronicitems)) , stockFlag: stockFlag }, // will be passed to the page component as props
//   }
// }
export default Profile;
