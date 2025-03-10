import {ActionIcon, Box, Flex, Text} from "@mantine/core";
import {useAppSelector} from "../utilities/hooks.ts";
import {IoIosArrowBack} from "react-icons/io";
import {useNavigate} from "react-router";

const BmiResults = () => {

  const navigate = useNavigate()

  const bmi = useAppSelector(state => state.global.results.bmi.bmi)
  const status = useAppSelector(state => state.global.results.bmi.status)
  const risk = useAppSelector(state => state.global.results.bmi.risk)
  const prime = useAppSelector(state => state.global.results.bmi.prime)
  const ponderalIndex = useAppSelector(state => state.global.results.bmi.ponderalIndex)
  const bmr = useAppSelector(state => state.global.results.bmi.bmr)
  const waistHipRatio = useAppSelector(state => state.global.results.bmi.waistHipRatio)
  const waistHipStatus = useAppSelector(state => state.global.results.bmi.waistHipStatus)
  const waistHeightRatio = useAppSelector(state => state.global.results.bmi.waistHeightRatio)
  const waistHeightStatus = useAppSelector(state => state.global.results.bmi.waistHeightStatus)

  return (
    <Flex direction="column" maw={600} gap={32} p="xl" m="auto" style={{ backgroundColor: "white"}}>

      <Flex>
        <ActionIcon variant="gradient" onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </ActionIcon>
      </Flex>

      <Text w={400} m="auto" style={{ fontSize: 36, fontWeight: 700 }}>BMI Results</Text>

      <Flex direction="column" justify="center" align="center">
        <Text>Your body mass index (BMI) is</Text>
        <Text style={{ fontSize: 28, fontWeight: 700 }}>{bmi}</Text>
      </Flex>

      <Flex justify="center" align="center" gap={4}>
        <Text>Status: </Text>
        <Text style={{ fontWeight: 600 }}>{status}</Text>
      </Flex>

      <Box w={400} m="auto">
        <Text style={{ fontWeight: 600 }}>Risk Factors</Text>
        <Text>{risk}</Text>
      </Box>

      <Flex justify="space-between" align="center" gap={32} w={400} m="auto">
        <Text>BMI Prime</Text>
        <Text style={{ fontWeight: 700 }}>{prime}</Text>
      </Flex>

      <Flex justify="space-between" align="center" gap={32} w={400} m="auto">
        <Text>Ponderal Index</Text>
        <Text style={{ fontWeight: 700 }}>{ponderalIndex}</Text>
      </Flex>

      <Flex justify="space-between" align="center" gap={32} w={400} m="auto">
        <Text>Basal Metabolic Rate (BMR)</Text>
        <Text style={{ fontWeight: 700 }}>{bmr}</Text>
      </Flex>

      <Flex justify="space-between" align="center" gap={32} w={400} m="auto">
        <Text>Waist-to-Hip Ratio</Text>
        <Text style={{ fontWeight: 700 }}>{waistHipRatio}</Text>
      </Flex>

      <Flex justify="space-between" align="center" gap={32} w={400} m="auto">
        <Text>Waist-to-Hip Status</Text>
        <Text style={{ fontWeight: 700 }}>{waistHipStatus}</Text>
      </Flex>

      <Flex justify="space-between" align="center" gap={32} w={400} m="auto">
        <Text>Waist-to-Height Ratio</Text>
        <Text style={{ fontWeight: 700 }}>{waistHeightRatio}</Text>
      </Flex>

      <Flex justify="space-between" align="center" gap={32} w={400} m="auto">
        <Text>Waist-to-Height Status</Text>
        <Text style={{ fontWeight: 700 }}>{waistHeightStatus}</Text>
      </Flex>

    </Flex>
  );
};

export default BmiResults;