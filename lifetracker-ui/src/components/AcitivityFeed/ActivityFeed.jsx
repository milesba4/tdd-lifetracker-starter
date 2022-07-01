import * as React from "react";
import "./ActivityFeed.css";

export default function ActivityFeed({
  totalCaloriesPerDay,
  avgCaloriesPerCategory,
}) {
  return (
    <div class="activity-feed">
      <div class="content">
        <div class="actions">
          <h2 class="heading">Activity Feed</h2>
          <div class="buttons">
            <button class="Button outline small outline gold ">
              Add Exercise
            </button>
            <button class="Button outline small outline blue ">
              Log Sleep
            </button>
            <button class="Button outline small outline aqua ">
              Record Nutrition
            </button>
          </div>
        </div>
        <div class="stats">
          <div className = "per-category">
            <h4>Average Calories Per Category</h4>
            {/* {avgCaloriesPerCategory.map((cat)=>{
              return(
                <SummaryStat category = {cat}/>

              )
  

            })
            
            } */}

          </div>

        </div>
      </div>
    </div>
  );
}
