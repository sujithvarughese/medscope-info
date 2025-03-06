import { FaChevronRight } from "react-icons/fa";
import {Box, Text, UnstyledButton} from "@mantine/core";
import {useNavigate} from "react-router";


const AI = () => {

  const navigate = useNavigate();

  return (
    <Box style={styles.background}>
      <Box style={styles.container}>
        <Text style={styles.title}>Powerful AI-based Health Tools</Text>

        <Box style={styles.buttonContainer}>

          <UnstyledButton onClick={() => navigate("/symptomForm")} style={styles.link}>
            <Box style={styles.linkContent}>
              <Box style={styles.textContainer}>
                <Text style={styles.heading}>Analyze Symptoms</Text>
                <Text style={styles.description}>Analyze your symptoms and get a personalized health assessment</Text>
              </Box>
              <Box>
                <FaChevronRight />

              </Box>
            </Box>
          </UnstyledButton>

          <UnstyledButton onClick={() => navigate("/assessmentForm")} style={styles.link}>
            <Box style={styles.linkContent}>
              <Box style={styles.textContainer}>
                <Text style={styles.heading}>Get Health Recommendations</Text>
                <Text style={styles.description}>Get personalized health recommendations based on your profile</Text>
              </Box>
              <Box>
                <FaChevronRight />

              </Box>
            </Box>
          </UnstyledButton>

          <UnstyledButton onClick={() => navigate("/bmiForm")} style={styles.link}>
            <Box style={styles.linkContent}>
              <Box style={styles.textContainer}>
                <Text style={styles.heading}>Calculate BMI</Text>
                <Text style={styles.description}>Calculate your BMI and more</Text>
              </Box>
              <Box>
                <FaChevronRight />

              </Box>
            </Box>
          </UnstyledButton>

        </Box>
      </Box>
    </Box>




  );
};

const styles = {
  background: {
    height: "100%",
  },
  container: {
    padding: 20,
    paddingTop: 60,
    flex: 1,
    gap: 30
  },
  title: {
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {

  },
  linkContent: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
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