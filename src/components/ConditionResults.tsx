import {Box, Text} from "@mantine/core";
import { GoDotFill } from "react-icons/go";
import {useAppSelector} from "../utilities/hooks.ts";

type ConditionInfoProps = {
  name: string,
  overview: string,
  commonMisconceptions: string[],
  latestResearch: string[],
  lifestyleConsiderations: string[],
}

const ConditionResults = () => {

  const conditionInfo: ConditionInfoProps = useAppSelector(state => state.global.results.conditionInfo)


  return (
    <Box style={styles.container}>
      <Box>
        <Text style={styles.name}>{conditionInfo?.name}</Text>
      </Box>

      <Box>
        <Text style={styles.heading}>Overview</Text>
        <Text>{conditionInfo?.overview}</Text>
      </Box>

      <Box>
        <Text style={styles.heading}>Common Misconceptions</Text>
        {conditionInfo?.commonMisconceptions.map((item, index) =>
          <Box key={index} style={styles.listItem}>
            <GoDotFill />
            <Text>{item}</Text>
          </Box>
        )}
      </Box>

      <Box>
        <Text style={styles.heading}>Latest Research</Text>
        {conditionInfo?.latestResearch.map((item, index) =>
          <Box key={index} style={styles.listItem}>
            <GoDotFill />
            <Text>{item}</Text>
          </Box>
        )}
      </Box>

      <Box>
        <Text style={styles.heading}>Lifestyle Considerations</Text>
        {conditionInfo?.lifestyleConsiderations.map((item, index) =>
          <Box key={index} style={styles.listItem}>
            <GoDotFill />
            <Text>{item}</Text>
          </Box>
        )}
      </Box>

    </Box>
  );
};

const styles = {
  page:{
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    gap: 16,
    backgroundColor: '#fff',
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItem: {
    padding: 4,
    gap: 16,
    alignItems: 'center',
  }
};

export default ConditionResults;