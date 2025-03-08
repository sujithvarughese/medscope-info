import { FaChevronRight } from "react-icons/fa";
import {BackgroundImage, Box, Flex, Text, Title, UnstyledButton} from "@mantine/core";
import {useNavigate} from "react-router";
import bg1 from "../assets/bg-1.jpeg"

const AI = () => {

  const navigate = useNavigate();

  return (
    <BackgroundImage src={bg1} style={styles.background}>
      <Box style={styles.container}>
        <Text style={styles.title}>Powerful AI-based Health Tools</Text>

        <Flex direction="column" style={styles.buttonContainer}>

          <UnstyledButton onClick={() => navigate("/symptomForm")} style={styles.button}>
            <Box style={styles.textContainer}>
              <Text style={styles.heading}>Analyze Symptoms</Text>
              <Text style={styles.description}>Analyze your symptoms and get a personalized health assessment</Text>
            </Box>
            <FaChevronRight />
          </UnstyledButton>

          <UnstyledButton onClick={() => navigate("/assessmentForm")} style={styles.button}>
            <Box style={styles.textContainer}>
              <Text style={styles.heading}>Get Health Recommendations</Text>
              <Text style={styles.description}>Get personalized health recommendations based on your profile</Text>
            </Box>
            <FaChevronRight />
          </UnstyledButton>

          <UnstyledButton onClick={() => navigate("/bmiForm")} style={styles.button}>
            <Box style={styles.textContainer}>
              <Text style={styles.heading}>Calculate BMI</Text>
              <Text style={styles.description}>Calculate your BMI and more</Text>
            </Box>
            <FaChevronRight />
          </UnstyledButton>
        </Flex>

      </Box>
    </BackgroundImage>




  );
};

const styles = {
  background: {
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  container: {
    padding: 20,
    paddingTop: 60,
    flex: 1,
    gap: 30
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
  buttonContainer: {
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'flex-start',

  },
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
    padding: 12,
  },
  textContainer: {
    width: "80%",
    gap: 12,
  },
  text: {
    width: "100%",
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",

  },
  description: {

  }
};

export default AI;