"use client";

import React, { useState } from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import LargeTabs from "@/components/messages/LargeTabs";
import SmallTabs from "@/components/messages/SmallTabs";

const data = [
  {
    userImage: "https://example.com/path/to/user1-image.jpg",
    messageTitle: "Welcome to the Platform!",
    date: "2024-03-23",
    userName: "Alice Johnson",
  },
  {
    userImage: "https://example.com/path/to/user2-image.jpg",
    messageTitle: "Project Update",
    date: "2024-03-22",
    userName: "Bob Smith",
  },
  {
    userImage: "https://example.com/path/to/user3-image.jpg",
    messageTitle: "Scheduled Maintenance Reminder",
    date: "2024-03-21",
    userName: "Charlie Davis",
  },
  {
    userImage: "https://example.com/path/to/user4-image.jpg",
    messageTitle: "New Features Rollout",
    date: "2024-03-20",
    userName: "Dana Lee",
  },
  {
    userImage: "https://example.com/path/to/user5-image.jpg",
    messageTitle: "Weekly Newsletter",
    date: "2024-03-19",
    userName: "Evan Grant",
  },
];

const Issues = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(null);

  return (
    <Flex direction={"column"} gap={4} w={"full"} h={"full"}>
      <Box color="gray.600" pt={4} px={4}>
        <Heading fontFamily={"Manrope"} color={"#A94A9C"}>
          User Issues
        </Heading>
      </Box>
      <Flex w={"full"} h={"full"} overflowY={"auto"}>
        <LargeTabs
          data={data}
          setSelectedMessage={setSelectedMessage}
          setSelectedMessageIndex={setSelectedMessageIndex}
          selectedMessageIndex={selectedMessageIndex}
          selectedMessage={selectedMessage}
        />
        <SmallTabs
          data={data}
          setSelectedMessage={setSelectedMessage}
          setSelectedMessageIndex={setSelectedMessageIndex}
          selectedMessageIndex={selectedMessageIndex}
          selectedMessage={selectedMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Issues;
