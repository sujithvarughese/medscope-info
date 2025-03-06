import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HashRouter, Route, Routes} from "react-router";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import TermsAndConditions from "./TermsAndConditions.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
