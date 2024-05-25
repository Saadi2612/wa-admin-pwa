"use client";

import React from "react";

import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Select,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import StackedAreaChart from "@/components/charts/StackedAreaChart";
import { hankenGrotesk } from "@/utils";
import useAuth from "@/utils/useAuth";

const Admin = () => {
  return (
    <Flex direction={"column"} gap={2} w={"full"} h={"full"}>
      <Box color="gray.600" py={4} px={6}>
        <Heading fontFamily={"Manrope"} color={"#A94A9C"}>
          Dashboard
        </Heading>
      </Box>

      <Box px={6} mt={2}>
        <Heading fontFamily={"Manrope"} size={"lg"} color={"gray.600"}>
          Stats
        </Heading>
      </Box>

      {/* Stats */}
      <Flex w="full" py={2} px={6} gap={4}>
        <Flex direction={"column"} w="full">
          <Text color={"gray.500"} fontWeight={"semibold"}>
            This Week
          </Text>
          <StatGroup
            w="full"
            p={4}
            gap={4}
            border={"1px solid"}
            borderColor={"gray.200"}
            rounded={"lg"}
          >
            <Stat
              mr={6}
              p={4}
              bg={"rgba(95, 196, 199, 0.2)"}
              rounded={"lg"}
              color={"gray.800"}
              position={"relative"}
              overflow={"hidden"}
            >
              <Box
                w={80}
                position={"absolute"}
                bottom={-10}
                left={"50%"}
                transform={"translateX(-15%)"}
              >
                <Image src="/assets/dotted-waves.svg" />
              </Box>
              <StatLabel whiteSpace={"nowrap"}>New Freelancers</StatLabel>
              <StatNumber>172</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>
            <Stat
              mx={6}
              p={4}
              bg={"rgba(95, 196, 199, 0.2)"}
              rounded={"lg"}
              color={"gray.800"}
              position={"relative"}
              overflow={"hidden"}
            >
              <Box
                w={80}
                position={"absolute"}
                bottom={-10}
                left={"50%"}
                transform={"translateX(-15%)"}
              >
                <Image src="/assets/dotted-waves.svg" />
              </Box>
              <StatLabel whiteSpace={"nowrap"}>New Clients</StatLabel>
              <StatNumber>45</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                9.05%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Flex>

        <Flex direction={"column"} w="full">
          <Text color={"gray.500"} fontWeight={"semibold"}>
            This Month
          </Text>
          <StatGroup
            w="full"
            p={4}
            gap={4}
            border={"1px solid"}
            borderColor={"gray.200"}
            rounded={"lg"}
          >
            <Stat
              mr={6}
              p={4}
              bg={"rgba(95, 196, 199, 0.2)"}
              rounded={"lg"}
              color={"gray.800"}
              position={"relative"}
              overflow={"hidden"}
            >
              <Box
                w={80}
                position={"absolute"}
                bottom={-10}
                left={"50%"}
                transform={"translateX(-15%)"}
              >
                <Image src="/assets/dotted-waves.svg" />
              </Box>
              <StatLabel whiteSpace={"nowrap"}>New Freelancers</StatLabel>
              <StatNumber>845</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                18.13%
              </StatHelpText>
            </Stat>
            <Stat
              mx={6}
              p={4}
              bg={"rgba(95, 196, 199, 0.2)"}
              rounded={"lg"}
              color={"gray.800"}
              position={"relative"}
              overflow={"hidden"}
            >
              <Box
                w={80}
                position={"absolute"}
                bottom={-10}
                left={"50%"}
                transform={"translateX(-15%)"}
              >
                <Image src="/assets/dotted-waves.svg" />
              </Box>
              <StatLabel whiteSpace={"nowrap"}>New Clients</StatLabel>
              <StatNumber>320</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                15.44%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Flex>
      </Flex>

      {/* Graph */}

      <Flex
        w={"calc(100vw-100px)"}
        h={"full"}
        p={6}
        mx={6}
        my={2}
        border={"1px solid"}
        borderColor={"gray.200"}
        rounded={"lg"}
        overflowX={"auto"}
      >
        <StackedAreaChart />
      </Flex>
    </Flex>
  );
};

export default Admin;
