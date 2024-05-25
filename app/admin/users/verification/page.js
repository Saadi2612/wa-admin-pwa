"use client";

import React, { useEffect, useRef, useState } from "react";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Select,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

import { FaCalendarAlt, FaSearch } from "react-icons/fa";

import {
  FaBan,
  FaCheck,
  FaCircleCheck,
  FaCircleExclamation,
  FaClock,
  FaEye,
  FaFile,
  FaFileCircleCheck,
  FaFileCircleExclamation,
  FaFilter,
} from "react-icons/fa6";

const verificationStats = [
  {
    title: "Applications Today",
    value: "4,355",
    icon: <FaCalendarAlt size={20} />,
  },
  {
    title: "Applications Verified",
    value: "12,107",
    icon: <FaCircleCheck size={20} color="green" />,
  },
  {
    title: "Applications Pending",
    value: "9,679",
    icon: <FaClock size={20} color="orange" />,
  },
  {
    title: "Applications Rejected",
    value: "12,107",
    icon: <FaBan size={20} color="red" />,
  },
];

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
  {
    id: 6,
    name: "Sophia Lee",
    email: "sophia.lee@example.com",
    profilePicture: "https://placeimg.com/100/100/people/6",
    bio: "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    verificationStatus: "Verified",
  },
  {
    id: 7,
    name: "Ethan Martinez",
    email: "ethan.martinez@example.com",
    profilePicture: "https://placeimg.com/100/100/people/7",
    bio: "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
    verificationStatus: "Not Verified",
  },
  {
    id: 8,
    name: "Olivia Smith",
    email: "olivia.smith@example.com",
    profilePicture: "https://placeimg.com/100/100/people/8",
    bio: "Praesent mauris. Fusce nec tellus sed augue semper porta.",
    verificationStatus: "Verified",
  },
  {
    id: 9,
    name: "James Rodriguez",
    email: "james.rodriguez@example.com",
    profilePicture: "https://placeimg.com/100/100/people/9",
    bio: "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.",
    verificationStatus: "Pending",
  },
  {
    id: 10,
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    profilePicture: "https://placeimg.com/100/100/people/10",
    bio: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
    verificationStatus: "Verified",
  },
];

