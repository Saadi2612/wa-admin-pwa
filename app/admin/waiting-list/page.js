"use client";

import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "@/constants";
import Pagination from "./pagination";
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
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  Spinner,
} from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import useAuth from "@/utils/useAuth";

const WaitingList = () => {
  const [waitingListData, setWaitingListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [userTypeFilter, setUserTypeFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
        const response = await fetch(
          `${BACKEND_URL}pre-launch/waiting-list/?page_size=10&page=${currentPage}&_type=${userTypeFilter}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const jsonResponse = await response.json();
        if (
          jsonResponse.success &&
          jsonResponse.data &&
          jsonResponse.data.data
        ) {
          setWaitingListData(jsonResponse.data.data);
          setTotalPages(jsonResponse.data.pagination.total_pages);
        } else {
          throw new Error("Unexpected response structure");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [currentPage, userTypeFilter]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleUserTypeFilterChange = (event) => {
    console.log(event.target.value);
    setUserTypeFilter(event.target.value);
  };

  const searchedUsers = waitingListData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Flex direction={"column"} gap={4} w={"full"} h={"full"}>
      <Box color="gray.600" py={4} px={6}>
        <Heading fontFamily={"Manrope"} color={"#A94A9C"}>
          Waiting List
        </Heading>
      </Box>
      <Flex justifyContent={"space-between"} gap={4} px={6}>
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Box as="span" bg={"transparent"} p={2}>
            <FaSearch color="#A94A9C" />
          </Box>
        </Flex>

        <Box>
          <Text fontSize={"sm"} color={"gray.600"}>
            Profile Type
          </Text>
          <Select
            icon={<FaFilter />}
            iconColor="#A94A9C"
            iconSize="sm"
            fontSize={"sm"}
            placeholder="All"
            w={"fit-content"}
            onChange={handleUserTypeFilterChange}
          >
            <option value="Freelancer">Freelancer</option>
            <option value="Client">Client</option>
          </Select>
        </Box>
      </Flex>
      <Flex
        justifyContent={"center"}
        w={"full"}
        h={"full"}
        overflowX={"auto"}
        px={2}
      >
        <TableContainer w={"full"}>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th borderColor={"rgba(169, 74, 156, 0.5)"}>Name</Th>
                <Th borderColor={"rgba(169, 74, 156, 0.5)"}>Email</Th>
                <Th borderColor={"rgba(169, 74, 156, 0.5)"}>IP Address</Th>
                <Th borderColor={"rgba(169, 74, 156, 0.5)"}>Phone</Th>
                <Th borderColor={"rgba(169, 74, 156, 0.5)"}>Type</Th>
                <Th borderColor={"rgba(169, 74, 156, 0.5)"}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {isLoading ? (
                <Tr>
                  <Td colSpan="6">
                    <Flex align="center" justify="center" h="100px">
                      <Spinner color="blue.500" size="xl" />
                    </Flex>
                  </Td>
                </Tr>
              ) : error ? (
                // Optionally handle error state similarly, if desired
                <Tr>
                  <Td colSpan="6" textAlign="center">
                    <Box color="red.500">Error: {error}</Box>
                  </Td>
                </Tr>
              ) : (
                searchedUsers.map((item, index) => (
                  <Tr key={index}>
                    <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                      <Text color={"gray.500"} fontWeight={"regular"}>
                        {item.name}
                      </Text>
                    </Td>

                    <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                      <Text fontWeight={"medium"} color={"gray.700"}>
                        {item.email}
                      </Text>
                    </Td>
                    <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                      <Text fontWeight={"medium"} color={"gray.500"}>
                        {item.ip_address}
                      </Text>
                    </Td>
                    <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                      <Text fontWeight={"medium"} color={"gray.500"}>
                        {item.phone}
                      </Text>
                    </Td>
                    <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                      <Text fontWeight={"medium"} color={"gray.500"}>
                        {item._type}
                      </Text>
                    </Td>

                    <Td borderColor={"rgba(95, 196, 199, 0.5)"}>
                      <Flex gap={2}>
                        <Button
                          isDisabled={item.status === "Contacted"}
                          size={"sm"}
                          color={"#a94a9c"}
                          bg={"rgba(169, 74, 156, 0.2)"}
                          _hover={{ bg: "rgba(169, 74, 156, 0.3)" }}
                          _active={{ transform: "scale(0.95)" }}
                          // _disabled={{ bg: "gray.200", cursor: "not-allowed" }}
                        >
                          Contact
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
      />
    </Flex>
  );
};

export default WaitingList;
