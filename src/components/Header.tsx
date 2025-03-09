import {ActionIcon, AppShellHeader, Flex, Group, Image} from "@mantine/core";
import logo from "../assets/icon.png"
import {Link, useNavigate} from "react-router";

const Header = () => {

  const navigate = useNavigate()
  return (
    <AppShellHeader  mx="auto" p="xl">
      <Flex style={{ alignItems: "center", justifyContent: "center"}}>

        <ActionIcon variant="subtle" w={80} h={80} pos="absolute" top={0} bottom={0} left={0} m="auto" onClick={() => navigate("/")}>
          <Image src={logo} alt="MedScope" />
        </ActionIcon>

        <Flex gap={{ base: 12, sm: 42}}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/ai" style={styles.link}>AI Assessment</Link>
          <Link to="/research" style={styles.link}>Research</Link>
          <Link to="/about" style={styles.link}>About</Link>
        </Flex>
      </Flex>
    </AppShellHeader>
  );
};

const styles = {
  link: {
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 16,
  }
};

export default Header;