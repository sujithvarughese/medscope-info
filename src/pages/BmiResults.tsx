import {Box, Text} from "@mantine/core";
import {useAppSelector} from "../utilities/hooks.ts";

const BmiResults = () => {

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
    <Box>
      <Text style={styles.title}>BMI Results</Text>

      <Box style={styles.bmiContainer}>
        <Text>Your body mass index (BMI) is</Text>
        <Text style={styles.bmi}>{bmi}</Text>
      </Box>

      <Box>
        <Text style={styles.status}>Status: {status}</Text>
      </Box>

      <Box style={styles.risksContainer}>
        <Text style={styles.risksHeading}>Risk Factors</Text>
        <Text>{risk}</Text>
      </Box>

      <Box style={styles.resultContainer}>
        <Text>BMI Prime</Text>
        <Text style={styles.result}>{prime}</Text>
      </Box>

      <Box style={styles.resultContainer}>
        <Text>Ponderal Index</Text>
        <Text style={styles.result}>{ponderalIndex}</Text>
      </Box>

      <Box style={styles.resultContainer}>
        <Text>Basal Metabolic Rate (BMR)</Text>
        <Text style={styles.result}>{bmr}</Text>
      </Box>

      <Box style={styles.resultContainer}>
        <Text>Waist-to-Hip Ratio</Text>
        <Text style={styles.result}>{waistHipRatio}</Text>
      </Box>

      <Box style={styles.resultContainer}>
        <Text>Waist-to-Hip Status</Text>
        <Text style={styles.result}>{waistHipStatus}</Text>
      </Box>

      <Box style={styles.resultContainer}>
        <Text>Waist-to-Height Ratio</Text>
        <Text style={styles.result}>{waistHeightRatio}</Text>
      </Box>

      <Box style={styles.resultContainer}>
        <Text>Waist-to-Height Status</Text>
        <Text style={styles.result}>{waistHeightStatus}</Text>
      </Box>
    </Box>
  );
};
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
    backgroundColor: '#fff',
    padding: 32,
  },
  title: {
    fontWeight: 'bold',

  },
  bmiContainer: {
    alignItems: 'center',
  },
  bmi: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  status: {
  },
  risksHeading: {
    fontSize: 16,
    fontWeight: 600,
  },
  risksContainer: {
    gap: 4,
    padding: 16,
  },
  resultContainer: {
    justifyContent: 'space-between',
  },
  heading: {

  },
  result: {
    fontWeight: 'bold',
  }
}

export default BmiResults;