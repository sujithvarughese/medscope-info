import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {useState} from "react";
import {fetchConditionInfo, fetchDrugInfo} from "../features/globalSlice.ts";
import Selector from "../components/Selector.tsx";
import ConditionResults from "../components/ConditionResults.tsx";
import DrugResults from "../components/DrugResults.tsx";
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

      <Flex direction="column" gap={16} p="xl" maw={900} mx="auto">

        <Flex direction={{ base: "column", sm: "row" }} p="xl" bg="white" justify="center" align="center"  mx="auto" gap={16} w={{ base: 300, sm: 400 }} style={{ borderRadius: 12, boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)" }}>
          <Selector category="combined" onSelect={(item: string, group: string) => setValue({ item: item, group: group })} />
          {loading ? <Loader type="bars" />  : <Button onClick={handleSubmit} bg="#20B2AA">Search</Button>}
        </Flex>

        {displayResults === "conditions" && <ConditionResults />}
        {displayResults === "drugs" && <DrugResults />}

      </Flex>


  );
};

export default Research;