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
    <Box style={styles.container}>
      <Flex style={styles.heading}>
        <IoFitnessSharp size={24} color="red" />
        <Title style={styles.title}>Health tip of the day</Title>
      </Flex>
      <Text style={styles.text}>{healthTip}</Text>
    </Box>
 );
};

const styles = {
  container: {
    backgroundColor: "red",
    padding: 12,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 12
  },
  heading: {
    gap: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: "600"
  },
  text: {
    fontSize: 16,
  }
};

export default HealthTip;