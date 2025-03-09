import {ActionIcon, AppShellHeader, Box, Flex, Group, Image} from "@mantine/core";
import logo from "../assets/icon.png"
import {Link, useNavigate} from "react-router";
import {useAuthContext} from "../context/AuthContext.tsx";
import Login from "./Login.tsx";
import {useDisclosure} from "@mantine/hooks";
import RegisterModal from "./RegisterModal.tsx";

const Header = () => {

  const navigate = useNavigate()
  const { user } = useAuthContext()

  const [registerModalOpened, { open: openRegisterModal, close: closeRegisterModal }] = useDisclosure(false);


  return (
    <Box pos="relative" mx="auto">
      <Flex align="center" justify="flex-end">

        <ActionIcon variant="subtle" w={80} h={80} pos="absolute" top={0} bottom={0} left={0} m="auto" onClick={() => navigate("/")}>
          <Image src={logo} alt="MedScope" />
        </ActionIcon>

        {user  ?
          <Flex gap={{ base: 16, sm: 42}}>
            <Box display={{ base: "none", md: "initial" }}>
              <Link to="/" style={styles.link}>Home</Link>
            </Box>
            <Link to="/ai" style={styles.link}>AI Assessment</Link>
            <Link to="/research" style={styles.link}>Research</Link>
            <Link to="/about" style={styles.link}>About</Link>
          </Flex>
          :
          <Login openRegisterModal={openRegisterModal}/>
        }


      </Flex>
      <RegisterModal opened={registerModalOpened} onClose={closeRegisterModal} />

    </Box>
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