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

const MemeCard = ({ meme, handleLike }) => {
  const [Like, setLike] = useState(false);
  const handleLikebutton = () => {
    setLike(!Like);
    console.log({ Like });
  };
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
                    <Heading size="sm">{meme.name}</Heading>
                    <Text>{new Date(meme.date).toLocaleString()}</Text>
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
              <Text>{meme.description}</Text>
            </CardBody>
            <Image
              objectFit="cover"
              src={meme.memeUrl}
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
              <Button
                flex="1"
                variant="ghost"
                leftIcon={Like ? <FaThumbsUp /> : <FaRegThumbsUp />}
                onClick={() => {
                  handleLike(meme._id);
                  handleLikebutton();
                }}
              >
                Like {meme.likes}
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
