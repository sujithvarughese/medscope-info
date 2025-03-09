import {Link} from "react-router";
import {Box} from "@mantine/core";

const PrivacyPolicy = () => {
  return (
    <Box p={{base: "md", md: "xl" }} style={{ textAlign: "center", margin: 16 }}>
      <h1 style={{ fontWeight: 700, marginBottom: 24 }}>Privacy Policy</h1>
      <p>We do not collect any personal data or information from our users.</p>
      <Link to="/about">Go Back</Link>
    </Box>


  );
};

export default PrivacyPolicy;