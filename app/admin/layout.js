"use client";

import React, { useEffect, useState } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar";
import useAuth from "@/utils/useAuth";

const PanelLayout = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/auth/admin-login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <Flex
        h="100dvh"
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Spinner size={"lg"} color="#A94A9C" />
      </Flex>
    );
  }

  return (
    <Flex
      h={"100dvh"}
      width={"full"}
      overflow={"hidden"}
      transition={"all 0.3s ease"}
      fontFamily={"Manrope"}
    >
      {!pathname.includes("/login") && <Sidebar />}

      <Flex
        w={"full"}
        h={"full"}
        bg={"gray.50"}
        overflowX={"hidden"}
        p={2}
        transition={"all 0.3s ease"}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default PanelLayout;
