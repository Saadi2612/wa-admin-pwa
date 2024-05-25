import React from "react";
import { Flex } from "@chakra-ui/react";
import MessageSidebar from "./MessageSidebar";
import Message from "./Message";

export default function TabItemMobile({
  title,
  messages,
  selectedMessage,
  selectedMessageIndex,
  setSelectedMessageIndex,
  setSelectedMessage,
}) {
  return (
    <Flex w={"100%"} h="95%">
      {selectedMessage ? (
        <Flex w={"100%"}>
          <Message
            setSelectedMessage={setSelectedMessage}
            selectedMessage={selectedMessage}
          />
        </Flex>
      ) : (
        <Flex w={"100%"}>
          <MessageSidebar
            title={title}
            messages={messages}
            selectedMessageIndex={selectedMessageIndex}
            setSelectedMessageIndex={setSelectedMessageIndex}
            setSelectedMessage={setSelectedMessage}
          />
        </Flex>
      )}
    </Flex>
  );
}
