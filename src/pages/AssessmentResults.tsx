import {useAppSelector} from "../utilities/hooks.ts";
import {Box, Button, Loader, Text} from "@mantine/core";

const AssessmentResults = () => {

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
    <Box style={styles.container}>
      <Text style={styles.title}>Health Assessment Results</Text>
      <Box style={styles.section}>
        <Text style={styles.heading}>Overview</Text>
        <Text>{overview}</Text>
      </Box>

      <Box>
        <Text style={styles.heading}>Key Areas</Text>
        {keyAreas.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>

      <Box>
        <Text style={styles.heading}>Risk Factors</Text>
        {riskFactors.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>

      <Box>
        <Text>Recommendations</Text>
        <Box style={styles.section}>
          <Text style={styles.heading}>Diet</Text>
          {diet.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
        <Box style={styles.section}>
          <Text style={styles.heading}>Exercise</Text>
          {exercise.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
        <Box style={styles.section}>
          <Text style={styles.heading}>Sleep</Text>
          {sleep.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
        <Box style={styles.section}>
          <Text style={styles.heading}>Stress Management</Text>
          {stressManagement.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
      </Box>

      <Box>
        <Text>Preventive Care</Text>
        <Box style={styles.section}>
          <Text style={styles.heading}>Screenings</Text>
          {screenings.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
        <Box style={styles.section}>
          <Text style={styles.heading}>Vaccinations</Text>
          {vaccinations.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
        <Box style={styles.section}>
          <Text style={styles.heading}>Regular Checkups</Text>
          {regularCheckups.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
        </Box>
      </Box>

      <Box>
        <Text style={styles.heading}>Healthy Living Tips</Text>
        {healthyLivingTips.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>

      <Box>
        <Text style={styles.heading}>Community Resources</Text>
        {communityResources.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>

      <Box>
        <Text style={styles.heading}>Short Term Goals</Text>
        {shortTermGoals.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>
      <Box>
        <Text style={styles.heading}>Long Term Goals</Text>
        {longTermGoals.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>
      <Box>
        <Text style={styles.heading}>Monitoring Metrics</Text>
        {monitoringMetrics.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  section: {

  },
  conditionContainer: {
    gap: 8
  },
  condition: {
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  heading: {
    fontWeight: 'bold',
  },
  symptomList: {

  },
  text: {

  }
};

export default AssessmentResults;