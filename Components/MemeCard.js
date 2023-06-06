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
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { BiChat } from "react-icons/bi";
import { BiShare } from "react-icons/bi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const MemeCard = ({ meme, handleLike, handleReportMeme, liked, reported }) => {
  const [userProfilePic, setUserProfilePic] = useState(null);

  useEffect(() => {
    const fetchUserProfilePic = async () => {
      if (!meme.userId) {
        return; // Handle the case when userId is not available
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser/${meme.userId}`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const json = await response.json();

      setUserProfilePic(json.userpic)
    }

    fetchUserProfilePic();
  }, [meme.userId])

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
                    name="Profile Pic"
                    src={userProfilePic}
                  />

                  <Box>
                    <Heading size="sm">{meme.name}</Heading>
                    <Text>{new Date(meme.date).toLocaleString()}</Text>
                  </Box>
                </Flex>
                <Menu>
                  {/* <MenuButton as={Button} leftIcon={<HiDotsVertical />}  variant="ghost" /> */}
                  <MenuButton
                    as={IconButton}
                    icon={<BsThreeDotsVertical />}
                    variant="ghost"
                  />
                  <MenuList minWidth="150px">
                    <MenuItem onClick={() => { !reported && handleReportMeme(meme._id); }}>{reported ? "Reported" : "Report Meme"}</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>{meme.description}</Text>
            </CardBody>
            <Image objectFit="cover" src={meme.memeUrl} alt="Chakra UI" />

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
                leftIcon={liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
                onClick={() => {
                  handleLike(meme._id);
                }}
              >
                Like {meme.likes.length}
              </Button>
              <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                Comment
              </Button>
              {/* <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                Share
              </Button> */}
            </CardFooter>
          </Card>
        </Box>
      </Flex>
    </div>
  );
};

export default MemeCard;
