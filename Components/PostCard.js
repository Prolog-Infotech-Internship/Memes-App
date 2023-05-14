
import React from "react";
import {Flex,Box,chakra, Link, Image,CardFooter,Button,Card} from '@chakra-ui/react'
import { BiLike } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import { BiShare } from "react-icons/bi";

const PostCard = () => {
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
        <Card maxW="lg">
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
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="Article"
          />

          <Box p={6}>
            <Box>
              {/* <chakra.span
                fontSize="xs"
                textTransform="uppercase"
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}
              >
                Product
              </chakra.span> */}
              {/* <Link
                display="block"
                color="gray.800"
                _dark={{
                  color: "white",
                }}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
                _hover={{
                  color: "gray.600",
                  textDecor: "underline",
                }}
              >
                I Built A Successful Blog In One Year
              </Link> */}
              <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie parturient et sem ipsum volutpat vel. Natoque sem et
                aliquam mauris egestas quam volutpat viverra. In pretium nec
                senectus erat. Et malesuada lobortis.
              </chakra.p>
            </Box>

            <Box mt={4}>
              <Flex alignItems="center">
                <Flex alignItems="center">
                  <Image
                    h={10}
                    fit="cover"
                    rounded="full"
                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    alt="Avatar"
                  />
                  <Link
                    mx={2}
                    fontWeight="bold"
                    color="gray.700"
                    _dark={{
                      color: "gray.200",
                    }}
                  >
                    Jone Doe
                  </Link>
                </Flex>
                <chakra.span
                  mx={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.300",
                  }}
                >
                  21 SEP 2015
                </chakra.span>
              </Flex>
            </Box>
            <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
            Like
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
            Comment
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
          </Box>
        </Box>
        </Card>
      </Flex>
    </div>
  );
};

export default PostCard
