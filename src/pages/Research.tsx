import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {useState} from "react";
import {fetchConditionInfo, fetchDrugInfo} from "../features/globalSlice.ts";
import Selector from "../components/Selector.tsx";
import ConditionResults from "../components/ConditionResults.tsx";
import DrugResults from "../components/news/DrugResults.tsx";
import {BackgroundImage, Box, Button, Flex, Loader} from "@mantine/core";
import bg from "../assets/bg-3.jpeg"


const Research = () => {

  const dispatch = useAppDispatch()

  const loading = useAppSelector(state => state.global.loading)
  const [value, setValue] = useState<{ item: string, group: string} | null>(null)
  const [displayResults, setDisplayResults] = useState<"conditions" | "drugs" | "">("")

  const handleSubmit = async () => {
    if (value && value.group === "conditions") {
      await dispatch(fetchConditionInfo(value.item))
      setDisplayResults("conditions")
    } else if (value && value.group === "drugs") {
      await dispatch(fetchDrugInfo(value.item))
      setDisplayResults("drugs")
    }
  }



  return (
    <BackgroundImage src={bg} h="100vh">
      <Box p="xl" maw={900} mx="auto">
        <Flex p="xl" bg="white" justify="center" align="center" w={600} mx="auto" style={{ borderRadius: 12, boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)" }}>
          <Selector category="combined" onSelect={(item: string, group: string) => setValue({ item: item, group: group })} />
          {loading ? <Loader />  : <Button onClick={handleSubmit}>Search</Button>}
        </Flex>

        {displayResults === "conditions" && <ConditionResults />}
        {displayResults === "drugs" && <DrugResults />}
      </Box>

    </BackgroundImage>
  );
};

export default Research;