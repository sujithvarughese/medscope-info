import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {
  addAllergies,
  addCurrentMedications,
  addMedicalHistory,
  addSymptoms,
  fetchSymptomAssessment, removeAllergies, removeCurrentMedications,
  removeMedicalHistory,
  removeSymptoms, setAge, setAlcohol, setDiet, setExercise, setHeight, setSex, setSmoking, setWeight
} from "../features/globalSlice.ts";
import {useNavigate} from "react-router";
import Selector from "../components/Selector.tsx";
import {ActionIcon, Box, Button, Flex, Loader, NativeSelect, Slider, Text} from "@mantine/core";
import { IoMdRemoveCircle } from "react-icons/io";
import { MdMale } from "react-icons/md";
import { MdFemale } from "react-icons/md";

const SymptomForm = () => {

  const dispatch = useAppDispatch()

  const loading = useAppSelector(state => state.global.loading)

  const symptoms = useAppSelector(state => state.global.profile.symptoms)

  const age = useAppSelector(state => state.global.profile.age)
  const sex = useAppSelector(state => state.global.profile.sex)
  const height = useAppSelector(state => state.global.profile.height)
  const weight = useAppSelector(state => state.global.profile.weight)
  const smoking = useAppSelector(state => state.global.profile.lifestyle.smoking)
  const alcohol = useAppSelector(state => state.global.profile.lifestyle.alcohol)
  const activityLevel = useAppSelector(state => state.global.profile.lifestyle.activityLevel)
  const exercise = useAppSelector(state => state.global.profile.lifestyle.exercise)
  const diet = useAppSelector(state => state.global.profile.lifestyle.diet)
  const sleepHours = useAppSelector(state => state.global.profile.lifestyle.sleepHours)
  const stressLevel = useAppSelector(state => state.global.profile.lifestyle.stressLevel)

  const medicalHistory = useAppSelector(state => state.global.profile.medicalHistory)
  const currentMedications = useAppSelector(state => state.global.profile.currentMedications)
  const allergies = useAppSelector(state => state.global.profile.allergies)

  const navigate = useNavigate()
  const handleSubmit = async () => {
    await dispatch(fetchSymptomAssessment())
    navigate("/symptomResults")
  }



  return (
    <Flex direction="column" align="center" gap={16} p={16} w="600" m="auto">
      <Text>Symptom Form</Text>

      <Box style={styles.dropdown}>
        <Flex style={styles.section}>
          <Text>Symptoms</Text>
          <Selector category="conditions" onSelect={(item) => dispatch(addSymptoms(item))} />
        </Flex>

        {symptoms.map((item, index) =>
          <Box key={index}>
            <Text>{item}</Text>
            <ActionIcon onClick={() => dispatch(removeSymptoms(item))}><IoMdRemoveCircle /></ActionIcon>
          </Box>)
        }
      </Box>

      <Flex style={styles.section}>
        <Text>Age</Text>
        <Slider min={18} max={120} step={1} value={age} w={200} onChange={value => dispatch(setAge(value))}/>
      </Flex>

      <Flex style={styles.section}>
        <Text style={styles.heading}>Sex</Text>
        <Text style={styles.selections}>
          <Button style={[styles.selection, sex === "male" && styles.selected]} onClick={() => dispatch(setSex("male"))}>
            <MdMale />
            <Text>Male</Text>
          </Button>

          <Button style={[styles.selection, sex === "female" && styles.selected]} onClick={() => dispatch(setSex("female"))}>
            <MdFemale />
            <Text>Female</Text>
          </Button>
        </Text>
      </Flex>

      <Flex style={styles.section}>
        <Text>Height</Text>
        <Slider min={18} max={96} step={1} value={height} w={200} onChange={value => dispatch(setHeight(value))}/>
      </Flex>

      <Flex style={styles.section}>
        <Text>Weight</Text>
        <Slider min={50} max={500} step={1} value={weight} w={200} onChange={value => dispatch(setWeight(value))}/>
      </Flex>

      <Flex style={styles.section}>
        <Text>Smoking</Text>
        <NativeSelect
          w={100}
          value={smoking}
          data={["Never", "Sometimes", "Often"]}
          onSelect={(value) => dispatch(setSmoking(value))} />
      </Flex>

      <Flex style={styles.section}>
        <Text>Alcohol</Text>
        <NativeSelect
          w={100}
          value={alcohol}
          data={["Never", "Sometimes", "Often"]}
          onSelect={(value) => dispatch(setAlcohol(value))} />
      </Flex>

      <Flex style={styles.section}>
        <Text>Exercise</Text>
        <NativeSelect
          w={100}
          value={exercise}
          data={["Never", "Sometimes", "Often"]}
          onSelect={(value) => dispatch(setExercise(value))} />
      </Flex>

      <Flex style={styles.section}>
        <Text>Diet</Text>
        <NativeSelect
          w={100}
          data={["Poor", "Mixed", "Balanced", "Excellent"]}
          onSelect={(value) => dispatch(setDiet(value))} />
      </Flex>

      <Box style={styles.dropdown}>
        <Flex style={styles.section}>
          <Text>Medical History</Text>
          <Selector category="conditions" onSelect={(item) => dispatch(addMedicalHistory(item))} />
        </Flex>
        {medicalHistory.map((item, index) =>
          <Box key={index}>
            <Text>{item}</Text>
            <ActionIcon onClick={() => dispatch(removeMedicalHistory(item))}><IoMdRemoveCircle /></ActionIcon>
          </Box>)
        }
      </Box>

      <Box style={styles.dropdown}>
        <Flex style={styles.section}>
          <Text>Current Medications</Text>
          <Selector category="drugs" onSelect={(item) => dispatch(addCurrentMedications(item))} />
        </Flex>
        {currentMedications.map((item, index) =>
          <Box key={index}>
            <Text>{item}</Text>
            <ActionIcon onClick={() => dispatch(removeCurrentMedications(item))}><IoMdRemoveCircle /></ActionIcon>
          </Box>)
        }
      </Box>

      <Box style={styles.dropdown}>
        <Flex style={styles.section}>
          <Text>Allergies</Text>
          <Selector category="drugs" onSelect={(item) => dispatch(addAllergies(item))} />
        </Flex>
        {allergies.map((item, index) =>
          <Box key={index}>
            <Text>{item}</Text>
            <ActionIcon onClick={() => dispatch(removeAllergies(item))}><IoMdRemoveCircle /></ActionIcon>
          </Box>)
        }
      </Box>

      {loading ? <Loader /> : <Button onClick={handleSubmit}>Submit</Button>}

    </Flex>
  );
};

const styles = {
  section: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%",
  },
  dropdown: {
    width: "100%",
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
  },
  selections: {
    display: 'flex',
    gap: 16,
  },
  selection: {

  },
  selected: {
    backgroundColor: "blue",
    color: "white",
  }
};
export default SymptomForm;