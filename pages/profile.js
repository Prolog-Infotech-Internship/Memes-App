import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Components/Navbar";
import {
  ChakraProvider,
  Img,
  Flex,
  Box,
  Spacer,
  Input,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar2 from "../Components/Navbar2";
import { Button, ButtonGroup } from "@chakra-ui/react";
import User from "../models/User";
import { Heading } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useContext } from 'react';
import AppContext from "../AppContext";

const Profile = () => {
  const { userprofilepic, username, useremail, userid } = useContext(AppContext);
  const [signined, setsignined] = useState(true);
  const router = useRouter();
  const [Edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setsignined(false);

      router.push("/signin");
    } else {
      setsignined(true);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.clear();
    router.push("/signin");
  };
  const handleEdit = () => {
    setEdit(!Edit);
    setInputValue('')
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser/${userid}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userprofile : inputValue })
    });
    const json = await response.json();

    if(json.success){
      toast.success("User Profile Picture Update Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setEdit(!Edit);
      setInputValue('')
    }else{
      toast.error("Error Occured", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Stack
      // p="2"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      w="full"
      minH="100vh"
    >
      <Head>
        <title>Memes App</title>
      </Head>
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
      <Box marginInline="10" marginTop="5">
        <Card shadow="2xl">
          <CardHeader>
            <Flex>
              <Heading size="md" fontFamily="Montserrat,sans-serif">
                My Profile
              </Heading>
              <Spacer />
              <Button colorScheme="red" onClick={handleSignOut}>
                Sign Out
              </Button>
            </Flex>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  <Flex>
                    <Img
                      src={userprofilepic}
                      alt="Image"
                      style={{ width: "70px", height: "70px" }}
                    />
                    {Edit && (
                      <>
                        <Input
                          value={inputValue}
                          onChange={handleInputChange}
                          marginBlock="auto"
                          marginInline="5"
                          placeholder="Enter Image link"
                          size="md"
                        />
                        <Button
                          marginTop="10px"
                          colorScheme="green"
                          // type="submit"
                          onClick={handleFormSubmit}
                        >
                          Submit
                        </Button>
                        <Button
                          marginTop="10px"
                          marginLeft="10px"
                          colorScheme="red"
                          onClick={handleEdit}
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                    {!Edit && (
                      <Button
                        marginTop="11px"
                        margin="auto"
                        colorScheme="pink"
                        onClick={handleEdit}
                      >
                        Edit
                      </Button>
                    )}
                  </Flex>
                </Heading>
                <Text pt="2" fontSize="sm">
                  This Profile picture is set as defailt you can change if you
                  wish
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Name
                </Heading>
                <Text pt="2" fontSize="sm">
                  {username}
                </Text>

              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Email
                </Heading>
                <Text pt="2" fontSize="sm">
                  {useremail}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Stack>
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
