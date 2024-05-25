import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import TabItemMobile from "./TabItemMobile";

export default function SmallTabs({
  data,
  setSelectedMessage,
  setSelectedMessageIndex,
  selectedMessage,
  selectedMessageIndex,
}) {
  return (
    <Tabs
      variant="soft-rounded"
      colorScheme="green"
      w={"100%"}
      display={{
        base: "block",
        md: "none",
      }}
    >
      <TabList>
        <Tab>Freelancers</Tab>
        <Tab>Clients</Tab>
      </TabList>
      <TabPanels>
        <TabPanel h={"90vh"}>
          <TabItemMobile
            title={"Freelancers"}
            messages={data}
            setSelectedMessage={setSelectedMessage}
            setSelectedMessageIndex={setSelectedMessageIndex}
            selectedMessage={selectedMessage}
            selectedMessageIndex={selectedMessageIndex}
          />
        </TabPanel>
        <TabPanel h={"90vh"}>
          <TabItemMobile
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
