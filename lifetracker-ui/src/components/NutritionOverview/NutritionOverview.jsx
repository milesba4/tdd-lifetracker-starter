import NutritionFeed from "components/NutritionFeed/NutritionFeed";
import * as React from "react";
import "./NutritionOverview.css";

export default function NutritionOverview({}) {
    return (
        <div class="nutrition-overview">
        <div class="header">
          <h3>Overview</h3>
          <Link to="/nutrition/create"> <button class="Button outline small outline aqua ">
            Record Nutrition
          </button> </Link>
        </div>
       <NutritionFeed/>
      </div>
    );
  }