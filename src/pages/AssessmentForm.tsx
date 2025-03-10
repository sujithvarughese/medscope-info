import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {
  ActionIcon,
  Box,
  Button,
  Checkbox,
  Flex, Group,
  Loader,
  Radio,
  Switch,
  Text
} from "@mantine/core";
import {
  addMedicalHistory, fetchHealthRecommendations, fetchSymptomAssessment,
  removeMedicalHistory,
  setAge,
  setAlcohol,
  setBloodSugar,
  setBmi, setCancer, setDiabetes,
  setDiastolicBloodPressure,
  setDiet,
  setExercise, setHeartDisease,
  setHeight,
  setRestingHeartRate,
  setSex,
  setSmoking,
  setSystolicBloodPressure,
  setWeight,
  toggleImproveBloodPressure,
  toggleIncreaseFitness,
  togglePreventDiabetes,
  toggleStressReduction,
  toggleWeightManagement
} from "../features/globalSlice.ts";
import {MdFemale, MdMale} from "react-icons/md";
import Selector from "../components/Selector.tsx";
import {IoIosArrowBack, IoMdRemoveCircle} from "react-icons/io";
import {useNavigate} from "react-router";
import SliderContainer from "../components/SliderContainer.tsx";

const AssessmentForm = () => {

  const dispatch = useAppDispatch()

  const loading = useAppSelector(state => state.global.loading)
  const age = useAppSelector(state => state.global.profile.age)
  const sex = useAppSelector(state => state.global.profile.sex)
  const height = useAppSelector(state => state.global.profile.height)
  const weight = useAppSelector(state => state.global.profile.weight)
  const bmi = useAppSelector(state => state.global.profile.bmi)

  const smoking = useAppSelector(state => state.global.profile.lifestyle.smoking)
  const alcohol = useAppSelector(state => state.global.profile.lifestyle.alcohol)
  const exercise = useAppSelector(state => state.global.profile.lifestyle.exercise)
  const diet = useAppSelector(state => state.global.profile.lifestyle.diet)
  const stressLevel = useAppSelector(state => state.global.profile.lifestyle.stressLevel)
  const diabetesHistory = useAppSelector(state => state.global.profile.familyHistory.diabetes)
  const heartDiseaseHistory = useAppSelector(state => state.global.profile.familyHistory.heartDisease)
  const cancerHistory = useAppSelector(state => state.global.profile.familyHistory.cancer)
  const systolicBloodPressure = useAppSelector(state => state.global.profile.vitals.bloodPressure.systolic)
  const diastolicBloodPressure = useAppSelector(state => state.global.profile.vitals.bloodPressure.diastolic)
  const restingHeartRate = useAppSelector(state => state.global.profile.vitals.restingHeartRate)
  const bloodSugar = useAppSelector(state => state.global.profile.vitals.bloodSugar)

  const medicalHistory = useAppSelector(state => state.global.profile.medicalHistory)

  const weightManagement = useAppSelector(state => state.global.profile.goals.weightManagement)
  const stressReduction = useAppSelector(state => state.global.profile.goals.stressReduction)
  const improveBloodPressure = useAppSelector(state => state.global.profile.goals.improveBloodPressure)
  const preventDiabetes = useAppSelector(state => state.global.profile.goals.preventDiabetes)
  const increaseFitness = useAppSelector(state => state.global.profile.goals.increaseFitness)

  const navigate = useNavigate()
  const handleSubmit = async () => {
    await dispatch(fetchHealthRecommendations())
    navigate("/assessmentResults")
  }

  return (
    <Flex direction="column" maw={600} p="xl" m="auto" gap={32} style={{ borderRadius: "12px", boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)"}} bg="white">

      <Flex justify="space-between" align="center">
        <ActionIcon variant="gradient" onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </ActionIcon>
        <Text style={{ fontSize: 32, fontWeight: 700 }}>Health Assessment</Text>
      </Flex>

      <SliderContainer
        value={age}
        onChange={value => dispatch(setAge(value))}
        min={18} max={120} step={1}
        label="Age"
      />

      <Flex style={styles.section}>
        <Text>Sex</Text>
        <Text style={styles.selections}>
          <Button w={120} variant="default" style={[styles.selection, sex === "male" && styles.selected]} onClick={() => dispatch(setSex("male"))}>
            <MdMale />
            <Text p={4}>Male</Text>
          </Button>

          <Button w={120} variant="default"  style={[styles.selection, sex === "female" && styles.selected]} onClick={() => dispatch(setSex("female"))}>
            <MdFemale />
            <Text p={6}>Female</Text>
          </Button>
        </Text>
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

      <SliderContainer
        value={bmi}
        onChange={value => dispatch(setBmi(value))}
        min={2} max={50} step={1}
        label="Body Mass Index (BMI)"
      />

      <SliderContainer
        value={diastolicBloodPressure}
        onChange={value => dispatch(setDiastolicBloodPressure(value))}
        min={50} max={200} step={1}
        label="Diastolic Blood Pressure"
      />
      <SliderContainer
        value={systolicBloodPressure}
        onChange={value => dispatch(setSystolicBloodPressure(value))}
        min={40} max={160} step={1}
        label="Systolic Blood Pressure"
      />

      <SliderContainer
        value={restingHeartRate}
        onChange={value => dispatch(setRestingHeartRate(value))}
        min={40} max={200} step={1}
        label="Resting Heart Rate"
      />

     <SliderContainer
       value={bloodSugar}
       onChange={value => dispatch(setBloodSugar(value))}
       min={50} max={200} step={1}
       label="Blood Sugar"
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

      <Checkbox.Group
        label="Family History"
        description="Select conditions that are present in your family."
        display={{ base: "none", md: "initial" }}
      >
        <Group mt="xs">
          <Checkbox value="diabetesHistory" label="Weight Management" onChange={e => dispatch(setDiabetes(e.currentTarget.checked))} />
          <Checkbox value="heartDiseaseHistory" label="Stress Reduction" onChange={e => dispatch(setHeartDisease(e.currentTarget.checked))} />
          <Checkbox value="cancerHistory" label="Improve Blood Pressure" onChange={e => dispatch(setCancer(e.currentTarget.checked))} />
          <Checkbox value="preventDiabetes" label="Prevent Diabetes" onChange={e => dispatch(togglePreventDiabetes(e.currentTarget.checked))} />
          <Checkbox value="increaseFitness" label="Increase Fitness" onChange={e => dispatch(toggleIncreaseFitness(e.currentTarget.checked))} />
        </Group>
      </Checkbox.Group>

      <Checkbox.Group
        label="Goals"
        description="Select your goals."
        display={{ base: "none", md: "initial" }}
      >
        <Group mt="xs">
          <Checkbox value="weightManagement" label="Weight Management" onChange={e => dispatch(toggleWeightManagement(e.currentTarget.checked))} />
          <Checkbox value="stressReduction" label="Stress Reduction" onChange={e => dispatch(toggleStressReduction(e.currentTarget.checked))} />
          <Checkbox value="improveBloodPressure" label="Improve Blood Pressure" onChange={e => dispatch(toggleImproveBloodPressure(e.currentTarget.checked))} />
          <Checkbox value="preventDiabetes" label="Prevent Diabetes" onChange={e => dispatch(togglePreventDiabetes(e.currentTarget.checked))} />
          <Checkbox value="increaseFitness" label="Increase Fitness" onChange={e => dispatch(toggleIncreaseFitness(e.currentTarget.checked))} />
        </Group>
      </Checkbox.Group>

      <Flex direction="column" gap={16} display={{ md: "none"}}>
        <Text style={{ textAlign: "center" }}>Family History</Text>
        <Flex style={styles.section} >
          <Text>Diabetes</Text>
          <Switch checked={diabetesHistory} onChange={e => dispatch(setDiabetes(e.currentTarget.checked))}/>
        </Flex>

        <Flex style={styles.section}>
          <Text>Heart Disease</Text>
          <Switch checked={heartDiseaseHistory} onChange={e => dispatch(setHeartDisease(e.currentTarget.checked))}/>
        </Flex>

        <Flex style={styles.section}>
          <Text>Cancer</Text>
          <Switch checked={cancerHistory} onChange={e => dispatch(setCancer(e.currentTarget.checked))}/>
        </Flex>
      </Flex>

      <Flex direction="column" gap={16} display={{ md: "none"}}>
        <Text style={{ textAlign: "center" }}>Goals</Text>
        <Flex style={styles.section} >
          <Text>Weight Management</Text>
          <Switch checked={weightManagement} onChange={e => dispatch(toggleWeightManagement(e.currentTarget.checked))}/>
        </Flex>

        <Flex style={styles.section}>
          <Text>Stress Reduction</Text>
          <Switch checked={stressReduction} onChange={e => dispatch(toggleStressReduction(e.currentTarget.checked))}/>
        </Flex>

        <Flex style={styles.section}>
          <Text>Improve Blood Pressure</Text>
          <Switch checked={improveBloodPressure} onChange={e => dispatch(toggleImproveBloodPressure(e.currentTarget.checked))}/>
        </Flex>

        <Flex style={styles.section}>
          <Text>Prevent Diabetes</Text>
          <Switch checked={preventDiabetes} onChange={e => dispatch(togglePreventDiabetes(e.currentTarget.checked))}/>
        </Flex>

        <Flex style={styles.section}>
          <Text>Increase Fitness</Text>
          <Switch checked={increaseFitness} onChange={e => dispatch(toggleIncreaseFitness(e.currentTarget.checked))}/>
        </Flex>
      </Flex>

      <Flex justify="center">
        {loading ? <Loader type="bars" /> : <Button onClick={handleSubmit} bg="#20B2AA">Submit</Button>}
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

export default AssessmentForm;