import {useAppSelector} from "../utilities/hooks.ts";
import {ActionIcon, Box, Flex, Text} from "@mantine/core";
import {useNavigate} from "react-router";
import {IoIosArrowBack} from "react-icons/io";

const AssessmentResults = () => {

  const navigate = useNavigate()

  const overview: string = useAppSelector(state => state.global.results.healthAssessment.overview)
  const keyAreas: string[] = useAppSelector(state => state.global.results.healthAssessment.keyAreas)
  const riskFactors: string[] = useAppSelector(state => state.global.results.healthAssessment.riskFactors)
  const diet: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.diet)
  const exercise: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.exercise)
  const sleep: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.sleep)
  const stressManagement: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.stressManagement)
  const screenings: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.screenings)
  const vaccinations: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.vaccinations)
  const regularCheckups: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.regularCheckups)
  const healthyLivingTips: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.healthyLivingTips)
  const communityResources: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.communityResources)
  const shortTermGoals: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.shortTermGoals)
  const longTermGoals: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.longTermGoals)
  const monitoringMetrics: string[] = useAppSelector(state => state.global.results.healthAssessment.recommendations.monitoringMetrics)

  return (
    <Flex direction="column" maw={600} gap={32} p="xl" m="auto" style={{ backgroundColor: "white"}}>

      <Flex>
        <ActionIcon variant="gradient" onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </ActionIcon>
      </Flex>

      <Text style={{ fontSize: 36, fontWeight: 700 }}>Health Assessment Results</Text>

      <Box>
        <Text style={{ fontWeight: 700 }}>Overview</Text>
        <Text>{overview}</Text>
      </Box>

      <Box>
        <Text style={{ fontWeight: 700 }}>Key Areas</Text>
        {keyAreas.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>

      <Box>
        <Text style={{ fontWeight: 700 }}>Risk Factors</Text>
        {riskFactors.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>

      <Box>
        <Text style={{ fontSize: 24, fontWeight: 600 }}>Recommendations</Text>
        <Box>
          <Text style={{ fontWeight: 700 }}>Diet</Text>
          {diet.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
        <Box>
          <Text style={{ fontWeight: 700 }}>Exercise</Text>
          {exercise.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
        <Box>
          <Text style={{ fontWeight: 700 }}>Sleep</Text>
          {sleep.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
        <Box>
          <Text style={{ fontWeight: 700 }}>Stress Management</Text>
          {stressManagement.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
      </Box>

      <Box>
        <Text style={{ fontSize: 24, fontWeight: 600 }}>Preventive Care</Text>
        <Box>
          <Text style={{ fontWeight: 700 }}>Screenings</Text>
          {screenings.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
        <Box>
          <Text style={{ fontWeight: 700 }}>Vaccinations</Text>
          {vaccinations.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
        <Box>
          <Text style={{ fontWeight: 700 }}>Regular Checkups</Text>
          {regularCheckups.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
      </Box>

      <Box>
        <Text style={{ fontSize: 24, fontWeight: 600 }}>Healthy Living Tips</Text>
        {healthyLivingTips.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>

      <Box>
        <Text style={{ fontSize: 24, fontWeight: 600 }}>Community Resources</Text>
        {communityResources.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>

      <Box>
        <Text style={{ fontSize: 24, fontWeight: 600 }}>Short Term Goals</Text>
        {shortTermGoals.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>
      <Box>
        <Text style={{ fontSize: 24, fontWeight: 600 }}>Long Term Goals</Text>
        {longTermGoals.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>
      <Box>
        <Text style={{ fontSize: 24, fontWeight: 600 }}>Monitoring Metrics</Text>
        {monitoringMetrics.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>
    </Flex>
  );
};

export default AssessmentResults;