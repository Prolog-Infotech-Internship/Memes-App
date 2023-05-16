import React from "react";
import Navbar from "../Components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
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

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <ChakraProvider>
      <Navbar position="fixed" />
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
            <form>
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
                  <Input variant="filled" placeholder="First Name" />
                  <Input variant="filled" placeholder="Last Name" />
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
                      type="email"
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
                      placeholder="Password"
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

export default signup;
