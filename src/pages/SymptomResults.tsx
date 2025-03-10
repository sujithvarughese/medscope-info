import {useAppSelector} from "../utilities/hooks.ts";
import {ActionIcon, Box, Flex, Text} from "@mantine/core";
import {IoIosArrowBack} from "react-icons/io";
import {useNavigate} from "react-router";

type PossibleConditions = {
  condition: string,
  description: string,
  commonSymptoms: string[],
  riskLevel: string,
  additionalInfo: string,
}

const SymptomResults = () => {

  const navigate = useNavigate()

  const possibleConditions: PossibleConditions[] = useAppSelector(state => state.global.results.symptomAssessment.possibleConditions)
  const recommendedActions: string[] = useAppSelector(state => state.global.results.symptomAssessment.recommendedActions)
  const lifestyleConsiderations: string[] = useAppSelector(state => state.global.results.symptomAssessment.lifestyleConsiderations)
  const whenToSeekMedicalAttention: string[] = useAppSelector(state => state.global.results.symptomAssessment.whenToSeekMedicalAttention)
  const preventiveMeasures: string[] = useAppSelector(state => state.global.results.symptomAssessment.preventiveMeasures)

  return (
    <Flex direction="column" maw={600} gap={32} p="xl" m="auto" style={{ backgroundColor: "white"}}>

      <Flex>
        <ActionIcon variant="gradient" onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </ActionIcon>
      </Flex>

      <Flex direction="column" gap={16} pb={16} style={{ borderBottom: "1px solid #E5E5E5" }}>
        {possibleConditions?.map((item: PossibleConditions, index) =>
          <Flex direction="column" gap={16}>
            <Text style={{ fontSize: 36, fontWeight: 700 }}>{index + 1}. {item.condition}</Text>
            <Text>{item.description}</Text>

            <Box>
              <Text style={{ fontWeight: 700 }}>Risk Level</Text>
              <Text>{'\u30FB'}{item.riskLevel}</Text>
            </Box>

            <Box>
              <Text style={{ fontWeight: 700 }}>Symptoms</Text>
              {item.commonSymptoms?.map((symptom: string, index) => <Text key={index}>{'\u30FB'}{symptom}</Text>)}
            </Box>

            <Box>
              <Text style={{ fontWeight: 700 }}>Additional Information</Text>
              <Text>{item.additionalInfo}</Text>
            </Box>
          </Flex>
        )}
      </Flex>

      <Box>
        <Text style={{ fontSize: 24, fontWeight: 600 }}>Recommended Actions</Text>
        {recommendedActions?.map((item: string, index) => <Text key={index}>{'\u30FB'}{item}</Text>)}
      </Box>

      <Box>
        <Text style={{ fontSize: 24, fontWeight: 600 }}>Lifestyle Considerations</Text>
        {lifestyleConsiderations?.map((item: string, index) => <Text key={index}>{'\u30FB'}{item}</Text>)}
      </Box>

      <Box>
        <Text style={{ fontSize: 24, fontWeight: 600 }}>When to seek medical attention</Text>
        {whenToSeekMedicalAttention?.map((item: string, index) => <Text key={index}>{'\u30FB'}{item}</Text>)}
      </Box>

      <Box>
        <Text style={{ fontSize: 24, fontWeight: 600 }}>Preventive Measures</Text>
        {preventiveMeasures?.map((item: string, index) => <Text key={index}>{'\u30FB'}{item}</Text>)}
      </Box>
    </Flex>

  );
};

export default SymptomResults;