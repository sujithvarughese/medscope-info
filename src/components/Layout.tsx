import {AppShell, BackgroundImage} from "@mantine/core";
import Header from "../components/Header.tsx";
import {Outlet, useNavigate} from "react-router";
import bg from "../assets/bg-landing-1.jpeg"
import {useEffect} from "react";
import {useAppSelector} from "../utilities/hooks.ts";
import Footer from "./Footer.tsx";
const Layout = () => {

  const user = useAppSelector(state => state.global.user)
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/")
  }, [user])
  return (
    <AppShell>
      <BackgroundImage src={bg} h="100%" style={{ zIndex: -100 }}>
      <Header />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <Footer />
      </BackgroundImage>
    </AppShell>
  )
}

export default Layout
