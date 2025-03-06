import {ActionIcon, AppShellHeader, Flex, Group, Image} from "@mantine/core";
import logo from "../assets/icon.png"
import {Link} from "react-router";

const Header = () => {
  return (
    <AppShellHeader>
      <Flex style={{ alignItems: "center", justifyContent: "space-between"}}>

        <ActionIcon variant="subtle" w={100} h={100}>
          <Image src={logo} alt="MedScope"/>
        </ActionIcon>

        <Group style={{ display: "flex", gap: 24 }}>
          <Link to="/">AI Assessment</Link>
          <Link to="/lookup">Lookup</Link>
          <Link to="/about">About</Link>
        </Group>

      </Flex>

    </AppShellHeader>
  );
};

export default Header;