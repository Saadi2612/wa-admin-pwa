import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import TabItem from "./TabItem";

export default function LargeTabs({
  data,
  setSelectedMessage,
  setSelectedMessageIndex,
  selectedMessage,
  selectedMessageIndex,
}) {
  return (
    <Tabs
      variant="soft-rounded"
      size={"md"}
      w={"100%"}
      h="full"
      display={{
        base: "none",
        md: "block",
      }}
    >
      <TabList>
        <Tab
          bg={"transparent"}
          _selected={{ bg: "rgba(169, 74, 156, 0.2)", color: "#A94A9C" }}
        >
          Freelancers
        </Tab>
        <Tab
          bg={"transparent"}
          _selected={{ bg: "rgba(169, 74, 156, 0.2)", color: "#A94A9C" }}
        >
          Clients
        </Tab>
      </TabList>
      {/* overflowY={"auto"} */}
      <TabPanels h={"calc(100% - 40px)"}>
        <TabPanel h={"full"} p={0}>
          <TabItem
            title={"Freelancers"}
            messages={data}
            setSelectedMessage={setSelectedMessage}
            setSelectedMessageIndex={setSelectedMessageIndex}
            selectedMessage={selectedMessage}
            selectedMessageIndex={selectedMessageIndex}
          />
        </TabPanel>
        <TabPanel h={"full"} p={0}>
          <TabItem
            title={"Clients"}
            messages={data}
            setSelectedMessage={setSelectedMessage}
            setSelectedMessageIndex={setSelectedMessageIndex}
            selectedMessage={selectedMessage}
            selectedMessageIndex={selectedMessageIndex}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
