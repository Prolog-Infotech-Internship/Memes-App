import React from "react";
import { Card, Center, Button, Image, Box, Input } from "@chakra-ui/react";
import { useState } from "react";

const SelectedMeme = ({ meme, Setselectedtemplet }) => {
  const [form, setform] = useState({
    template_id: meme.id,
    username: "NaitikPatel1",
    password: "Naitik@123",
    boxes: [],
  });

  console.log(meme);
  const GenerateMeme = () => {
    
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        Setselectedtemplet({ ...meme, url: data.data.url });
      });
  };
  return (
    <Center key={meme.id} alignItems="center" justifyContent="center">
      <Card
        maxW="md"
        shadow="2xl"
        borderRadius="lg"
        border={null}
        overflow="hidden"
        // height="full"
        // width="full"
        marginBottom={10}
        padding="2"
      >
        <Image src={meme.url} alt={meme.name} height="550px" width="450px" />
        <Box pt="3" paddingInline={6}>
          <Box fontWeight="bold" fontSize="xl" mb={2} noOfLines={2} textAlign="center">
            {meme.name}
          </Box>
        </Box>
        {[...Array(meme.box_count)].map((_, index) => (
          <Input
            variant="filled"
            size="lg"
            marginBlock="2"
            key={index}
            type="email"
            placeholder={`Meme Caption ${index + 1}`}
            onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[index] = { text: e.target.value };
              setform({ ...form, boxes: newBoxes });
            }}
          />
        ))}
        <Button
          colorScheme='teal'
          marginTop="2"
          marginBottom="2"
          size="lg"
          onClick={GenerateMeme}
        >
          {" "}
          Generate{" "}
        </Button>
        
        <Button
          colorScheme='linkedin'
          size="lg"
          onClick={() => {
            Setselectedtemplet(null);
          }}
        >
          {" "}
          Back{" "}
        </Button>
      </Card>
    </Center>
  );
};

export default SelectedMeme;
