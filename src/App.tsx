
import {AppShell} from "@mantine/core";
import Header from "./components/Header.tsx";
import {Outlet} from "react-router";

const App = () => {
  return (
    <AppShell>
      <Header />
      <AppShell.Main>

        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default App
