import React from "react";
import {
  Card,
  ChakraProvider,
  Input,
  Textarea,
  Flex,
  CardBody,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const uploadmeme = () => {
  const [formData, setFormData] = useState({
    image: "",
    description: "",
    name: "",
    date: "",
});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const currentDate = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    setFormData((prevFormData) => ({ ...prevFormData, date: currentDate }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      image: "",
      description: "",
      name: "",
      date: "",
    });
  };
  return (
    <div>
      <ChakraProvider>
        <Navbar />
        <Flex
          mt={0}
          bg="#edf3f8"
          _dark={{
            bg: "#3e3e3e",
          }}
          p={25}
          w="full"
          height="90vh"
          alignItems="center"
          justifyContent="center"
        >
          <Card width={1000}>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <div>
                  <FormLabel htmlFor="description">Select Meme:</FormLabel>
                  <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Control
                      variant="secondary"
                      id="image"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      type="file"
                      size="lg"
                    />
                  </Form.Group>
                </div>
                <div>
                  <FormLabel htmlFor="description">Description:</FormLabel>
                  <Textarea
                    variant="filled"
                    placeholder="Here is a sample placeholder"
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <FormLabel htmlFor="name">Name:</FormLabel>
                  <Input
                    variant="filled"
                    placeholder="Enter your name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                </div>
                <Button marginTop={4} colorScheme="blue" type="submit">
                  Submit
                </Button>
              </form>
            </CardBody>
          </Card>
        </Flex>
      </ChakraProvider>
    </div>
  );
};

export default uploadmeme;
