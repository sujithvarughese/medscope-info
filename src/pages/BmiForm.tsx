import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {fetchBmiResults, setAge, setHeight, setHip, setSex, setWaist, setWeight} from "../features/globalSlice.ts";
import {useNavigate} from "react-router";
import {Button, Flex, Loader, Slider, Text} from "@mantine/core";
import {MdFemale, MdMale} from "react-icons/md";

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
    <div>
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
        <Text>Waist Size</Text>
        <Slider min={18} max={52} step={1} value={waist} w={200} onChange={value => dispatch(setWaist(value))}/>
      </Flex>

      <Flex style={styles.section}>
        <Text>Hip Size</Text>
        <Slider min={18} max={52} step={1} value={hip} w={200} onChange={value => dispatch(setHip(value))}/>
      </Flex>

      {loading ? <Loader /> : <Button onClick={handleSubmit}>Submit</Button>}

    </div>
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