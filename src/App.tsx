import {AppShell} from "@mantine/core";
import Header from "./components/Header.tsx";
import {HashRouter, Outlet, Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import AI from "./pages/AI.tsx";
import SymptomForm from "./pages/SymptomForm.tsx";
import SymptomResults from "./pages/SymptomResults.tsx";
import AssessmentForm from "./pages/AssessmentForm.tsx";
import AssessmentResults from "./pages/AssessmentResults.tsx";
import BmiForm from "./pages/BmiForm.tsx";
import BmiResults from "./pages/BmiResults.tsx";
import Research from "./pages/Research.tsx";
import About from "./pages/About.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import Layout from "./components/Layout.tsx";
import Landing from "./pages/Landing.tsx";
import {useAppSelector} from "./utilities/hooks.ts";
import {useEffect} from "react";

const App = () => {

  const user = useAppSelector(state => state.global.user)

  if (user) {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<Home />} index={true} />
            <Route path="/ai" element={<AI />} />
            <Route path="/symptomForm" element={<SymptomForm />} />
            <Route path="/symptomResults" element={<SymptomResults />} />
            <Route path="/assessmentForm" element={<AssessmentForm />} />
            <Route path="/assessmentResults" element={<AssessmentResults />} />
            <Route path="/bmiForm" element={<BmiForm />} />
            <Route path="/bmiResults" element={<BmiResults />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </HashRouter>
    )
  }
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Landing />} index={true} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </HashRouter>
  )

}

export default App
