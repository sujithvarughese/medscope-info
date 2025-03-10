import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './index.css'
import App from './App.tsx'
import {HashRouter, Route, Routes} from "react-router";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import {MantineProvider} from "@mantine/core";
import About from "./pages/About.tsx";
import AI from "./pages/AI.tsx"
import {Provider} from "react-redux";
import {store} from "./utilities/store.ts";
import Home from "./pages/Home.tsx";
import Research from "./pages/Research.tsx";
import SymptomForm from "./pages/SymptomForm.tsx";
import SymptomResults from "./pages/SymptomResults.tsx";
import AssessmentForm from "./pages/AssessmentForm.tsx";
import AssessmentResults from "./pages/AssessmentResults.tsx";
import BmiForm from "./pages/BmiForm.tsx";
import BmiResults from "./pages/BmiResults.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MantineProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MantineProvider>
  </StrictMode>,
)
