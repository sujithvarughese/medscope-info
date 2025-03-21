import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {
  addAllergies,
  addCurrentMedications,
  addMedicalHistory,
  addSymptoms,
  fetchSymptomAssessment, removeAllergies, removeCurrentMedications,
  removeMedicalHistory,
  removeSymptoms, setAge, setAlcohol, setDiet, setExercise, setHeight, setSex, setSmoking, setStressLevel, setWeight
} from "../features/globalSlice.ts";
import {useNavigate} from "react-router";
import Selector from "../components/Selector.tsx";
import {ActionIcon, Box, Button, Flex, Loader, Radio, Text} from "@mantine/core";
import { IoMdRemoveCircle } from "react-icons/io";
import { MdMale } from "react-icons/md";
import { MdFemale } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import SliderContainer from "../components/SliderContainer.tsx";
import {useEffect} from "react";

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
  const exercise = useAppSelector(state => state.global.profile.lifestyle.exercise)
  const diet = useAppSelector(state => state.global.profile.lifestyle.diet)
  const stressLevel = useAppSelector(state => state.global.profile.lifestyle.stressLevel)

  const medicalHistory = useAppSelector(state => state.global.profile.medicalHistory)
  const currentMedications = useAppSelector(state => state.global.profile.currentMedications)
  const allergies = useAppSelector(state => state.global.profile.allergies)

  const navigate = useNavigate()
  const handleSubmit = async () => {
    await dispatch(fetchSymptomAssessment())
    navigate("/symptomResults")
  }


  useEffect(() => {
    console.log(symptoms)
  }, [symptoms])

  return (
    <Flex direction="column" maw={600} gap={32} p="xl" m="auto" bg="white" style={{ borderRadius: "12px", boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)"}}>

      <Flex justify="space-between" align="center">
        <ActionIcon variant="gradient" onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </ActionIcon>
        <Text style={{ fontSize: 32, fontWeight: 700 }}>Symptoms</Text>
      </Flex>

      <SliderContainer
        value={age}
        onChange={value => dispatch(setAge(value))}
        min={18} max={120} step={1}
        label="Age"
      />

      <Flex style={styles.section}>
        <Text>Sex</Text>
        <Box style={styles.selections}>
          <Button w={120} variant="default" style={[styles.selection, sex === "male" && styles.selected]} onClick={() => dispatch(setSex("male"))}>
            <MdMale />
            <Text p={6}>Male</Text>
          </Button>

          <Button w={120} variant="default" style={[styles.selection, sex === "female" && styles.selected]} onClick={() => dispatch(setSex("female"))}>
            <MdFemale />
            <Text p={4}>Female</Text>
          </Button>
        </Box>
      </Flex>

      <SliderContainer
        value={height}
        onChange={value => dispatch(setHeight(value))}
        min={18} max={96} step={1}
        label="Height"
        displayValue={`${Math.floor(height / 12)}' ${height % 12}"`}
      />

      <SliderContainer
        value={weight}
        onChange={value => dispatch(setWeight(value))}
        min={50} max={500} step={1}
        label="Weight"
        displayValue={`${weight}' lbs`}
      />

      <Flex style={styles.section}>
        <Text>Smoking</Text>
        <Radio.Group
          value={smoking}
          onChange={(value) => dispatch(setSmoking(value))}
        >
          <Flex gap={16}>
            <Radio value="Never" label="Never" />
            <Radio value="Sometimes" label="Sometimes" />
            <Radio value="Often" label="Often" />
          </Flex>
        </Radio.Group>
      </Flex>

      <Flex style={styles.section}>
        <Text>Alcohol</Text>
        <Radio.Group
          value={alcohol}
          onChange={(value) => dispatch(setAlcohol(value))}
        >
          <Flex gap={16}>
            <Radio value="Never" label="Never" />
            <Radio value="Sometimes" label="Sometimes" />
            <Radio value="Often" label="Often" />
          </Flex>
        </Radio.Group>
      </Flex>

      <Flex style={styles.section}>
        <Text>Exercise</Text>
        <Radio.Group
          value={exercise}
          onChange={(value) => dispatch(setExercise(value))}
        >
          <Flex gap={16}>
            <Radio value="Never" label="Never" />
            <Radio value="Sometimes" label="Sometimes" />
            <Radio value="Often" label="Often" />
          </Flex>
        </Radio.Group>
      </Flex>

      <Flex style={styles.section}>
        <Text>Diet</Text>
        <Radio.Group
          value={diet}
          onChange={(value) => dispatch(setDiet(value))}
        >
          <Flex gap={16}>
            <Radio value="Poor" label="Poor" />
            <Radio value="Mixed" label="Mixed" />
            <Radio value="Balanced" label="Balanced" />
          </Flex>
        </Radio.Group>
      </Flex>

      <Flex style={styles.section}>
        <Text>Stress Level</Text>
        <Radio.Group
          value={stressLevel}
          onChange={(value) => dispatch(setStressLevel(value))}
        >
          <Flex gap={16}>
            <Radio value="Low" label="Low" />
            <Radio value="Moderate" label="Moderate" />
            <Radio value="High" label="High" />
          </Flex>
        </Radio.Group>
      </Flex>

      <Selector
        category="conditions"
        onSelect={(item) => dispatch(addSymptoms(item))}
        label="Symptoms"
        list={symptoms}
        onRemove={item => dispatch(removeSymptoms(item))}
      />

      <Selector
        category="conditions"
        onSelect={(item) => dispatch(addMedicalHistory(item))}
        label="Medical History"
        list={medicalHistory}
        onRemove={item => dispatch(removeMedicalHistory(item))}
      />

      <Selector
        category="drugs"
        onSelect={(item) => dispatch(addCurrentMedications(item))}
        label="Current Medications"
        list={currentMedications}
        onRemove={item => dispatch(removeCurrentMedications(item))}
      />

      <Selector
        category="conditions"
        onSelect={(item) => dispatch(addAllergies(item))}
        label="Allergies"
        list={allergies}
        onRemove={item => dispatch(removeAllergies(item))}
      />

      <Flex justify="center">
        {loading ? <Loader type="bars"/> : <Button onClick={handleSubmit} bg="#20B2AA">Submit</Button>}
      </Flex>
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
    backgroundColor: "#20B2AA",
    color: "white",
  }
};
export default SymptomForm;