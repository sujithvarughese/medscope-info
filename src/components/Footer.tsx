import {Flex, Text} from "@mantine/core";
import {Link} from "react-router";

const Footer = () => {
  return (
    <Flex direction="column" align="center" gap={16} py={32}>
      <Flex justify="center" gap={16}>
        <Link to="/about">About</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/termsandconditions">Terms & Conditions</Link>
      </Flex>
      <Text>{`\u00A9`} Sujith Varughese 2025</Text>
    </Flex>

  );
};

export default Footer;