import React from "react";

import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <SideNav />
      </Box>
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container overflowX="hidden" overflowY="auto" h="calc(100vh - 95px)" maxW={"70rem"} px={4} mt={6}>
          {children}
        </Container>
      </Box>
      <SideDrawer onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default DashboardLayout;
