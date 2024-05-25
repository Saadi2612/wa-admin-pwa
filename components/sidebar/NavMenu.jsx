import React from "react";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Link,
  ScaleFade,
  Text,
  Tooltip,
} from "@chakra-ui/react";

const NavMenu = ({ item, isSidebarOpen }) => {
  return "subMenu" in item ? (
    <Accordion key={item.id} allowMultiple w={"full"}>
      <AccordionItem border={"0"} w="full" rounded={"lg"}>
        <Tooltip
          label={item.name}
          placement="auto"
          isDisabled={isSidebarOpen}
          bg={"#A94A9C"}
          color={"white"}
        >
          <AccordionButton
            rounded={"lg"}
            color={"gray.800"}
            _expanded={{ color: "#A94A9C" }}
            _hover={{
              // bg: "#5FC4C7",
              color: "#A94A9C",
            }}
            p={2}
          >
            <Flex justifyContent={"start"} alignItems={"center"} w={"full"}>
              <Box px={1}>{item.icon}</Box>
              <ScaleFade initialScale={0.9} in={isSidebarOpen} unmountOnExit>
                <Text fontSize={"md"} fontWeight={"semibold"} ml={2}>
                  {item.name}
                </Text>
              </ScaleFade>
            </Flex>
            <AccordionIcon w={3} h={3} pr={"1px"} pl={"1px"} />
          </AccordionButton>
        </Tooltip>

        <AccordionPanel
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          gap={4}
          rounded={"lg"}
          bg={"rgba(95, 196, 199, 0.2)"}
          py={3}
        >
          {item.subMenu.map((subItem) => (
            <Tooltip
              label={subItem.name}
              placement="auto"
              key={subItem.id}
              isDisabled={isSidebarOpen}
              bg={"#A94A9C"}
              color={"white"}
            >
              <Link
                href={subItem.link}
                display={"flex"}
                w={"full"}
                alignItems={"center"}
                _hover={{
                  textDecoration: "none",
                  color: "#A94A9C",
                }}
                color={"gray.600"}
              >
                <Box>{subItem.icon}</Box>
                <ScaleFade initialScale={0.9} in={isSidebarOpen}>
                  <Text as="h2" fontWeight={"semibold"} ml={2}>
                    {subItem.name}
                  </Text>
                </ScaleFade>
              </Link>
            </Tooltip>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ) : (
    <Flex
      key={item.id}
      direction={"column"}
      alignItems={"start"}
      justifyContent={"center"}
      w={"full"}
      p={2}
      rounded={"lg"}
      color={"gray.800"}
      _hover={{
        // bg: "#5FC4C7",
        color: "#A94A9C",
      }}
    >
      <Tooltip
        label={item.name}
        placement="auto"
        isDisabled={isSidebarOpen}
        bg={"#A94A9C"}
        color={"white"}
      >
        <Link
          href={item.link}
          display={"flex"}
          w={"fit-content"}
          alignItems={"center"}
          _hover={{
            textDecoration: "none",
          }}
          gap={2}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
        >
          <Box p={1}>{item.icon}</Box>
          <ScaleFade
            style={{ width: "100%" }}
            initialScale={0.9}
            in={isSidebarOpen}
            unmountOnExit
          >
            <Text as="h2" fontWeight={"semibold"}>
              {item.name}
            </Text>
          </ScaleFade>
        </Link>
      </Tooltip>
    </Flex>
  );
};

export default NavMenu;
