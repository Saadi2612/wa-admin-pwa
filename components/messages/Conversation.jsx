import React from "react";
import { Text, Flex, Avatar, Divider } from "@chakra-ui/react";

const Conversations = ({ conversations, selectedChat }) => {
  return (
    <>
      {conversations.map((conversation, index) => (
        <Flex width={"100%"} flexDir={"column"} key={index}>
          <Flex
            flexDir={"column"}
            p={2}
            justify={"end"}
            align={"end"}
            w={"100%"}
          >
            <Flex
              direction={"column"}
              w={"max-content"}
              align={"end"}
              gap={2}
              px={2}
            >
              <Flex alignItems={"center"} gap={2} w={"max-content"}>
                <Text
                  fontSize={{ sm: "xs", md: "sm" }}
                  fontWeight={"semibold"}
                  color={"gray.700"}
                >
                  You
                </Text>
                <Avatar src="https://bit.ly/dan-abramov" size={"xs"} />
              </Flex>
              <Text fontSize={{ sm: "sm", md: "md" }} color={"gray.700"}>
                {conversation.message}
              </Text>
            </Flex>
          </Flex>
          <Divider borderColor={"rgba(95, 196, 199, 1)"} />
          <Flex flexDir={"column"} p={2} gap={2} px={4}>
            <Flex alignItems={"center"} gap={2}>
              <Avatar name={selectedChat?.userName} size={"xs"} />
              <Text
                fontSize={{ sm: "xs", md: "sm" }}
                fontWeight={"semibold"}
                color={"gray.700"}
              >
                {selectedChat?.userName}
              </Text>
            </Flex>
            <Text fontSize={{ sm: "sm", md: "md" }} color={"gray.700"}>
              {conversation.reply}
            </Text>
          </Flex>
          <Divider borderColor={"rgba(95, 196, 199, 1)"} />
        </Flex>
      ))}
    </>
  );
};

export default Conversations;
