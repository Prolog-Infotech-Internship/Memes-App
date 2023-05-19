import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  Divider,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";

const MemeTempCard = ({data}) => {
  return (
      <Card maxW="sm" borderColor='gray.800' >
        <CardBody>
          <Image
            src={data.url}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{data.name}</Heading>
            {/* <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text> */}
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Edit 
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
  );
};

export default MemeTempCard;
