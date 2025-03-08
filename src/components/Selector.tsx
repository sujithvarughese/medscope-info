import {useState, useEffect} from "react";
import axios from "axios";
import {Box, Button, Text, UnstyledButton} from "@mantine/core";
import { BiSearchAlt2 } from "react-icons/bi";
import {fetchConditionInfo, fetchDrugInfo} from "../features/globalSlice.ts";
import {useAppDispatch} from "../utilities/hooks.ts";
import AsyncSelect from "react-select/async";

type SelectorModalProps = {
  category: "conditions" | "drugs" | "combined",
  onSelect: (item: string, category: string) => void,
}

type Options = {
  label: string,
  value: string,
}
const Selector = ({ category, onSelect } : SelectorModalProps ) => {

  const dispatch = useAppDispatch()
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

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

  const fetchAutoComplete = async (inputValue, callback: (options: Options[]) => void) => {
    if (category === "combined") {
      try {
        const responseConditions = await axios(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${inputValue}&maxList=5`)
        const conditionResults = responseConditions.data
        const responseDrugs = await axios(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${inputValue}&maxList=5`)
        const drugResults = responseDrugs.data
        const results = ([...conditionResults[3].map((item: [string]) => item[0]), ...drugResults[1]])
        callback(results.map((item: string) => ({ label: item, value: item })))
      } catch (error) {
        console.log(error)
      }
    } else if (category === "conditions") {
      try {
        const responseConditions = await axios(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${inputValue}&maxList=10`)
        const conditionResults = responseConditions.data
        const results = conditionResults[3].map((item: [string]) => item[0])
        callback(results.map((item: string) => ({ label: item, value: item })))

      } catch (error) {
        console.log(error)
      }
    } else if (category === "drugs") {
      try {
        const responseDrugs = await axios(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${inputValue}&maxList=10`)
        const drugResults = responseDrugs.data
        const results = drugResults[1]
        callback(results.map((item: string) => ({ label: item, value: item })))
      } catch (error) {
        console.log(error)
      }
    }
  }


  return (
    <Box style={styles.container}>

      <Box style={styles.searchContainer}>
        <Box style={styles.searchBar}>
          <BiSearchAlt2 />
          <AsyncSelect loadOptions={fetchAutoComplete} cacheOptions defaultOptions />
        </Box>
        <Button onClick={close}><Text>Cancel</Text></Button>
      </Box>


      <Box style={styles.resultsContainer}>
        {results.map((item: string)=>
          <UnstyledButton onClick={() => onSelect(item, category)} style={styles.listItem}>{item}</UnstyledButton>
        )}
      </Box>

    </Box>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 16,
  },
  searchContainer: {

    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
  searchBar: {

    alignItems: "center",
    width: "80%",
    gap: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
  },
  resultsContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  listItem: {
    paddingVertical: 8,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,

  },
  listHeader: {
    fontSize: 20,
    fontWeight: 700,
  },
  listText: {
    fontSize: 16,
  },
};

export default Selector;