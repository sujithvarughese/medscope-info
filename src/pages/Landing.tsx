import {Box, Flex, Image, Text} from "@mantine/core";
import bg from "../assets/bg-landing.jpeg"
import PreviewButton from "../components/PreviewButton.tsx";
import {useDisclosure} from "@mantine/hooks";
import RegisterModal from "../components/RegisterModal.tsx";
import Login from "../components/Login.tsx";
const Landing = () => {



  return (
    <Box maw={1920} mx="auto" pt={32}>
      <Flex direction={{ base: "column-reverse", sm: "row"}} justify="space-evenly" align="center">
        <Flex direction="column" align={{ base: "center", md: "flex-start" }}>
          <Flex>
            <Text c="gray" style={{ fontSize: 36, fontWeight: 700 }}>Med</Text>
            <Text c="blue" style={{ fontSize: 36, fontWeight: 700 }}>Scope</Text>
          </Flex>
          <Text style={{ fontWeight: 600 }} pb="xl">Your Health, Your Knowledge, Your Control</Text>
          <PreviewButton />
        </Flex>

        <Image src={bg} alt="Landing Page" w={{ base: "90%", sm: "50%" }} style={{ borderRadius: 12 }}/>

      </Flex>

    </Box>
  );
};

export default Landing;