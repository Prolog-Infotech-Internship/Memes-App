import React from "react";
import Navbar from "../Components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Head from "next/head";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const signin = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [signInformData, setSignInFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {

    if (localStorage.getItem("token")) {
      router.push('/posts')
    }
  }, [])

  const handleChange = (e) => {
    setSignInFormData({ ...signInformData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) =>{
    e.preventDefault();

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKENT_HOST}/api/auth/login`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: signInformData.email, password: signInformData.password }) // body datLink type must match "Content-Type" header
    });
    const json = await response.json()

    if (json.success) {
      localStorage.setItem('token', json.authToken)
      toast.success("You are successfully logged in", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
      setInterval(() => {
        router.push('/posts')
      }, 5000);
    } else {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <ChakraProvider>
      <Head>
        <title>Memes App</title>
      </Head>
      {/* <Navbar position="fixed" /> */}
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
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
        _dark={{
          bg: "#3e3e3e",
        }}
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Welcome</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSignIn}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                _dark={{
                  bg: "gray.800",
                }}
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      variant="filled"
                      type="email"
                      placeholder="Email address" id="email" name="email" value={signInformData.email} onChange={handleChange}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      variant="filled"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password" id="password" name="password" value={signInformData.password} onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    <Link>forgot password?</Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          New to us?{" "}
          <Link href="/signup" color="teal.500">
            Sign Up
          </Link>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default signin;
