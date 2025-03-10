import {ActionIcon, AppShellHeader, Box, Button, Flex, Group, Image, UnstyledButton} from "@mantine/core";
import logo from "../assets/icon-transparent.png"
import {Link, useNavigate} from "react-router";
import Login from "./Login.tsx";
import {useDisclosure} from "@mantine/hooks";
import RegisterModal from "./RegisterModal.tsx";
import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {logout} from "../features/globalSlice.ts";

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.global.user)

  const [registerModalOpened, { open: openRegisterModal, close: closeRegisterModal }] = useDisclosure(false);

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }


  return (
    <Flex align="center" justify="space-between" p={{ base: 2, md: 16 }} pb={16}>
      <ActionIcon variant="subtle" w={90} h={90} onClick={() => navigate("/")}>
        <Image src={logo} alt="MedScope" />
      </ActionIcon>

      {user ?
        <Flex gap={32} p={16} align="center">
          <Box display={{ base: "none", md: "initial" }}>
            <Link to="/" style={styles.link}>Home</Link>
          </Box>
          <Link to="/ai" style={styles.link}>AI</Link>
          <Link to="/research" style={styles.link}>Research</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Button onClick={handleLogout}>Logout</Button>
        </Flex>
        :
        <Login openRegisterModal={openRegisterModal}/>
      }

      <RegisterModal opened={registerModalOpened} onClose={closeRegisterModal} />
    </Flex>



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