import React from "react";
import {
  Avatar,
  Text,
  Image,
  Box,
  Heading,
  IconButton,
  Button,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { BiChat } from "react-icons/bi";
import { BiShare } from "react-icons/bi";

const MemeCard = () => {
    const [Like, setLike] = useState(false);
   const handleLike =() => {
    setLike(!Like)
    console.log({Like})
   }
  return (
    <div>
      <Flex
        mt={0}
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={25}
        w="full"
        height="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          rounded="lg"
          shadow="md"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          maxW="2xl"
        >
          <Card maxW="lg">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />

                  <Box>
                    <Heading size="sm">Segun Adebayo</Heading>
                    <Text>Creator, Chakra UI</Text>
                  </Box>
                </Flex>
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                  icon={<BsThreeDotsVertical />}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                With Chakra UI, I wanted to sync the speed of development with
                the speed of design. I wanted the developer to be just as
                excited as the designer to create a screen.
              </Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <Button flex="1" variant="ghost" leftIcon={Like ? <FaThumbsUp/> : <FaRegThumbsUp />} onClick={handleLike}>
                Like
              </Button>
              <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                Comment
              </Button>
              <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                Share
              </Button>
            </CardFooter>
          </Card>
        </Box>
      </Flex>
    </div>
  );
};

export default MemeCard;
