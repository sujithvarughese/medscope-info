import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {useState} from "react";
import {fetchConditionInfo, fetchDrugInfo} from "../features/globalSlice.ts";
import AsyncSelect from "react-select/async";
import Selector from "../components/Selector.tsx";



const Lookup = () => {

  const dispatch = useAppDispatch()

  const loading = useAppSelector(state => state.global.loading)
  const handleSelect = async (item: string, category: string) => {
    if (category === "conditions") {
      await dispatch(fetchConditionInfo(item))
    } else {
      await dispatch(fetchDrugInfo(item))
    }
  }



  return (
    <div>
      <Selector category="combined" onSelect={(value) => console.log(value)} />
    </div>
  );
};

export default Lookup;