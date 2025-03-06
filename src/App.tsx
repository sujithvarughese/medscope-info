
import {AppShell} from "@mantine/core";
import Header from "./components/Header.tsx";

const App = () => {
  return (
    <AppShell>
      <Header />
      <AppShell.Main>
        Main Content
      </AppShell.Main>
    </AppShell>
  )
}

export default App
