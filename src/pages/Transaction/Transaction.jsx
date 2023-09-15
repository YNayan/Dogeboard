import {
  Box,
  Card,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import TransactionTable from "./Components/TransactionTable";
import { BsSearch } from "react-icons/bs";
const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 14,
    },
    {
      name: "WithDraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout title={"Transactions"}>
      <Flex justify={"end"} mt={1} mb={3}>
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius={"1rem"}>
        <Tabs>
          <TabList py={4} display={"flex"} justifyContent={"space-between"}>
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display={"flex"} gap={2} pb={4}>
                  {tab.name}
                  <Tag colorScheme="gray">{tab.count}</Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxWidth={"12.5rem"} pr={6}>
              <InputLeftElement pointerEvents={"none"}>
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box display={{ base: "none", md: "block" }}>
                <TransactionTable />
              </Box>
              <Box display={{ base: "flex", md: "none" }}>
                <p>implement the card funtionality over the table</p>
              </Box>
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
