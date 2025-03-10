import {Box, Flex, Image, Text} from "@mantine/core";
import bg from "../assets/bg-landing.jpeg"
import img2 from "../assets/bg-landing-3.jpeg"
import PreviewButton from "../components/PreviewButton.tsx";

const Landing = () => {
  return (
    <Flex direction="column" maw={1920} mx="auto" p={32} gap={36} m="auto">

      <Flex direction={{ base: "column-reverse", sm: "row"}} justify="space-evenly" align="center">
        <Flex direction="column" align={{ base: "center", md: "flex-start" }}>
          <Flex>
            <Text c="gray" style={{ fontSize: 56, fontWeight: 700 }}>Med</Text>
            <Text c="blue" style={{ fontSize: 56, fontWeight: 700 }}>Scope</Text>
          </Flex>
          <Text style={{ fontWeight: 600 }} pb="xl">Your Health, Your Knowledge, Your Control</Text>
          <PreviewButton />
        </Flex>
        <Image src={bg} alt="Landing Page" w={{ base: "90%", sm: "50%" }} style={{ borderRadius: 12 }}/>
      </Flex>

      <Flex direction={{ base: "column-reverse", sm: "row"}} justify="space-evenly" align="center">

        <Box p={16}>
          <Text style={{ fontWeight: 700, fontSize: 24, textAlign: "center", padding: 16 }}>Welcome to MedScope – Your Ultimate Health Companion</Text>
          <Box>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>Why Choose MedScope?</Text>
            <Flex direction="column" gap={16} style={{ padding: 16 }}>
              <Text style={{ fontWeight: 600 }}>✔ Instant Drug & Condition Lookup – Access accurate, up-to-date information on medications and medical conditions.</Text>
              <Text style={{ fontWeight: 600 }}>✔ Personalized Health Assessments – Get insights tailored to your health profile.</Text>
              <Text style={{ fontWeight: 600 }}>✔ Symptom Checker – Enter your symptoms and receive possible condition suggestions.</Text>
              <Text style={{ fontWeight: 600 }}>✔ BMI & Health Calculators – Monitor key health metrics like BMI and more.</Text>
              <Text style={{ fontWeight: 600 }}>✔ User-Friendly Interface – Easy navigation and quick access to vital health resources.</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Flex direction={{ base: "column-reverse", sm: "row"}} justify="space-evenly" align="center">
        <Image src={img2} alt="Landing Page" w={{ base: "90%", sm: "50%" }} style={{ borderRadius: 12 }} />
        <Flex direction="column" p={16}>
          <Text style={{ fontWeight: 700, fontSize: 24, textAlign: "center", padding: 16 }}>Stay Informed, Stay Healthy</Text>
          <Text style={{ padding: 16, fontWeight: 500 }}>MedScope empowers you with reliable medical information and self-assessment tools to help you make better health decisions. Whether you're managing a condition or simply tracking your well-being, MedScope is your trusted companion.</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Landing;