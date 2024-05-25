"use client";

import React, { useState } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const isEmailError = email === "";
  //   const isPassError = password.length < 8;

  return (
    <Grid templateColumns="repeat(2, 1fr)" h="100dvh" placeItems={"center"}>
      <GridItem w="100%" p={6}>
        <Box px={10}>
          <Image src="/assets/WA-logo.png" fit={"cover"} w={200} mx="auto" />
        </Box>
        <Box w="100%" p={10}>
          <Image
            src="/assets/Sign-up-amico.svg"
            fit="cover"
            w="80%"
            mx={"auto"}
          />
        </Box>
      </GridItem>

      <GridItem
        display={"grid"}
        placeItems={"center"}
        // bg="#A94A9C"
        w="100%"
        h="full"
        p={6}
      >
        <Flex
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          w="full"
          p={6}
          rounded="lg"
          border={"1px solid rgba(95, 196, 199, 0.6)"}
          ring={"none"}
          outline={"none"}
          _focusWithin={{
            ring: "none",
            outline: "none",
            border: "1px solid rgba(95, 196, 199, 1)",
            shadow: "0 10px 30px rgba(95, 196, 199, 0.2)",
          }}
          transition={"all 0.3s ease"}
        >
          <FormControl className="space-y-6" maxW={"lg"}>
            <Box>
              <Heading as="h1" size="xl" noOfLines={1}>
                Create Account
              </Heading>
            </Box>
            <Flex flexDirection="column">
              <FormLabel htmlFor="email">Name</FormLabel>
              <Input
                type="text"
                border="1px solid rgba(169, 74, 156, 0.4)"
                _focus={{
                  ring: "none",
                  outline: "none",
                  border: "1px solid #A94A9C",
                }}
                _hover={{
                  ring: "none",
                  outline: "none",
                  border: "1px solid #A94A9C",
                }}
              />
              {/* {!isEmailError ? (
                <FormHelperText>Enter your email</FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )} */}
            </Flex>
            <Flex flexDirection="column">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                border="1px solid rgba(169, 74, 156, 0.4)"
                _focus={{
                  ring: "none",
                  outline: "none",
                  border: "1px solid #A94A9C",
                }}
                _hover={{
                  ring: "none",
                  outline: "none",
                  border: "1px solid #A94A9C",
                }}
              />
              {/* {!isEmailError ? (
                <FormHelperText>Enter your email</FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )} */}
            </Flex>
            <Flex flexDirection="column">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                border="1px solid rgba(169, 74, 156, 0.4)"
                _focus={{
                  ring: "none",
                  outline: "none",
                  border: "1px solid #A94A9C",
                }}
                _hover={{
                  ring: "none",
                  outline: "none",
                  border: "1px solid #A94A9C",
                }}
              />
              {/* {!isPassError ? (
                <FormHelperText>Enter your email</FormHelperText>
              ) : (
                <FormErrorMessage>
                  Password must be at least 8 characters.
                </FormErrorMessage>
              )} */}
            </Flex>

            <Button
              w="100%"
              bg="#A94A9C"
              color={"white"}
              _hover={{ bg: "#5FC4C7", color: "black" }}
              _active={{
                transform: "scale(0.98)",
                transition: "all 0.3s ease",
              }}
            >
              Create
            </Button>
          </FormControl>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default SignUp;
