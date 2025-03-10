import {Box, Flex, Text} from "@mantine/core";
import {useAppSelector} from "../utilities/hooks.ts";

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
    <Flex direction="column" p="xl" bg="white" maw={600} mx="auto" gap={16} style={{ borderRadius: 12, boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)" }}>
      <Box>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>{drugInfo?.name.charAt(0).toUpperCase() + drugInfo?.name.substring(1)}</Text>
      </Box>

      <Box>
        <Text style={{ fontWeight: 700 }}>Description</Text>
        <Text>{drugInfo?.description}</Text>
      </Box>

      <Box>
        <Text style={{ fontWeight: 700 }}>Precautions</Text>
        <Text>{drugInfo?.precautions}</Text>
      </Box>

      <Box>
        <Text style={{ fontWeight: 700 }}>Uses</Text>
        {drugInfo?.uses?.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>

      <Box>
        <Text style={{ fontWeight: 700 }}>Side Effects</Text>
        {drugInfo?.sideEffects?.map((item, index) => <Text key={index}>{'\u30FB'} {item}</Text>)}
      </Box>
    </Flex>
  );
};

export default DrugResults;