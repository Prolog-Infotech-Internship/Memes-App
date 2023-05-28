import React, { use } from "react";
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
import Navbar2 from "../Components/Navbar2";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Uploadmeme = ({username,userid,createMemeUrl}) => {
  const [signined, setsignined] = useState(true);
  const router = useRouter();
  const [memes, setMemes] = useState([]);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [memeUrl, setMemeUrl] = useState(createMemeUrl);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setsignined(false);
      
      router.push("/signin");
    } else {
      setsignined(true);
    }
    getMemes();
    console.log(createMemeUrl)
  }, []);

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
  const getMemes = async () => {
    try {
      await setName(username)
      const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/getmemes`);
      setMemes(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleLike = async (id) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/likememe/${id}`);
      getMemes();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/postmeme`, {
        name,
        userid,
        description,
        memeUrl,
      });
      setName("");
      setMemeUrl("");
      setDescription("");
      getMemes();
      toast.success("Meme Uploaded Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Head>
        <title>Memes App</title>
      </Head>
      <ChakraProvider>
      <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        {/* {signined ? <Navbar2 /> : <Navbar />} */}
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
                <FormLabel htmlFor="description">Select Meme:</FormLabel>
                <Input
                  className="mb-3"
                  variant="filled"
                  value={memeUrl}
                  onChange={(e) => setMemeUrl(e.target.value)}
                  required
                  placeholder="Enter Meme URL"
                  // variant="secondary"
                  type="url"
                // size="sm"
                />
                <div>
                  <FormLabel htmlFor="description">Description:</FormLabel>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    variant="filled"
                    placeholder="Here is a sample placeholder"
                    type="text"
                  />
                </div>
                <div>
                  <FormLabel htmlFor="name">Name:</FormLabel>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    variant="filled"
                    placeholder="Enter your name"
                    type="text"
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



export default Uploadmeme;
