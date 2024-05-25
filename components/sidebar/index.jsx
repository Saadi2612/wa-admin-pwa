import React, { useState } from "react";

import { FaUsers } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaAngleRight, FaClipboardList, FaFileContract } from "react-icons/fa6";
import { TbHelpHexagonFilled, TbLogout2 } from "react-icons/tb";
import { BiSolidDashboard } from "react-icons/bi";
import { MdReport } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

import NavMenu from "./NavMenu";

import {
  Box,
  Flex,
  IconButton,
  Image,
  Link,
  ScaleFade,
  Text,
  Tooltip,
} from "@chakra-ui/react";

const navMenuItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: <BiSolidDashboard size={24} />,
    link: "/admin",
  },
  {
    id: 2,
    name: "Users",
    icon: <FaUsers size={24} />,
    subMenu: [
      {
        id: 1,
        name: "Profiles",
        icon: <ImProfile size={18} />,
        link: "/admin/users/profiles",
      },
      {
        id: 2,
        name: "Verification",
        icon: <RiVerifiedBadgeFill size={18} />,
        link: "/admin/users/verification",
      },
    ],
  },
  {
    id: 3,
    name: "Contracts",
    icon: <FaFileContract size={24} />,
    link: "/admin/contracts",
  },
  {
    id: 4,
    name: "Waiting List",
    icon: <FaClipboardList size={24} />,
    link: "/admin/waiting-list",
  },
  {
    id: 4,
    name: "Support",
    icon: <TbHelpHexagonFilled size={24} />,
    link: "/admin/support",
  },
  {
    id: 5,
    name: "Issues",
    icon: <MdReport size={24} />,
    link: "/admin/issues",
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Flex
      direction={"column"}
      w={isSidebarOpen ? "250px" : "80px"}
      h={"full"}
      bg={"rgba(95, 196, 199, 0.2)"}
      p={4}
      transition={"all 0.3s ease"}
      position={"relative"}
      borderRight={"1px solid"}
      // roundedRight={"2xl"}
      borderColor={"rgba(95, 196, 199, 0.7)"}
      zIndex={10}
    >
      <IconButton
        onClick={handleSidebarToggle}
        position={"absolute"}
        right={-3}
        top={3}
        size={"xs"}
        bg={"white"}
        border={"1px solid"}
        borderColor={"rgba(95, 196, 199, 0.7)"}
        rounded={"full"}
        shadow={"lg"}
        aspectRatio={1}
        color={"gray.700"}
        icon={
          <FaAngleRight
            size={14}
            style={{
              transform: isSidebarOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        }
        _hover={{
          bg: "gray.50",
        }}
      />
      <Flex
        direction={"column"}
        justifyContent={"start"}
        alignItems={"center"}
        w={"full"}
        h={"full"}
        gap={5}
        // bg={"white"}
        overflowX={"hidden"}
      >
        <Flex
          w={"full"}
          h={"80px"}
          justifyContent={"start"}
          alignItems={"start"}
          transition={"all 0.3s ease"}
          overflow={"hidden"}
          position={"relative"}
        >
          {isSidebarOpen && (
            <Image
              src="/assets/WA-Logo.svg"
              fit={"contain"}
              w={"120px"}
              position={"absolute"}
              top={"50%"}
              left={"50%"}
              transform={"translate(-50%, -50%)"}
            />
          )}

          {!isSidebarOpen && (
            <Image src="/assets/WA-logo-small.svg" fit={"contain"} w={"40px"} />
          )}
        </Flex>
        <Flex
          direction={"column"}
          alignItems={"start"}
          w={"full"}
          h={"full"}
          gap={6}
        >
          {navMenuItems.map((item) => (
            <NavMenu key={item.id} item={item} isSidebarOpen={isSidebarOpen} />
          ))}
        </Flex>

        <Flex
          w={"full"}
          mt={"auto"}
          color={"gray.800"}
          _hover={{
            // bg: "#5FC4C7",
            color: "#A94A9C",
          }}
          p={2}
        >
          <Tooltip
            label="Logout"
            placement="auto"
            isDisabled={isSidebarOpen}
            bg={"#A94A9C"}
            color={"white"}
          >
            <Link
              onClick={() => {
                localStorage.removeItem("token");
              }}
              href="/auth/admin-login"
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
              <Box p={1}>
                <IoLogOut size={24} />
              </Box>
              <ScaleFade
                style={{ width: "100%" }}
                initialScale={0.9}
                in={isSidebarOpen}
                unmountOnExit
              >
                <Text as="h2" fontWeight={"semibold"}>
                  Logout
                </Text>
              </ScaleFade>
            </Link>
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
