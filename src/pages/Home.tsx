import NewsSection from "../components/news/NewsSection.tsx";
import HealthTip from "../components/news/HealthTip.tsx";
import bg from "../assets/bg-2.jpeg"
import {BackgroundImage, Box} from "@mantine/core";

const Home = () => {
  return (
    <BackgroundImage src={bg}>
      <Box maw={1440} mx="auto" p="xl">
        <HealthTip />
        <NewsSection />
      </Box>
    </BackgroundImage>
  );
};

export default Home;