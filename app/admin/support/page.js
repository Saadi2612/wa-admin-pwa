"use client";

import React from "react";

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
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { hankenGrotesk } from "@/utils";

const faqData = [
  {
    question: "How do I make a purchase?",
    answer:
      "You can make a purchase by adding items to your cart and proceeding to checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit card, PayPal, and bank transfers.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After your order has been dispatched, you will receive a tracking number via email.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to several countries. Shipping costs and delivery times vary depending on the destination.",
  },
  {
    question: "Can I return or exchange an item?",
    answer:
      "You can return or exchange items within 30 days of purchase as long as they are in their original condition. Some restrictions may apply for certain types of products.",
  },
  {
    question: "How do I cancel my order?",
    answer:
      "Orders can be canceled within 24 hours of placement. Please contact our customer service team immediately if you need to cancel your order.",
  },
  {
    question: "Is it safe to shop on your website?",
    answer:
      "Absolutely. We use SSL encryption to protect your personal information and provide secure payment options.",
  },
  {
    question: "How do I create an account?",
    answer:
      "You can create an account by clicking on the 'Sign Up' button on our homepage and filling out the registration form with your details.",
  },
  {
    question: "What should I do if I forget my password?",
    answer:
      "If you forget your password, you can reset it by clicking on the 'Forgot Password' link on the login page and following the instructions to set a new password.",
  },
  {
    question: "How can I contact customer service?",
    answer:
      "Our customer service team can be reached via email at support@example.com, or you can call us at 1-800-123-4567 during business hours.",
  },
  {
    question: "Do you offer gift wrapping services?",
    answer:
      "Yes, we offer gift wrapping services for a small additional fee. You can select this option at checkout.",
  },
];

const Support = () => {
  return (
    <Flex direction={"column"} gap={4} w={"full"} h={"full"}>
      <Box color="gray.600" py={4} px={6}>
        <Heading fontFamily={"Manrope"} color={"#A94A9C"}>
          Support
        </Heading>
      </Box>

      <Box w={"full"} textAlign={"center"} p={2}>
        <Text
          fontSize={"2xl"}
          fontWeight={"bold"}
          color={"gray.600"}
          fontFamily={"Manrope"}
        >
          How can we help you?
        </Text>
        <Flex
          gap={2}
          w={"full"}
          maxWidth={"lg"}
          p={1}
          my={2}
          border={"1px solid"}
          borderColor={"gray.200"}
          rounded={"lg"}
          mx={"auto"}
        >
          <Input
            type="text"
            placeholder="Search the topic"
            variant={"unstyled"}
            pl={1}
            w={"full"}
          />
          <Box as="span" bg={"transparent"} p={2}>
            <FaSearch />
          </Box>
        </Flex>
      </Box>

      <Flex
        direction={"column"}
        gap={4}
        w={"full"}
        h={"full"}
        overflowY={"auto"}
      >
        <Box px={6}>
          <Heading
            fontFamily={"Manrope"}
            color={"gray.600"}
            fontWeight={"semibold"}
          >
            FAQs
          </Heading>
        </Box>
        <Flex direction={"column"} w={"full"} maxW={"xl"} h={"auto"} px={6}>
          <Accordion allowMultiple>
            {faqData.map((faq, index) => (
              <AccordionItem
                borderTop={"1px solid"}
                borderColor={"rgba(169, 74, 156, 0.5)"}
                py={2}
                key={index}
              >
                <h2>
                  <AccordionButton
                    rounded={"lg"}
                    _hover={{ bg: "rgba(169, 74, 156, 0.2)" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={"semibold"}
                      color={"gray.600"}
                    >
                      {faq.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text color={"gray.500"} fontSize={"sm"}>
                    {faq.answer}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Support;
