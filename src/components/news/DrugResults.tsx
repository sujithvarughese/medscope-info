import {Box, Text} from "@mantine/core";
import {useAppSelector} from "../../utilities/hooks.ts";

type DrugInfoProps = {
  name: string,
  description: string,
  precautions: string,
  uses: string[],
  sideEffects: string[],
}

const DrugResults = () => {

  const drugInfo: DrugInfoProps = useAppSelector(state => state.global.results.drugInfo)


  return (
    <Box style={styles.container}>
      <Box>
        <Text style={styles.name}>{drugInfo?.name.charAt(0).toUpperCase() + drugInfo?.name.substring(1)}</Text>
      </Box>

      <Box>
        <Text style={styles.heading}>Description</Text>
        <Text>{drugInfo?.description}</Text>
      </Box>

      <Box>
        <Text style={styles.heading}>Precautions</Text>
        <Text>{drugInfo?.precautions}</Text>
      </Box>

      <Box>
        <Text style={styles.heading}>Uses</Text>
        {drugInfo?.uses?.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>
      <Box>
        <Text style={styles.heading}>Side Effects</Text>
        {drugInfo?.sideEffects?.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>
    </Box>
  );
};

const styles = {
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
  description: {
    fontSize: 16,
  },
  precautions: {

  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  usesContainer: {

  }
};

export default DrugResults;