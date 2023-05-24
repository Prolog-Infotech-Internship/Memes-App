import React from "react";
import { Card, Center, Button, Image, Box } from "@chakra-ui/react";

const SelectedMeme = ({ meme}) => {
  return (
    <Center key={meme.id}>
      <Card
        maxW="sm"
        shadow="2xl"
        borderRadius="lg"
        border={null}
        overflow="hidden"
        height="480px"
        width="350px"
        marginBottom={10}
      >
        <Image src={meme.url} alt={meme.name} height="350px" width="350px" />
        <Box pt="3" paddingInline={6} height="150px">
          <Box fontWeight="bold" fontSize="xl" mb={2} noOfLines={2}>
            {meme.name}
          </Box>
          {/* <Divider margin={3} /> */}
          {/* <Button variant="solid" colorScheme="teal" onClick={()=>{Setselectedtemplet(meme)}}>
            Edit
          </Button> */}
        </Box>
      </Card>
    </Center>
  );
};

export default SelectedMeme;
