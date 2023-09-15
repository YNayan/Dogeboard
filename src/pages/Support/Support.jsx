import React from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import SupportCard from "./Components/SupportCard";
import ContactCard from "./Components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../DashBoard/Components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title={"Support"}>
      <Stack spacing={'80px'}>
        <SupportCard
          rightComponent={<ContactCard />}
          title={"Contact Us"}
          icon={IoMdMail}
          text={
            "Have a question or just want to know more ? Feel free to reach out to us."
          }
        />
        <SupportCard
          rightComponent={
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
          }
          title={"Contact Us"}
          icon={AiTwotoneMessage}
          text={"Don't have time to wait for the answer? Chat with us now"}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
