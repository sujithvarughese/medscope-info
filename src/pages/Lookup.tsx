import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {useState} from "react";
import {fetchConditionInfo, fetchDrugInfo} from "../features/globalSlice.ts";

const Lookup = () => {

  const dispatch = useAppDispatch()
  const [showSelectorModal, setShowSelectorModal] = useState(false)

  const loading = useAppSelector(state => state.global.loading)
  const handleSelect = async (item: string, category: string) => {
    setShowSelectorModal(false)
    if (category === "conditions") {
      await dispatch(fetchConditionInfo(item))
    } else {
      await dispatch(fetchDrugInfo(item))
    }
  }

  return (
    <div>
      
    </div>
  );
};

export default Lookup;