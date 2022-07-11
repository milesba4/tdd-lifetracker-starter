import * as React from "react";
import "./NutritionPage.css";
import NutritionOverview from "components/NutritionOverview/NutritionOverview";
import { Routes, Route } from "react-router-dom";
// import {NutritionContextProvider, useNutritionContext } from "../../contexts/nutrition"
// import { useAuthContext } from "../../contexts/auth"
// import apiClient from "../../services/apiClient";




export default function NutritionPage({}) {
  return (
    <div class="nutrition-page">
      <div class="Banner">
        <h1>Nutrition</h1>
      </div>
      <div class="content">
      <NutritionOverview />
        <Routes>
          <Route path="/nutrition" element={<NutritionOverview />} />

          {/* <Route path="//nutrition/create" element={<NutritionNew />} /> */}

          {/* <Route path="/nutrition/id/:nutritionId" element={<NutritionDetail />}/> */}
        </Routes>
      </div>
    </div>
  );
}
