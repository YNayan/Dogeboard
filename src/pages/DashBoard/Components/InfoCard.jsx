import { Tag, Text } from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../../UI/CustomCard";

const InfoCard = ({ imgurl, tag, text, primary, secondary,isInverted }) => {
  return (
    <CustomCard bgImage={imgurl} bgSize={"cover"} bgRepeat={"no-repeat"} bgColor={secondary} >
      <Tag bg={primary} color={secondary}>
        {tag}
      </Tag>
      <Text mt={4} fontWeight={"medium"} textStyle={"h6"} color={isInverted?'white':'black.80'}>
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
