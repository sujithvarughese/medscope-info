import {Flex} from "@mantine/core";
import {Link} from "react-router";

const Footer = () => {
  return (
    <Flex justify="center" p={32} gap={16}>
      <Link to="/about">About</Link>
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/termsandconditions">Terms & Conditions</Link>
    </Flex>
  );
};

export default Footer;