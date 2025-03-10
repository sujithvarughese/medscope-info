import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {fetchBmiResults, setAge, setHeight, setHip, setSex, setWaist, setWeight} from "../features/globalSlice.ts";
import {useNavigate} from "react-router";
import {ActionIcon, Button, Flex, Loader, Slider, Text} from "@mantine/core";
import {MdFemale, MdMale} from "react-icons/md";
import SliderContainer from "../components/SliderContainer.tsx";
import {IoIosArrowBack} from "react-icons/io";

const BmiForm = () => {

  const dispatch = useAppDispatch()
  const loading = useAppSelector(state => state.global.loading)
  const age = useAppSelector(state => state.global.profile.age)
  const sex = useAppSelector(state => state.global.profile.sex)
  const height = useAppSelector(state => state.global.profile.height)
  const weight = useAppSelector(state => state.global.profile.weight)
  const waist = useAppSelector(state => state.global.profile.waist)
  const hip = useAppSelector(state => state.global.profile.hip)



  const navigate = useNavigate()
  const handleSubmit = async () => {
    await dispatch(fetchBmiResults())
    navigate("/bmiResults")
  }

  return (
    <Flex direction="column" maw={600} p="xl" m="auto" gap={32} style={{ borderRadius: "12px "}} bg="white">

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
        value={waist}
        onChange={value => dispatch(setWaist(value))}
        min={18} max={52} step={1}
        label="Waist Size"
        displayValue={`${waist}"`}
      />

      <SliderContainer
        value={hip}
        onChange={value => dispatch(setHip(value))}
        min={18} max={52} step={1}
        label="Hip Size"
        displayValue={`${hip}"`}
      />

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

export default BmiForm;