"use client";

import React, { useEffect, useState } from "react";
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
import { BACKEND_URL } from "@/constants";

import { useRouter, redirect } from "next/navigation";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      redirect("/admin");
    }
  }, []);

  // const handleAdminLogin = async () => {
  //   try {
  //     const body = {
  //       username: username,
  //       password: password,
  //     };
  //     console.log(body);

  //     const response = await fetch(`${BACKEND_URL}auth/admin-login/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });

  //     const responseJson = await response.json();
  //     console.log(responseJson);
  //     if (responseJson.success) {
  //       const token = responseJson.data.token;
  //       localStorage.setItem("token", token);
  //       router.push("/admin");
  //       console.log(localStorage.getItem("token"));
  //     } else {
  //       console.error("Login failed:", responseJson.message);
  //     }
  //   } catch (e) {
  //     console.error("Error:", e);
  //   }
  // };

  const handleAdminLogin = () => {
    localStorage.setItem("user", username);
    localStorage.setItem("password", password);
    router.push("/admin");
  };

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      w="full"
      h="100dvh"
      placeItems={"center"}
    >
      <GridItem w="100%" p={6}>
        <Box px={10}>
          <Image src="/assets/WA-Logo.svg" fit={"cover"} w={200} mx="auto" />
        </Box>
        <Box w="100%" p={10}>
          <Image
            src="/assets/Login-amico.svg"
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
                Admin Login
              </Heading>
            </Box>
            <Flex flexDirection="column">
              <FormLabel htmlFor="email">username</FormLabel>
              <Input
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleAdminLogin}
              w="100%"
              bg="#A94A9C"
              color={"white"}
              _hover={{ bg: "#5FC4C7", color: "black" }}
              _active={{
                transform: "scale(0.98)",
                transition: "all 0.3s ease",
              }}
            >
              Login
            </Button>
          </FormControl>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Login;
