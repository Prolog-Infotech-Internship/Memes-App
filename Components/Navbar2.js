import React from "react";
import Link from "next/link";
import {
  Flex,
  Box,
  chakra,
  HStack,
  VStack,
  Button,
  IconButton,
  SwitchIcon,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useColorMode } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Navbar2 = ({position}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("dark", "light");
  const { toggleColorMode: toggleMode } = useColorMode();
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        zIndex={1}
        position={position}
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
            ></chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              MemesApp
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
              <Link href="/posts">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link href="/uploadmeme">
                <Button variant="ghost">Upload Meme</Button>
              </Link>
              <Link href="/creatememe">
                <Button variant="ghost">Create Meme</Button>
              </Link>
              <Link href="/profile">
                <Button variant="ghost">Profile</Button>
              </Link>
              <Button variant="ghost" onClick={toggleColorMode}>
                {colorMode === "light" ? <FaMoon /> : <FaSun />}
              </Button>
            </HStack>
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
                <Button w="full" variant="ghost">
                  <AiOutlineClose
                    size={25}
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
                </Button>

                <Link href="/posts">
                  <Button w="full" variant="ghost">
                    Home
                  </Button>
                </Link>
                <Link href="/uploadmeme">
                  <Button w="full" variant="ghost">
                    Upload Meme
                  </Button>
                </Link>
                <Link href="/creatememe">
                  <Button w="full" variant="ghost">
                    Create Meme
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button w="full" variant="ghost">
                    Profile
                  </Button>
                </Link>

                {/* <IconButton
                  size="md"
                  fontSize="lg"
                  aria-label={`Switch to ${text} mode`}
                  variant="ghost"
                  color="current"
                  ml={{
                    base: "0",
                    md: "3",
                  }}
                  onClick={toggleMode}
                  icon={<SwitchIcon />}
                /> */}
                <Button variant="ghost" onClick={toggleColorMode}>
                  {colorMode === "light" ? <FaMoon /> : <FaSun />}
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar2;
