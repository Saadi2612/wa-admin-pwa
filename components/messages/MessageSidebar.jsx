import React, { useState } from "react";
import { Box, Flex, Text, Input, Avatar, Divider } from "@chakra-ui/react";
import { GrNext } from "react-icons/gr";

const MessageSidebar = ({
  title,
  messages,
  selectedMessageIndex,
  setSelectedMessage,
  setSelectedMessageIndex,
}) => {
  const [query, setQuery] = useState("");

  const handleMessageSelection = (index, obj) => {
    setSelectedMessageIndex(index);
    setSelectedMessage(obj);
  };

  return (
    <Flex gap={2} width={"100%"} h="full" flexDir={"column"}>
      <Flex align={"center"} p={{ base: 0, md: 0 }}>
        <Text fontWeight={"bold"} color={"gray.600"} fontSize={"2xl"}>
          {title}
        </Text>
      </Flex>
      <Input
        placeholder="Search"
        border={"1px solid gray"}
        borderColor={"gray.400"}
        borderRadius={"lg"}
        focusBorderColor="#A94A9C"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Flex flexDir={"column"} h="full" overflowY={"auto"}>
        {messages
          .filter((_, i) => {
            return query === ""
              ? true
              : messages[i]?.userName
                  .toLowerCase()
                  .includes(query.toLowerCase());
          })
          .map((message, index) => (
            <>
              <Flex
                key={index}
                gap={4}
                width={"100%"}
                maxW={"300px"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                  backgroundColor:
                    selectedMessageIndex === index
                      ? "#A94A9C"
                      : "rgba(169, 74, 156, 0.1)",
                }}
                backgroundColor={
                  selectedMessageIndex === index ? "#A94A9C" : "transparent"
                }
                cursor={"pointer"}
                px={2}
                py={2}
                borderRadius={selectedMessageIndex === index ? "10px" : ""}
                onClick={() => handleMessageSelection(index, message)}
                transition="all 0.3s ease"
              >
                <Flex w="full" alignItems={"flex-start"}>
                  <Flex alignItems="start">
                    <Avatar
                      src={message.userImage}
                      size="md"
                      name={message.userName}
                    />
                  </Flex>
                  <Box w="full" px={1} ml={1}>
                    <Flex w={"full"} justifyContent={"space-between"} gap={4}>
                      <Text
                        noOfLines={1}
                        fontWeight={600}
                        fontSize={"sm"}
                        color={
                          selectedMessageIndex === index ? "#fff" : "gray.700"
                        }
                      >
                        {message.userName}
                      </Text>
                      <Text
                        whiteSpace={"nowrap"}
                        fontSize={"xs"}
                        color={
                          selectedMessageIndex === index ? "#fff" : "gray.500"
                        }
                      >
                        {message.date}
                      </Text>
                    </Flex>
                    <Text
                      noOfLines={1}
                      fontWeight={500}
                      fontSize={"xs"}
                      color={
                        selectedMessageIndex === index ? "#fff" : "gray.700"
                      }
                    >
                      {message.messageTitle}
                    </Text>
                  </Box>
                </Flex>
                <Flex display={{ base: "flex", md: "none" }}>
                  <GrNext />
                </Flex>
              </Flex>
              <Divider />
            </>
          ))}
      </Flex>
    </Flex>
  );
};

export default MessageSidebar;
