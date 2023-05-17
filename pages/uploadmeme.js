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
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useRouter } from "next/router";

const uploadmeme = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    image: null,
    description: "",
    name: "",
    date: "",
  });

  useEffect(() => {

    if (!localStorage.getItem("token")) {
      router.push('/signin')
    }
  }, [])
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
      const currentDate = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      setFormData((prevFormData) => ({ ...prevFormData, date: currentDate }));
    }
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
      <Head>
        <title>Memes App</title>
      </Head>
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
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleChange}
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
                <div></div>
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
