import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
export default function App() {
  return (
    <div className="app">
      <React.Fragment>
        {
          <BrowserRouter>
            <main>
              <Navbar />
              <Routes>
                {/* <Route path="/" element={<Landing />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/activity" element={<ActivityPage />} />
                <Route path="/nutrition/*" element={<NutritionPage/>}/> */}
              </Routes>
            </main>
          </BrowserRouter>
        }
      </React.Fragment>
    </div>
  );
}
