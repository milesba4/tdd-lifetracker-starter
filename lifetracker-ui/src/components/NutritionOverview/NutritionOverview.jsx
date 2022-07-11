import NutritionFeed from "components/NutritionFeed/NutritionFeed";
import * as React from "react";
import "./NutritionOverview.css";
import { Link } from "react-router-dom";
import {useNutritionContext } from "../../contexts/nutrition"
import apiClient from "../../services/apiClient";

export default function NutritionOverview() {
  const {nutritions, setNutritions} = useNutritionContext()
  console.log("nutritions1:", nutritions)

  React.useEffect( () => {
    console.log("effect works2")
    const fetchNutritions= async () => {
      const {data, error} = await apiClient.fetchNutrition()
      console.log("data", data)
      console.log("err4", error)
      console.log("fetch works")
      setNutritions(data?.nutritions)
    }
    fetchNutritions()
}, [nutritions])

console.log("nutritions:",nutritions)

  return (
    <div class="nutrition-overview">
      <h3>Overview</h3>

      <button class="Button outline small outline aqua ">
        <Link to="/nutrition/create"> Record Nutrition</Link>
      </button>
    
      <div class="header">
        <NutritionFeed nutritions = {nutritions} setNutritions={setNutritions}/>
      </div>
   </div>
  );
}
