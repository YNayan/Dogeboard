import React from "react";

import DashboardLayout from "../../Components/DashboardLayout";
import PortFolio from "./Components/PortFolio";
import PriceSection from "./Components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import TransactionsSection from "./Components/TransactionsSection";
import InfoCard from "./Components/InfoCard";

const DashBoard = () => {
  return (
    <DashboardLayout title={"Dashboard"}>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          xl: "repeat(2,1fr)",
        }}
        gap={6}
      >
        <GridItem colSpan={{ base: 1, xl: 2 }}>
          <PortFolio />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <TransactionsSection />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            primary={"p.purple"}
            secondary={"white"}
            tag={"loan"}
            imgurl={"/dot_bg.svg"}
            text={
              "Learn more about Loans - Keep your Bitcoin, access it's value without selling it"
            }
            isInverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            primary={"white"}
            secondary={"p.purple"}
            tag={"contact"}
            imgurl={"/grid_bg.svg"}
            text={
              "Learn more about our real estate, mortage, and corporate account services"
            }
            isInverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default DashBoard;
