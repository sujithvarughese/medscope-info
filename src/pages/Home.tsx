import NewsSection from "../components/news/NewsSection.tsx";
import HealthTip from "../components/news/HealthTip.tsx";
import bg from "../assets/bg-2.jpeg"
import {BackgroundImage, Box, Flex} from "@mantine/core";

const Home = () => {
  return (

      <Flex direction="column" gap={32} maw={1440} mx="auto" p={{ base: "md", md: "xl"}}>
        <HealthTip />
        <NewsSection />
      </Flex>

  );
};

export default Home;