import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {ActionIcon, Box, Button, Flex, Loader, NativeSelect, Slider, Switch, Text} from "@mantine/core";
import {
  addMedicalHistory, fetchHealthRecommendations, fetchSymptomAssessment,
  removeMedicalHistory,
  setAge,
  setAlcohol,
  setBloodSugar,
  setBmi,
  setDiastolicBloodPressure,
  setDiet,
  setExercise,
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
import {IoMdRemoveCircle} from "react-icons/io";
import {useNavigate} from "react-router";

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
  const activityLevel = useAppSelector(state => state.global.profile.lifestyle.activityLevel)
  const exercise = useAppSelector(state => state.global.profile.lifestyle.exercise)
  const diet = useAppSelector(state => state.global.profile.lifestyle.diet)
  const sleepHours = useAppSelector(state => state.global.profile.lifestyle.sleepHours)
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
    <Flex direction="column" style={styles.container}>
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
        <Text>Weight</Text>
        <Slider min={2} max={50} step={1} value={bmi} w={200} onChange={value => dispatch(setBmi(value))}/>
      </Flex>

      <Flex style={styles.section}>
        <Text>Diastolic Blood Pressure</Text>
        <Slider min={50} max={200} step={1} value={diastolicBloodPressure} w={200} onChange={value => dispatch(setDiastolicBloodPressure(value))}/>
      </Flex>

      <Flex style={styles.section}>
        <Text>Systolic Blood Pressure</Text>
        <Slider min={2} max={50} step={150} value={systolicBloodPressure} w={200} onChange={value => dispatch(setSystolicBloodPressure(value))}/>
      </Flex>

      <Flex style={styles.section}>
        <Text>Resting Heart Rate</Text>
        <Slider min={40} max={50} step={200} value={restingHeartRate} w={200} onChange={value => dispatch(setRestingHeartRate(value))}/>
      </Flex>

      <Flex style={styles.section}>
        <Text>Blood Sugar</Text>
        <Slider min={50} max={50} step={200} value={bloodSugar} w={200} onChange={value => dispatch(setBloodSugar(value))}/>
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

      <Flex style={styles.section}>
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

      {loading ? <Loader /> : <Button onClick={handleSubmit}>Submit</Button>}

    </Flex>
  );
};

const styles = {
  container: {
    margin: "auto",
    gap: 16,
    width: 800
  },
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

export default AssessmentForm;