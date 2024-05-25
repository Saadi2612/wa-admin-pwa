import React from "react";
import { Flex } from "@chakra-ui/react";
import MessageSidebar from "./MessageSidebar";
import Message from "./Message";

export default function TabItem({
  title,
  messages,
  selectedMessage,
  selectedMessageIndex,
  setSelectedMessageIndex,
  setSelectedMessage,
}) {
  return (
    <Flex w={"100%"} h="full">
      <Flex h="full" py={1} px={2}>
        <MessageSidebar
          title={title}
          messages={messages}
          selectedMessageIndex={selectedMessageIndex}
          setSelectedMessageIndex={setSelectedMessageIndex}
          setSelectedMessage={setSelectedMessage}
        />
      </Flex>
      <Flex py={1} px={2} w={"100%"} h="full">
        <Message selectedMessage={selectedMessage} />
      </Flex>
    </Flex>
  );
}
