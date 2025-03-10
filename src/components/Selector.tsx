import {useState, useEffect} from "react";
import axios from "axios";
import AsyncSelect from "react-select/async";
import {ActionIcon, Box, Flex, Text} from "@mantine/core";
import {removeAllergies} from "../features/globalSlice.ts";
import {IoMdRemoveCircle} from "react-icons/io";

type SelectorModalProps = {
  category: "conditions" | "drugs" | "combined",
  onSelect: (item: string, group: string) => void,
  label?: string,
  list?: string[],
  onRemove?: (item: string) => void,
}

type Options = {
  group: string,
  label: string,
  value: string,
}
const Selector = ({ category, onSelect, label, list, onRemove } : SelectorModalProps ) => {

  const [placeholderText, setPlaceholderText] = useState<string>(category === "conditions" ? "e.g. diabetes, headache" : "Search drugs...");

  useEffect(() => {
    if (category === "conditions") {
      setPlaceholderText("e.g. diabetes, headache")
    } else if (category === "drugs") {
      setPlaceholderText("e.g. ibuprofen, aspirin")
    } else {
      setPlaceholderText("e.g. headache, ibuprofen")
    }
  }, [category]);

  const fetchAutoComplete = async (inputValue: string): Promise<Options[]> => {
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
        return [...conditionResults, ...drugResults]
      } catch (error) {
        console.log(error)
        return []
      }
    } else if (category === "conditions") {
      try {
        const responseConditions = await axios(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${inputValue}&maxList=10`)
        const conditionResults = responseConditions.data[3].map((item: string[]) => {
          return { group: "conditions", label: item[0], value: item[0] }
        })
        return conditionResults

      } catch (error) {
        console.log(error)
        return []
      }
    } else if (category === "drugs") {
      try {
        const responseDrugs = await axios(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${inputValue}&maxList=10`)
        const drugResults = responseDrugs.data
        const results = drugResults[1]
        return results.map((item: string) => ({ group: "conditions", label: item, value: item }))
      } catch (error) {
        console.log(error)
        return []
      }
    }
    return [];
  }

  return (
    <Box w="100%">
      <Flex w="100%" justify="space-between" align="center">
        {label && <Text>{label}</Text>}
        <AsyncSelect
          loadOptions={fetchAutoComplete}
          cacheOptions defaultOptions
          placeholder={placeholderText}
          onChange={(newValue) => {
            if (newValue) {
              const { group, value } = newValue;
              onSelect(value, group)
            }
          }}
          styles={{
            control: (provided) => ({
              ...provided,
              borderRadius: 6,
              backgroundColor: "white",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              border: "1px solid #e2e8f0",
              width: "240px",
            }),
          }}
        />
      </Flex>

      {list && onRemove &&
      <Flex direction="column">
        {list.map((item, index) =>
          <Flex key={index} gap={8} align="center" justify="flex-end" p={4}>
            <Text style={{ fontWeight: 600 }}>{item}</Text>
            <ActionIcon variant="subtle" onClick={() => onRemove(item)}><IoMdRemoveCircle size={24} color="red" /></ActionIcon>
          </Flex>)
        }
      </Flex>
      }
    </Box>

  );
};




export default Selector;