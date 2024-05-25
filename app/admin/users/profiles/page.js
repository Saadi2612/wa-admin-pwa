"use client";

import React, { useState } from "react";

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
  FaCircleExclamation,
  FaCircleCheck,
  FaClock,
  FaFilter,
} from "react-icons/fa6";

const usersData = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    profilePicture: "https://placeimg.com/100/100/people/1",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    verificationStatus: "Verified",
  },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    profilePicture: "https://placeimg.com/100/100/people/2",
    bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    verificationStatus: "Not Verified",
  },
  {
    id: 3,
    name: "Chris Williams",
    email: "chris.williams@example.com",
    profilePicture: "https://placeimg.com/100/100/people/3",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    verificationStatus: "Pending",
  },
  {
    id: 4,
    name: "Jessica Brown",
    email: "jessica.brown@example.com",
    profilePicture: "https://placeimg.com/100/100/people/4",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    verificationStatus: "Verified",
  },
  {
    id: 5,
    name: "Michael Davis",
    email: "michael.davis@example.com",
    profilePicture: "https://placeimg.com/100/100/people/5",
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    verificationStatus: "Pending",
  },
];

const UserProfiles = () => {
  const [users, setUsers] = useState(usersData);
  const [filterValue, setFilterValue] = useState("");

  // function to filter users on the basis of verification status
  const filterUsers = (status) => {
    if (!status) {
      return usersData;
    }
    return usersData.filter(
      (user) =>
        user.verificationStatus.split(" ").join("").toLocaleLowerCase() ===
        status
    );
  };

  const filteredUsers = filterUsers(filterValue);

  const handleFilterChange = (event) => {
    // console.log(event.target.value);
    setFilterValue(event.target.value);
  };

  const checkVerificationStatus = (status) => {
    // console.log(status);
    if (status === "verified") {
      return (
        <Box color={"green.500"}>
          <FaCircleCheck />
        </Box>
      );
    } else if (status === "notverified") {
      return (
        <Box color={"yellow.500"}>
          <FaCircleExclamation />
        </Box>
      );
    } else if (status === "pending") {
      return (
        <Box color={"gray.500"}>
          <FaClock />
        </Box>
      );
    }
  };

  return (
    <Flex direction={"column"} gap={4} w={"full"} h={"full"}>
      <Box color="gray.600" py={4} px={6}>
        <Heading fontFamily={"Manrope"} color={"#A94A9C"}>
          User Profiles
        </Heading>
      </Box>
      <Flex justifyContent={"end"} gap={4} px={6}>
        <Select
          onChange={handleFilterChange}
          icon={<FaFilter />}
          iconSize="sm"
          placeholder="Filter"
          w={"fit-content"}
        >
          <option value="verified">Verified</option>
          <option value="notverified">Not Verified</option>
          <option value="pending">Pending</option>
        </Select>
      </Flex>

      <Flex
        justifyContent={"center"}
        w={"full"}
        h={"full"}
        overflowX={"auto"}
        px={4}
      >
        <TableContainer w={"full"}>
          <Table variant="simple" colorScheme="teal" size="sm">
            <Thead>
              <Tr>
                <Th
                  fontFamily={"Manrope"}
                  borderColor={"rgba(169, 74, 156, 0.5)"}
                >
                  Name
                </Th>
                <Th
                  fontFamily={"Manrope"}
                  borderColor={"rgba(169, 74, 156, 0.5)"}
                >
                  Email
                </Th>
                <Th
                  fontFamily={"Manrope"}
                  borderColor={"rgba(169, 74, 156, 0.5)"}
                >
                  Verification Status
                </Th>
                <Th
                  fontFamily={"Manrope"}
                  borderColor={"rgba(169, 74, 156, 0.5)"}
                >
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredUsers.map((user) => (
                <Tr key={user.id}>
                  <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                    <Flex alignItems={"center"} gap={2}>
                      <Avatar
                        name={user.name}
                        src={user.profilePicture}
                        size={"sm"}
                      />
                      <Text fontWeight={"medium"} color={"gray.700"}>
                        {user.name}
                      </Text>
                    </Flex>
                  </Td>
                  <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                    <Text fontWeight={"medium"} color={"gray.500"}>
                      {user.email}
                    </Text>
                  </Td>
                  <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                    <Flex alignItems={"center"} gap={2}>
                      {checkVerificationStatus(
                        user.verificationStatus
                          .split(" ")
                          .join("")
                          .toLocaleLowerCase()
                      )}

                      <Text>{user.verificationStatus}</Text>
                    </Flex>
                  </Td>
                  <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                    <Flex gap={2}>
                      <Button
                        size={"sm"}
                        color={"#A94A9C"}
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

export default UserProfiles;
