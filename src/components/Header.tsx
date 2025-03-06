import {ActionIcon, AppShellHeader, Flex, Group, Image} from "@mantine/core";
import logo from "../assets/icon.png"
import {Link, useNavigate} from "react-router";

const Header = () => {

  const navigate = useNavigate()
  return (
    <AppShellHeader>
      <Flex style={{ alignItems: "center", justifyContent: "space-between"}}>

        <ActionIcon variant="subtle" w={100} h={60} onClick={() => navigate("/")}>
          <Image src={logo} alt="MedScope"/>
        </ActionIcon>

        <Group style={{ display: "flex", gap: 24 }}>
          <Link to="/ai">AI Assessment</Link>
          <Link to="/lookup">Lookup</Link>
          <Link to="/about">About</Link>
        </Group>

      </Flex>

    </AppShellHeader>
  );
};

export default Header;