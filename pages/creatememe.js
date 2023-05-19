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

const Creatememe = ({token}) => {
  const [templet, settemplet] = useState([]);
  const [memes, setMemes] = useState([]);
  const [signined, setsignined] = useState(true);
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
      setsignined(false);
      router.push("/signin");
    } else {
      setsignined(true);
    }
    fetchData();
    
  }, []);
  
  console.log(token)
  return (
    <div>
      <Stack
        p={10}
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        w="full"
        height="full"
      >
        <Head>
          <title>Memes App</title>
        </Head>
        <ChakraProvider>
          {/* {signined ? <Navbar2 /> : <Navbar />} */}
          {/* <Heading marginTop={10} textAlign="Center" size="lg">
            Memes
          </Heading> */}
          <div>
            {/* <Stack marginInline={20} marginTop={10}>
              <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                {memes.map((meme) => (
                  <MemeTempCard key={meme.id} data={meme} />
                ))}
              </Grid>
            </Stack> */}
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
              {memes.map((meme) => (
                <MemeTempCard key={meme.id} meme={meme} />
              ))}
            </SimpleGrid>
          </div>
        </ChakraProvider>
      </Stack>
    </div>
  );
};

export default Creatememe;