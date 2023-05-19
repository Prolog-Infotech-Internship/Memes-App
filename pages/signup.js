import React from "react";
import Navbar from "../Components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  Flex,
  Grid,
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const [signUpFormData, setSignUpFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  useEffect(() => {

    if (localStorage.getItem("token")) {
      router.push('/posts')
    }
  }, [])


  const handleChange = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  };


  const handleSignUp = async (e)=>{
    e.preventDefault();

    const fullName = signUpFormData.fname+signUpFormData.lname;

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/auth/createuser`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: fullName, email: signUpFormData.email, password: signUpFormData.password }) // body datLink type must match "Content-Type" header
    });


    const json = await response.json()

    console.log(json)

    if (json.success) {
      localStorage.setItem('token', json.authToken)
      toast.success("User Created Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push('/posts')
    } else {
      toast.error(json.error, {
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
        p={8}
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
          <form onSubmit={handleSignUp}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                _dark={{
                  bg: "gray.800",
                }}
                boxShadow="md"
              >
                <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                {/* <Flex minWidth="12" alignItems="center" gap="2"> */}
                  <Input variant="filled" id="fname" name="fname" value={signUpFormData.fname} onChange={handleChange} placeholder="First Name" />
                  <Input variant="filled" id="lname" name="lname" value={signUpFormData.lname} onChange={handleChange} placeholder="Last Name" />
                {/* </Flex> */}
                </Grid>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      variant="filled"
                      type="email" id="email" name="email" value={signUpFormData.email} onChange={handleChange}
                      placeholder="email address"
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
                      placeholder="Password" id="password" name="password" value={signUpFormData.password} onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Sign Up
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          Already User?{" "}
          <Link color="teal.500" href="/signin">
            Sign In
          </Link>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Signup;
