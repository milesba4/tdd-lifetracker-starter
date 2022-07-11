import * as React from "react";
import "./NutritionFeed.css";
import "../../services/apiClient"
import NutritionCard from "components/NutritionCard/NutritionCard";

export default function NutritionFeed(props) {
console.log("props", props)
  return (
    <div class="nutrition-feed">
  
      {props.nutritions.map((element, index) => (<Link to={`/nutrition/${element.id}`}><NutritionCard key={index} nutrition={element}/></Link>))}
    </div>
  );
}
