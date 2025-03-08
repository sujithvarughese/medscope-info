import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {useState} from "react";
import {fetchConditionInfo, fetchDrugInfo} from "../features/globalSlice.ts";
import Selector from "../components/Selector.tsx";
import ConditionResults from "../components/ConditionResults.tsx";
import DrugResults from "../components/news/DrugResults.tsx";
import {Button, Loader} from "@mantine/core";



const Lookup = () => {

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
    <div>
      <Selector category="combined" onSelect={(item: string, group: string) => setValue({ item: item, group: group })} />
      {loading ? <Loader />  : <Button onClick={handleSubmit}>Search</Button>}
      {displayResults === "conditions" && <ConditionResults />}
      {displayResults === "drugs" && <DrugResults />}
    </div>
  );
};

export default Lookup;