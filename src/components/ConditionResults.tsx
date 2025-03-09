import {Box, Flex, Text} from "@mantine/core";
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
    <Flex direction="column" p="xl" bg="white" w={600} mx="auto" gap={16} style={{ borderRadius: 12, boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)" }}>
      <Box>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>{conditionInfo?.name}</Text>
      </Box>

      <Box>
        <Text style={{ fontWeight: 700 }}>Overview</Text>
        <Text>{conditionInfo?.overview}</Text>
      </Box>

      <Box>
        <Text style={{ fontWeight: 700 }}>Common Misconceptions</Text>
        {conditionInfo?.commonMisconceptions.map((item, index) =>
          <Flex key={index} gap={16}>
            <GoDotFill size={24} />
            <Text>{item}</Text>
          </Flex>
        )}
      </Box>

      <Box>
        <Text style={{ fontWeight: 700 }}>Latest Research</Text>
        {conditionInfo?.latestResearch.map((item, index) =>
          <Flex key={index} gap={16}>
            <GoDotFill size={24} />
            <Text>{item}</Text>
          </Flex>
        )}
      </Box>

      <Box>
        <Text style={{ fontWeight: 700 }}>Lifestyle Considerations</Text>
        {conditionInfo?.lifestyleConsiderations.map((item, index) =>
          <Flex key={index} gap={16}>
            <GoDotFill size={24} />
            <Text>{item}</Text>
          </Flex>
        )}
      </Box>

    </Flex>
  );
};


export default ConditionResults;