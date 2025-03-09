import {Box, Flex, Image, Text} from "@mantine/core";
import bg from "../assets/bg-landing.jpeg"
import PreviewButton from "../components/PreviewButton.tsx";
import {useDisclosure} from "@mantine/hooks";
import RegisterModal from "../components/RegisterModal.tsx";
const Landing = () => {



  return (
    <Box maw={1920} mx="auto">

      <PreviewButton />

      <Flex direction={{ base: "column", sm: "row"}} justify="space-around" align="center" h="100vh">
        <Box>
          <Flex>
            <Text c="gray" style={{ fontSize: 36, fontWeight: 700 }}>Med</Text>
            <Text c="blue" style={{ fontSize: 36, fontWeight: 700 }}>Scope</Text>
          </Flex>
          <Text style={{ fontWeight: 600 }}>Your Health, Your Knowledge, Your Control</Text>
        </Box>
        <Image src={bg} alt="Landing Page" w={{ base: "100%", sm: "50%" }}/>
      </Flex>

    </Box>
  );
};

export default Landing;