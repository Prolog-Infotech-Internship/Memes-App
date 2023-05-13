import React from 'react'
import {Flex,Box,chakra, HStack, VStack, Button,IconButton} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        position="fixed"
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              {/* <Logo />
              <VisuallyHidden>Choc</VisuallyHidden> */}
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Choc
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Create Meme</Button>
              <Button variant="ghost">Profile</Button>
              <Button variant="ghost">Sign in</Button>
            </HStack>
            {/* <Button colorScheme="brand" size="sm">
              Get Started
            </Button> */}
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <AiOutlineClose
                  size={25}
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Home
                </Button>
                <Button w="full" variant="ghost">
                  Create Meme
                </Button>
                <Button w="full" variant="ghost">
                  Profile
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;