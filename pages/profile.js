import React from "react";
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

const Profile = ({ token, userprofilepic, username, useremail }) => {
  const [signined, setsignined] = useState(true);
  const router = useRouter();
  const [Edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(userprofilepic);
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
    console.log(Edit);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    setEdit(!Edit);
  };
  return (
    <Stack
      // p="2"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      w="full"
      minH="100%"
    >
      <Head>
        <title>Memes App</title>
      </Head>
      <Box marginInline="10" marginTop="5">
        <Card shadow="2xl">
          <CardHeader>
            <Flex>
              <Heading size="md" fontFamily="Montserrat,sans-serif">
                My Profile
              </Heading>
              <Spacer />
              <Button colorScheme="blue" onClick={handleSignOut}>
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
                          margin="auto"
                          colorScheme="pink"
                          // type="submit"
                          onClick={handleFormSubmit}
                        >
                          Submit
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