const UserVerification = () => {
  const [users, setUsers] = useState(usersData);
  const [filterValue, setFilterValue] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const tableContainerRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableContainerRef.current) {
      // console.log(tableContainerRef.current.offsetHeight);
      tableRef.current.style.maxHeight = `${
        tableContainerRef.current.offsetHeight - 10
      }px`;
    }
  }, [tableContainerRef.current]);

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
        <Box color={"orange.300"}>
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

  const handleUserViewAction = (user) => {
    setSelectedUser(user);
    onOpen();
  };

  return (
    <Flex direction={"column"} gap={2} w={"full"} h={"full"}>
      <Box color="gray.600" py={4} px={6}>
        <Heading fontFamily={"Manrope"} color="#A94A9C">
          Verification
        </Heading>
      </Box>

      <Flex alignItems={"center"} gap={[2, 4]} px={2} py={4} mx={"auto"}>
        {verificationStats.map((stat, index) => (
          <Flex
            key={index}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={4}
            rounded="xl"
            bg={"rgba(95, 196, 199, 0.2)"}
            gap={8}
          >
            <Flex direction={"column"}>
              <Text fontWeight={"semibold"} fontSize={"sm"} color={"gray.500"}>
                {stat.title}
              </Text>
              <Text fontWeight={"bold"} fontSize={"xl"} color={"gray.700"}>
                {stat.value}
              </Text>
            </Flex>

            <Box p={3} bg={"white"} rounded={"lg"} color={"#a94a9c"}>
              {stat.icon}
            </Box>
          </Flex>
        ))}
      </Flex>

      {/* Search and filter bar */}
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w="full"
        pt={1}
        px={6}
      >
        <Flex
          gap={2}
          w={"full"}
          maxWidth={"lg"}
          p={1}
          my={2}
          border={"1px solid"}
          borderColor={"gray.200"}
          rounded={"lg"}
        >
          <Input
            type="text"
            placeholder="Search"
            variant={"unstyled"}
            pl={1}
            w={"full"}
          />
          <Box as="span" bg={"transparent"} p={2}>
            <FaSearch />
          </Box>
        </Flex>

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
      </Flex>

      <Flex
        ref={tableContainerRef}
        direction={"column"}
        w="full"
        h="full"
        // bg={"gray.100"}
      >
        {/* Table */}
        <Flex justifyContent={"center"} w={"full"} h={"full"} px={4}>
          <TableContainer
            ref={tableRef}
            // maxH={`${tableContainerRef}px`}
            w={"full"}
            overflowY={"auto"}
          >
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
                          onClick={() => handleUserViewAction(user)}
                          size={"sm"}
                          color={"#a94a9c"}
                          bg={"rgba(169, 74, 156, 0.2)"}
                          _hover={{ bg: "rgba(169, 74, 156, 0.3)" }}
                          _active={{ transform: "scale(0.95)" }}
                        >
                          View
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>

        <Drawer
          onClose={onClose}
          isOpen={isOpen}
          size={"xs"}
          closeOnOverlayClick={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {/* <DrawerHeader>{`drawer contents`}</DrawerHeader> */}
            <DrawerBody>
              <Flex
                direction={"column"}
                w="full"
                h="full"
                py={6}
                gap={2}
                fontFamily={"Manrope"}
              >
                <Flex direction={"column"} alignItems={"center"} w="full">
                  <Avatar
                    name={selectedUser?.name}
                    src={selectedUser?.profilePicture}
                    size="2xl"
                  />

                  <Text
                    fontFamily={"Manrope"}
                    color={"gray.800"}
                    fontSize={"lg"}
                    fontWeight={"bold"}
                    mt={3}
                  >
                    {selectedUser?.name}
                  </Text>
                  <Text
                    fontFamily={"Manrope"}
                    color={"gray.500"}
                    fontWeight={"medium"}
                    fontSize={"md"}
                    mb={2}
                  >
                    {selectedUser?.email}
                  </Text>

                  <Tag
                    size="lg"
                    bg="rgba(169, 74, 156, 0.2)"
                    color="#a94a9c"
                    fontWeight={"semibold"}
                  >
                    Level 1
                  </Tag>
                </Flex>

                <Flex
                  w={"full"}
                  direction={"column"}
                  alignItems={"center"}
                  gap={2}
                  pt={2}
                >
                  {/* if user is verified */}
                  {selectedUser?.verificationStatus
                    .split(" ")
                    .join("")
                    .toLocaleLowerCase() === "verified" && (
                    <>
                      <Text
                        fontFamily={"Manrope"}
                        color={"gray.800"}
                        fontSize={"lg"}
                        fontWeight={"medium"}
                      >
                        Verification Status
                      </Text>

                      <Flex alignItems={"center"} gap={6}>
                        <Text
                          fontFamily={"Manrope"}
                          color={"gray.500"}
                          fontWeight={"bold"}
                          fontSize={"2xl"}
                        >
                          {selectedUser?.verificationStatus}
                        </Text>
                        <Box>
                          <FaCircleCheck size={20} color="green" />
                        </Box>
                      </Flex>
                    </>
                  )}

                  {/* if user is not verified */}
                  {selectedUser?.verificationStatus
                    .split(" ")
                    .join("")
                    .toLocaleLowerCase() !== "verified" && (
                    <>
                      <Flex w="full" direction={"column"}>
                        <Box w="full">
                          <Text
                            fontFamily={"Manrope"}
                            color={"gray.800"}
                            fontSize={"md"}
                            fontWeight={"medium"}
                          >
                            Verification Status
                          </Text>
                          <Flex alignItems={"center"} gap={6}>
                            <Text
                              fontFamily={"Manrope"}
                              color={"gray.500"}
                              fontWeight={"semibold"}
                              fontSize={"sm"}
                            >
                              {selectedUser?.verificationStatus}
                            </Text>
                            {checkVerificationStatus(
                              selectedUser?.verificationStatus
                                .split(" ")
                                .join("")
                                .toLocaleLowerCase()
                            )}
                          </Flex>
                        </Box>

                        <Box w="full" pt={2}>
                          <Text
                            fontFamily={"Manrope"}
                            color={"gray.800"}
                            fontSize={"md"}
                            fontWeight={"medium"}
                          >
                            User ID
                          </Text>
                          <Text
                            color={"gray.500"}
                            fontWeight={"semibold"}
                            fontSize={"sm"}
                          >
                            {selectedUser?.id}
                          </Text>
                        </Box>

                        <Box w="full" pt={2}>
                          <Text
                            fontFamily={"Manrope"}
                            color={"gray.800"}
                            fontSize={"md"}
                            fontWeight={"medium"}
                          >
                            Address
                          </Text>
                          <Text
                            color={"gray.500"}
                            fontWeight={"semibold"}
                            fontSize={"sm"}
                          >
                            658 Maple Road, Aspen, CO 81611, United States
                          </Text>
                        </Box>

                        <Box w="full" pt={2}>
                          <Text
                            fontWeight={"medium"}
                            color={"gray.800"}
                            fontSize={"md"}
                          >
                            Attachment
                          </Text>
                          <Divider mb={2} />

                          {/* Documents Section */}
                          <Flex direction={"column"} w="full" gap={2}>
                            <Flex
                              justifyContent={"start"}
                              alignItems={"center"}
                              p={2}
                              rounded="xl"
                              bg={"rgba(95, 196, 199, 0.2)"}
                              gap={2}
                            >
                              <Box
                                p={3}
                                bg={"white"}
                                rounded={"lg"}
                                color={"#A94A9C"}
                              >
                                <FaFile size={18} />
                              </Box>

                              <Flex direction={"column"}>
                                <Text
                                  fontWeight={"semibold"}
                                  fontSize={"sm"}
                                  color={"gray.500"}
                                >
                                  Utility Bill
                                </Text>
                                <Text
                                  fontWeight={"bold"}
                                  fontSize={"xs"}
                                  color={"gray.700"}
                                >
                                  {selectedUser?.verificationStatus
                                    .split(" ")
                                    .join("")
                                    .toLocaleLowerCase() === "pending"
                                    ? "electricity_bill.pdf"
                                    : "missing"}
                                </Text>
                              </Flex>

                              <Box
                                display={"flex"}
                                gap={3}
                                p={3}
                                bg={"transparent"}
                                rounded={"lg"}
                                ml={"auto"}
                              >
                                {selectedUser?.verificationStatus
                                  .split(" ")
                                  .join("")
                                  .toLocaleLowerCase() === "pending" ? (
                                  <>
                                    <FaCircleCheck size={18} color="green" />

                                    <span style={{ cursor: "pointer" }}>
                                      <FaEye size={18} color="gray" />
                                    </span>
                                  </>
                                ) : (
                                  <FaCircleExclamation
                                    size={18}
                                    color="orange"
                                  />
                                )}
                              </Box>
                            </Flex>

                            <Flex
                              justifyContent={"start"}
                              alignItems={"center"}
                              p={2}
                              rounded="xl"
                              bg={"rgba(95, 196, 199, 0.2)"}
                              gap={2}
                            >
                              <Box
                                p={3}
                                bg={"white"}
                                rounded={"lg"}
                                color={"#A94A9C"}
                              >
                                <FaFile size={18} />
                              </Box>

                              <Flex direction={"column"}>
                                <Text
                                  fontWeight={"semibold"}
                                  fontSize={"sm"}
                                  color={"gray.500"}
                                >
                                  Identification
                                </Text>
                                <Text
                                  fontWeight={"bold"}
                                  fontSize={"xs"}
                                  color={"gray.700"}
                                >
                                  {selectedUser?.verificationStatus
                                    .split(" ")
                                    .join("")
                                    .toLocaleLowerCase() === "pending"
                                    ? "ID_card.pdf"
                                    : "missing"}
                                </Text>
                              </Flex>

                              <Box
                                display={"flex"}
                                gap={3}
                                p={3}
                                bg={"transparent"}
                                rounded={"lg"}
                                ml={"auto"}
                              >
                                {selectedUser?.verificationStatus
                                  .split(" ")
                                  .join("")
                                  .toLocaleLowerCase() === "pending" ? (
                                  <>
                                    <FaCircleCheck size={18} color="green" />

                                    <span style={{ cursor: "pointer" }}>
                                      <FaEye size={18} color="gray" />
                                    </span>
                                  </>
                                ) : (
                                  <FaCircleExclamation
                                    size={18}
                                    color="orange"
                                  />
                                )}
                              </Box>
                            </Flex>
                          </Flex>
                        </Box>

                        <Box w="full" pt={3} pb={1}>
                          <Input
                            type="text"
                            variant="flushed"
                            placeholder="Comments"
                            _focus={{
                              borderColor: "rgba(169, 74, 156, 1)",
                              ring: "none",
                              outline: "none",
                            }}
                          />
                        </Box>

                        {selectedUser?.verificationStatus
                          .split(" ")
                          .join("")
                          .toLocaleLowerCase() === "pending" ? (
                          <Box w="full" pt={4}>
                            <Button
                              w="full"
                              color={"white"}
                              bg={"rgba(169, 74, 156, 1)"}
                              _hover={{ bg: "rgba(169, 74, 156, 0.9)" }}
                              _active={{ transform: "scale(0.98)" }}
                              mb={2}
                            >
                              Accept
                            </Button>
                            <Button
                              w="full"
                              color={"#A94A9C"}
                              bg={"rgba(169, 74, 156, 0)"}
                              ring={"none"}
                              outline={"none"}
                              border={"1px solid rgba(169, 74, 156, 1)"}
                              _hover={{ bg: "rgba(169, 74, 156, 0.15)" }}
                              _active={{ transform: "scale(0.98)" }}
                              _focus={{ outline: "none" }}
                              mb={2}
                            >
                              Decline
                            </Button>
                          </Box>
                        ) : (
                          <Box w="full" pt={4}>
                            <Button
                              w="full"
                              color={"white"}
                              bg={"rgba(169, 74, 156, 1)"}
                              _hover={{ bg: "rgba(169, 74, 156, 0.9)" }}
                              _active={{ transform: "scale(0.98)" }}
                              mb={2}
                            >
                              Request Documents
                            </Button>
                          </Box>
                        )}
                      </Flex>
                    </>
                  )}
                </Flex>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
};

export default UserVerification;
