"use client";
import {
  Container,
  Heading,
  Grid,
  Image,
  Box,
  GridItem,
  Text,
  Center,
} from "@chakra-ui/react";
import Avatar from "@/components/Avatar";
import Name from "@/components/Name";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
const moment = require("moment");

const baseUrl = "https://baba-mandef.onrender.com/api/v1/";

export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState({});
  const fetchPostDetails = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}blog/post?slug=${router.query.slug}`
      );
      console.log(response.data);
      setPost(response.data[0]);
    } catch (e) {
      console.error("Error", e);
      throw e;
    }
  };
  const handleMarkup = (html) => {
    return { __html: html };
  };

  useEffect(() => {
    if (router.isReady) {
      fetchPostDetails();
    }
  }, [router.isReady]);

  return (
    <>
      <Center mx="5%" mb="80px" mt="20">
        <Grid>
          <GridItem>
            <Avatar />
          </GridItem>
          <GridItem>
            <Name />
          </GridItem>
          <GridItem>
            <Center>
              <Container
                maxW={{ base: "3xl", md: "3xl", sm: "md" }}
                mt={"20px"}
              >
                <Center>
                  <Grid>
                    <GridItem>
                      <Text
                        textAlign={"center"}
                        color={"#ff7624"}
                        fontSize={{
                          base: "18px",
                          md: "18px",
                          lg: "18px",
                          sm: "13px",
                        }}
                        fontWeight={"bold"}
                      >
                        {moment(post.created_at).format("MMMM Do YYYY")}
                      </Text>
                    </GridItem>
                    <GridItem mt={"30px"}>
                      <Heading textAlign={"center"}>{post.title}</Heading>
                    </GridItem>
                    <GridItem mt={"20px"}>
                      <Image src={post.banner} alt="banner" borderRadius="lg" />
                    </GridItem>
                    <GridItem mt={"30px"}>
                      <Box
                        fontSize={{
                          base: "18px",
                          md: "18px",
                          lg: "18px",
                          sm: "13px",
                        }}
                        maxW={{
                          base: "2xl",
                          md: "lg",
                          lg: "3xl",
                          sm: "md",
                        }}
                        m="auto"
                        as="div"
                        textAlign={"justify"}
                        dangerouslySetInnerHTML={handleMarkup(post.post)}
                      ></Box>
                    </GridItem>
                  </Grid>
                </Center>
              </Container>
            </Center>
          </GridItem>
        </Grid>
      </Center>
    </>
  );
}
