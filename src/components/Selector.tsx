import {useState, useEffect} from "react";
import axios from "axios";
import AsyncSelect from "react-select/async";

type SelectorModalProps = {
  category: "conditions" | "drugs" | "combined",
  onSelect: (item: string, group: string) => void,
}

type Options = {
  group: string,
  label: string,
  value: string,
}
const Selector = ({ category, onSelect } : SelectorModalProps ) => {

  const [placeholderText, setPlaceholderText] = useState<string>(category === "conditions" ? "e.g. diabetes, headache" : "Search drugs...");

  useEffect(() => {
    if (category === "conditions") {
      setPlaceholderText("e.g. diabetes, headache, etc.")
    } else if (category === "drugs") {
      setPlaceholderText("e.g. ibuprofen, aspirin, etc.")
    } else {
      setPlaceholderText("e.g. headache, ibuprofen, etc.")
    }
  }, [category]);

  const fetchAutoComplete = async (inputValue: string, callback: (options: Options[]) => void) => {
    if (category === "combined") {
      try {
        const responseConditions = await axios(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${inputValue}&maxList=5`)
        const conditionResults = responseConditions.data[3].map((item: string[]) => {
          return { group: "conditions", label: item[0], value: item[0] }
        })
        const responseDrugs = await axios(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${inputValue}&maxList=5`)
        const drugResults = responseDrugs.data[1].map((item: string) => {
          return { group: "drugs", label: item, value: item }
        })
        callback([...conditionResults, ...drugResults])
      } catch (error) {
        console.log(error)
      }
    } else if (category === "conditions") {
      try {
        const responseConditions = await axios(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${inputValue}&maxList=10`)
        const conditionResults = responseConditions.data[3].map((item: string[]) => {
          return { group: "conditions", label: item[0], value: item[0] }
        })
        callback(conditionResults)

      } catch (error) {
        console.log(error)
      }
    } else if (category === "drugs") {
      try {
        const responseDrugs = await axios(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${inputValue}&maxList=10`)
        const drugResults = responseDrugs.data
        const results = drugResults[1]
        callback(results.map((item: string) => ({ group: "conditions", label: item, value: item })))
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <AsyncSelect styles={styles} loadOptions={fetchAutoComplete} cacheOptions defaultOptions placeholder={placeholderText} onChange={({ group, value }: Options): void => onSelect(value, group)}/>
  );
};

const styles = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    borderRadius: 0,
    backgroundColor: "transparent",
    cursor: "pointer",
    padding: 0,
    height: 40,
  })
}



export default Selector;