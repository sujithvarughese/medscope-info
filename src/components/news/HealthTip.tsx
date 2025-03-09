import {useAppDispatch, useAppSelector} from "../../utilities/hooks";
import {useEffect} from "react";
import {fetchHealthTip} from "../../features/globalSlice";
import {Box, Flex, Text, Title} from "@mantine/core";
import { IoFitnessSharp } from "react-icons/io5";

const HealthTip = () => {

  const healthTip = useAppSelector(state => state.global.results.healthTip)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchHealthTip())
  }, []);

  return (
    <Box p={{ base: "md", md: "xl"}} bg="white" maw={600} mx="auto" style={{ borderRadius: 12, boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)" }}>
      <Flex gap={8} align="center">
        <IoFitnessSharp size={32} color="red" />
        <Title style={{ fontSize: 18 }}>Health tip of the day</Title>
      </Flex>
      <Text>{healthTip}</Text>
    </Box>
 );
};

export default HealthTip;