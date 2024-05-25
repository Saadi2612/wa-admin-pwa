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
import {
  FaArrowsSpin,
  FaCircleCheck,
  FaCircleMinus,
  FaClock,
  FaFilter,
} from "react-icons/fa6";

const dummyContracts = [
  {
    contractId: 1,
    freelancer: {
      name: "Alex Johnson",
      skill: "Graphic Design",
      profilePicture: "https://placeimg.com/100/100/people/1",
    },
    client: {
      name: "Big Corp Inc.",
      industry: "Technology",
      profilePicture: "https://placeimg.com/100/100/business/1",
    },
    serviceDescription: "Logo and Branding Package",
    startDate: "2024-01-15",
    dueDate: "2024-02-15",
    status: "Active",
    price: 500,
  },
  {
    contractId: 2,
    freelancer: {
      name: "Maria Garcia",
      skill: "Web Development",
      profilePicture: "https://placeimg.com/100/100/people/2",
    },
    client: {
      name: "StartUp Ventures",
      industry: "E-Commerce",
      profilePicture: "https://placeimg.com/100/100/business/2",
    },
    serviceDescription: "E-commerce Website Development",
    startDate: "2024-03-01",
    dueDate: "2024-04-01",
    status: "Pending",
    price: 2000,
  },
  {
    contractId: 3,
    freelancer: {
      name: "Chris Williams",
      skill: "Copywriting",
      profilePicture: "https://placeimg.com/100/100/people/3",
    },
    client: {
      name: "HealthPlus Ltd.",
      industry: "Healthcare",
      profilePicture: "https://placeimg.com/100/100/business/3",
    },
    serviceDescription: "Product Descriptions and Blog Posts",
    startDate: "2024-02-20",
    dueDate: "2024-03-20",
    status: "Completed",
    price: 750,
  },
];

const Contracts = () => {
  const checkVerificationStatus = (status) => {
    // console.log(status);
    if (status === "completed") {
      return (
        <Box color={"green.500"}>
          <FaCircleCheck />
        </Box>
      );
    } else if (status === "active") {
      return (
        <Box color={"blue.500"}>
          <FaArrowsSpin />
        </Box>
      );
    } else if (status === "pending") {
      return (
        <Box color={"gray.500"}>
          <FaClock />
        </Box>
      );
    } else if (status === "terminated") {
      return (
        <Box color={"red.500"}>
          <FaCircleMinus />
        </Box>
      );
    }
  };

  return (
    <Flex
      direction={"column"}
      gap={4}
      w={"full"}
      h={"full"}
      fontFamily={"Manrope"}
    >
      <Box color="gray.600" py={4} px={6}>
        <Heading fontFamily={"Manrope"} color={"#A94A9C"}>
          Contracts
        </Heading>
      </Box>
      <Flex justifyContent={"end"} gap={4} px={6}>
        <Select
          icon={<FaFilter />}
          iconSize="sm"
          placeholder="Filter"
          w={"fit-content"}
        >
          <option value="completed">Completed</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="terminated">Terminated</option>
        </Select>
      </Flex>

      <Flex
        justifyContent={"center"}
        w={"full"}
        h={"full"}
        overflowX={"auto"}
        px={2}
      >
        <TableContainer w={"full"}>
          <Table variant="simple" colorScheme="teal" size="sm">
            <Thead>
              <Tr>
                <Th
                  fontFamily={"Manrope"}
                  borderColor={"rgba(169, 74, 156, 0.6)"}
                >
                  Title
                </Th>
                <Th
                  fontFamily={"Manrope"}
                  borderColor={"rgba(169, 74, 156, 0.6)"}
                >
                  Freelancer
                </Th>
                <Th
                  fontFamily={"Manrope"}
                  borderColor={"rgba(169, 74, 156, 0.6)"}
                >
                  Client
                </Th>
                <Th
                  fontFamily={"Manrope"}
                  borderColor={"rgba(169, 74, 156, 0.6)"}
                >
                  Start Date
                </Th>
                <Th
                  fontFamily={"Manrope"}
                  borderColor={"rgba(169, 74, 156, 0.6)"}
                >
                  Due Date
                </Th>
                <Th
                  fontFamily={"Manrope"}
                  borderColor={"rgba(169, 74, 156, 0.6)"}
                >
                  Status
                </Th>
                <Th
                  fontFamily={"Manrope"}
                  borderColor={"rgba(169, 74, 156, 0.6)"}
                >
                  Price
                </Th>
                <Th
                  fontFamily={"Manrope"}
                  borderColor={"rgba(169, 74, 156, 0.6)"}
                >
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {dummyContracts.map((contract) => (
                <Tr key={contract.contractId}>
                  <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                    <Text color={"gray.700"} fontWeight={"semibold"}>
                      {contract.serviceDescription}
                    </Text>
                  </Td>

                  <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                    <Flex alignItems={"center"} gap={2}>
                      <Avatar
                        name={contract.freelancer.name}
                        src={contract.freelancer.profilePicture}
                        size={"sm"}
                      />
                      <Flex direction={"column"}>
                        <Text fontWeight={"semibold"} color={"gray.700"}>
                          {contract.freelancer.name}
                        </Text>
                        <Text
                          fontWeight={"light"}
                          fontSize={"sm"}
                          color={"gray.500"}
                        >
                          {contract.freelancer.skill}
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>

                  <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                    <Flex alignItems={"center"} gap={2}>
                      <Avatar
                        name={contract.client.name}
                        src={contract.client.profilePicture}
                        size={"sm"}
                      />
                      <Flex direction={"column"}>
                        <Text fontWeight={"semibold"} color={"gray.700"}>
                          {contract.client.name}
                        </Text>
                        <Text
                          fontWeight={"light"}
                          fontSize={"sm"}
                          color={"gray.500"}
                        >
                          {contract.client.industry}
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>

                  <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                    <Text color={"gray.600"}>{contract.startDate}</Text>
                  </Td>
                  <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                    <Text color={"gray.600"}>{contract.dueDate}</Text>
                  </Td>

                  <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                    <Flex alignItems={"center"} gap={2}>
                      {checkVerificationStatus(
                        contract.status.toLocaleLowerCase()
                      )}

                      <Text>{contract.status}</Text>
                    </Flex>
                  </Td>

                  <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                    <Text color={"gray.600"}>${contract.price}</Text>
                  </Td>

                  <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                    <Flex gap={2}>
                      <Button
                        size={"sm"}
                        color={"#a94a9c"}
                        bg={"rgba(169, 74, 156, 0.2)"}
                        _hover={{ bg: "rgba(169, 74, 156, 0.3)" }}
                        _active={{ transform: "scale(0.95)" }}
                      >
                        Details
                      </Button>
                      <Button
                        size={"sm"}
                        color={"#399FA2"}
                        bg={"rgba(95, 196, 199, 0.2)"}
                        _hover={{ bg: "rgba(95, 196, 199, 0.3)" }}
                        _active={{ transform: "scale(0.95)" }}
                      >
                        Contracts
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
};

export default Contracts;
