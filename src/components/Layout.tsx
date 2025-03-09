
import {AppShell, BackgroundImage} from "@mantine/core";
import Header from "../components/Header.tsx";
import {Outlet} from "react-router";
import bg from "../assets/bg-landing-1.jpeg"
const Layout = () => {
  return (
    <AppShell>
      <BackgroundImage src={bg} style={{ zIndex: -1}}>
      <Header />
      <AppShell.Main>

        <Outlet />
      </AppShell.Main>
      </BackgroundImage>
    </AppShell>
  )
}

export default Layout
