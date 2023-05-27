import React from "react";
import { ChakraProvider, Stack, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar2 from "../Components/Navbar2";
import { useState } from "react";
import MemeTempCard from "../Components/MemeTempCard";
import axios from "axios";
import { Grid, GridItem } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import SelectedMeme from "../Components/SelectedMeme";

const Creatememe = ({ token }) => {
  const [selectedtemplet, Setselectedtemplet] = useState(null);
  const [memes, setMemes] = useState([]);
  // const [selected, setselected] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.imgflip.com/get_memes");
        setMemes(response.data.data.memes);
        console.log(memes);
      } catch (error) {
        console.error(error);
      }
    };
    if (!localStorage.getItem("token")) {
      router.push("/signin");
    } else {
    }
    fetchData();
  }, []);

  console.log(token);
  return (
    <div>
      <Stack
        p="2"
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        w="full"
        minH="100vh"
      >
        <Head>
          <title>Memes App</title>
        </Head>
        <ChakraProvider>
          <div>
            {selectedtemplet && (
              <SelectedMeme meme={selectedtemplet} Setselectedtemplet={Setselectedtemplet} />
            )}
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
              {!selectedtemplet &&
                memes.map((meme) => (
                  <MemeTempCard
                    key={meme.id}
                    meme={meme}
                    // handleClick={handleButtonClick}
                    Setselectedtemplet={Setselectedtemplet}
                  />
                ))}
            </SimpleGrid>
          </div>
        </ChakraProvider>
      </Stack>
    </div>
  );
};

export default Creatememe;
