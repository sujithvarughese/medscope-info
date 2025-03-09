import { FaChevronRight } from "react-icons/fa";
import {BackgroundImage, Box, Flex, Text, UnstyledButton} from "@mantine/core";
import {useNavigate} from "react-router";
import bg1 from "../assets/bg-1.jpeg"

const AI = () => {

  const navigate = useNavigate();

  return (
    <BackgroundImage src={bg1} h="100vh">
      <Box maw={900} m="auto" p={{ base: "md", md: "xl"}} h="100%">
        <Text style={styles.title}>Powerful AI-based Health Tools</Text>

        <Flex direction="column" gap={56} h="100%">

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
  container: {

  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },

  button: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 0 12px rgba(0, 0, 0, 0.2)",
    borderRadius: 12,
    padding: 32,
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