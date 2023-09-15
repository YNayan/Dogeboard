import React, { Fragment } from "react";
import { CustomCard } from "../../../UI/CustomCard";
import {  Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { BsCurrencyBitcoin, BsCurrencyRupee } from "react-icons/bs";

const TransactionsSection = () => {
  const transactions = [
    {
      id: 1,
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timeStamp: "2022-06-09 7:06 PM",
    },
    {
      id: 2,
      icon: BsCurrencyBitcoin,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timeStamp: "2022-06-09 7:06 PM",
    },
    {
      id: 3,
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timeStamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text fontSize={"sm"} color={"black.80"} mb={6}>
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider/>}
            <Flex gap={4}>
              <Grid
                placeItems={"center"}
                bg={"black.5"}
                boxSize={10}
                borderRadius={"full"}
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justify={"space-between"} w={"full"}>
                <Stack spacing={0}>
                  <Text textStyle={"h6"}>{transaction.text}</Text>
                  <Text fontSize={"sm"} color={"black.80"}>
                    {transaction.timeStamp}
                  </Text>
                </Stack>
                <Text>{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w={'full'} colorScheme="gray" mt={6}>
        View All
      </Button>
    </CustomCard>
  );
};

export default TransactionsSection;
