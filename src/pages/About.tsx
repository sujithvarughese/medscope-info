import screenshot from "../assets/medscope-1.png"
import {Link} from "react-router";
import {Flex} from "@mantine/core";

const About = () => {
  return (
    <Flex direction={{ base: "column", md: "row"}} gap={36} align="center" maw={1080} p={{ base: "md", md: "xl" }} m="auto">
      <div>
        <h1 style={{ fontWeight: 700, marginBottom: 24, textAlign: "start" }}>MedScope</h1>
        <p style={{ textAlign: "start" }}>MedScope is a comprehensive medical app designed to provide instant access to essential health information. Users can look up details on any drug or medical condition, receive a personalized health assessment based on their profile, and get potential condition suggestions by entering symptoms. The app also includes useful tools like a BMI calculator and other health metrics to help users stay informed about their well-being. Whether you're looking for medication details, self-assessment tools, or general health insights, MedScope is your go-to medical companion.</p>
        <p style={{ textAlign: "start" }}>Developer Email: sujithv15@gmail.com</p>
        <Link to="/privacy">Privacy Policy</Link>
        <br/>
        <Link to="/termsandconditions">Terms and Conditions</Link>
      </div>

      <div className="card">
        <img src={screenshot} alt="MedScope" width={360}/>
      </div>
    </Flex>
  )
}

export default About
