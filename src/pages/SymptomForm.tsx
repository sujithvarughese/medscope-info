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
import {ActionIcon, Box, Button, Flex, Loader, NativeSelect, Radio, Slider, Text} from "@mantine/core";
import { IoMdRemoveCircle } from "react-icons/io";
import { MdMale } from "react-icons/md";
import { MdFemale } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import SliderContainer from "../components/SliderContainer.tsx";

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
    <Flex direction="column" maw={600} gap={32} p="xl" m="auto" style={{ backgroundColor: "white"}}>

      <Flex>
        <ActionIcon variant="gradient" onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </ActionIcon>
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
          <Button style={[styles.selection, sex === "male" && styles.selected]} onClick={() => dispatch(setSex("male"))}>
            <MdMale />
            <Text>Male</Text>
          </Button>

          <Button style={[styles.selection, sex === "female" && styles.selected]} onClick={() => dispatch(setSex("female"))}>
            <MdFemale />
            <Text>Female</Text>
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