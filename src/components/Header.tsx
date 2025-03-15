import {ActionIcon, Box, Button, Flex, Image, Text} from "@mantine/core";
import logo from "../assets/icon-transparent.png"
import {Link, useNavigate} from "react-router";
import Login from "./Login.tsx";
import {useDisclosure} from "@mantine/hooks";
import RegisterModal from "./RegisterModal.tsx";
import {useAppDispatch, useAppSelector} from "../utilities/hooks.ts";
import {logout} from "../features/globalSlice.ts";
import {motion} from "motion/react";

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
    <Flex
      component={motion.div}
      initial={{ y: "-20%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      align="center" justify="space-between" p={{ base: 2, md: 16 }} pb={16}>
      <ActionIcon variant="subtle" w={90} h={90} onClick={() => navigate("/")}>
        <Image src={logo} alt="MedScope" />
      </ActionIcon>

      {user ?
        <Flex gap={32} p={16} align="center">
          <Box display={{ base: "none", sm: "initial" }}>
            <Link to="/" style={styles.link}><Text c="cyan.6">Home</Text></Link>
          </Box>
          <Link to="/ai" style={styles.link} ><Text c="cyan.6">AI</Text></Link>
          <Link to="/research" style={styles.link}><Text c="cyan.6">Research</Text></Link>
          <Link to="/about" style={styles.link}><Text c="cyan.6">About</Text></Link>
          <Button onClick={handleLogout} bg="#20B2AA">Logout</Button>
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
    color: "black"
  }
};

export default Header;