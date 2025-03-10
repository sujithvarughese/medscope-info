import { FaChevronRight } from "react-icons/fa";
import {BackgroundImage, Box, Flex, Text, UnstyledButton} from "@mantine/core";
import {useNavigate} from "react-router";
import bg1 from "../assets/bg-1.jpeg"

const AI = () => {

  const navigate = useNavigate();

  return (
    <BackgroundImage src={bg1} w={{ base: "95%", md: "80%", lg: "70%" }} m="auto" h="85vh" style={{ borderRadius: "12px" }} maw={1000} >
      <Box maw={900} m="auto" p={{ base: "md", md: "xl"}} h="100%">

        <Text py="xl" style={{ fontSize: 32, fontWeight: 700, textAlign: "center" }}>Powerful AI-based Health Tools</Text>

        <Flex direction="column" gap={56} h="100%" maw={700} m="auto">

          <UnstyledButton onClick={() => navigate("/symptomForm")} style={styles.button}>
            <Box style={styles.textContainer}>
              <Text style={styles.heading}>Analyze Symptoms</Text>
              <Text style={styles.description}>Enter your symptoms and discover possible conditions. Get insights to help guide your next steps toward better health.</Text>
            </Box>
            <FaChevronRight />
          </UnstyledButton>

          <UnstyledButton onClick={() => navigate("/assessmentForm")} style={styles.button}>
            <Box style={styles.textContainer}>
              <Text style={styles.heading}>Get Health Recommendations</Text>
              <Text style={styles.description}>Understand your overall health with a personalized assessment. Get insights tailored to your profile and take control of your well-being.</Text>
            </Box>
            <FaChevronRight />
          </UnstyledButton>

          <UnstyledButton onClick={() => navigate("/bmiForm")} style={styles.button}>
            <Box style={styles.textContainer}>
              <Text style={styles.heading}>Calculate BMI</Text>
              <Text style={styles.description}>Easily calculate your BMI, BMR, and more to understand your body better. Get key health metrics to support your wellness journey.</Text>
            </Box>
            <FaChevronRight />
          </UnstyledButton>
        </Flex>

      </Box>
    </BackgroundImage>




  );
};

const styles = {
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