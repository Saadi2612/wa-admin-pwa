import React, { useEffect, useRef, useState } from "react";
import {
  Flex,
  Text,
  InputGroup,
  Textarea,
  InputRightElement,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";
import Conversations from "./Conversation";
import { IoMdArrowBack } from "react-icons/io";
import { PiPaperPlaneRightFill } from "react-icons/pi";

const conversations = [
  {
    message: "What's the status of our current project?",
    reply:
      "We're on track to meet the deadline. Final touches are being applied.",
  },
  {
    message: "Can you send over the latest design files?",
    reply: "Sure, I'll email them to you in the next hour.",
  },
  {
    message: "Are we meeting our targets for this quarter?",
    reply:
      "Yes, projections are looking good. We'll discuss in more detail in our meeting.",
  },
  {
    message: "Do we need any additional resources for the new project?",
    reply: "Not at the moment, but we should reassess after the initial phase.",
  },
  {
    message: "When is the client review scheduled for?",
    reply:
      "It’s set for next Thursday at 2 PM. Please make sure your sections are prepared.",
  },
  {
    message: "Have the issues from the last sprint been resolved?",
    reply: "Most have been addressed, though a few are pending review.",
  },
  {
    message: "Is there an update on the budget approval?",
    reply:
      "Yes, it was approved this morning. We’re good to proceed with the planned expansions.",
  },
  {
    message: "How did the stakeholders react to the demo?",
    reply:
      "Very positively! There’s excitement about the direction we’re taking.",
  },
  {
    message: "Can we expect any hiring for our department soon?",
    reply:
      "Yes, we're looking to add two more developers and a designer by next quarter.",
  },
  {
    message: "Are the remote working tools fully implemented?",
    reply:
      "Almost. The team is finalizing the setup for a few remaining tools.",
  },
  {
    message: "When's the next team outing?",
    reply:
      "Planning for sometime next month. Open to suggestions on activities!",
  },
  {
    message: "Is the project documentation up to date?",
    reply: "It needs a bit of updating. I’ll allocate time for it this week.",
  },
];

const Message = ({ selectedMessage, setSelectedMessage }) => {
  const textAreaRef = useRef(null);

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [message]);

  return (
    <Flex width={"100%"} flexDir={"column"} overflow={"auto"}>
      <Flex
        p={{
          base: 0,
          md: 2,
        }}
        align={"center"}
        gap={2}
      >
        <IconButton
          display={{
            base: "flex",
            md: "none",
          }}
          aria-label="Back"
          icon={<IoMdArrowBack />}
          rounded={"full"}
          onClick={() => setSelectedMessage(null)}
        />
        <Text fontWeight={500} fontSize={"xl"}>
          {selectedMessage?.messageTitle}
        </Text>
      </Flex>
      <Flex
        flexDir={"column"}
        overflow={"auto"}
        p={2}
        mb={2}
        borderRadius={"xl"}
        backgroundColor={"rgba(95, 196, 199, 0.15)"}
        h="100%"
      >
        {selectedMessage ? (
          <Conversations
            conversations={conversations}
            selectedChat={selectedMessage}
          />
        ) : (
          <Flex justify={"center"} align={"center"} h="100%">
            <Text fontSize={"lg"} color={"gray.600"}>
              Select an Issue
            </Text>
          </Flex>
        )}
      </Flex>
      <Flex
        alignItems={"end"}
        p={1}
        border="1px solid"
        borderColor={"rgba(169, 74, 156, 0.5)"}
        _focusWithin={{
          borderColor: "rgba(169, 74, 156, 1)",
        }}
        borderRadius={"xl"}
      >
        <Textarea
          placeholder="Enter Your Message"
          borderRadius={"xl"}
          border="none"
          _focus={{ outline: "none", border: "none", ring: "none" }}
          w={"full"}
          h={"auto"}
          maxH={"200px"}
          py={2}
          px={2}
          rows={1}
          resize={"none"}
          value={message}
          onChange={handleChange}
          ref={textAreaRef}
        />

        <Box>
          <IconButton
            icon={<PiPaperPlaneRightFill size={24} />}
            rounded={"lg"}
            color={"#A94A9C"}
            bg={"transparent"}
            _hover={{ bg: "rgba(169, 74, 156, 0.3)" }}
            _active={{ transform: "scale(0.95)" }}
            isDisabled={message.trim() === "" || message === undefined}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Message;
