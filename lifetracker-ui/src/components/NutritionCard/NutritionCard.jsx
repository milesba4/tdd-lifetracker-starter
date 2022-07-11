import * as React from "react";
import "./NutritionCard.css";




export default function NutritionCard({nutrition}) {
  
    return (
        <div className="nutrition-card">
        <div className="card-header">
            <img src={nutrition.image_url} alt="nutrition"></img>
            <h2 className="title">{nutrition.name}</h2>
        </div>
        <div className="card-stats">
          <div className="card-stat">
            <p>Calories</p>
            <span>{nutrition.calories}</span>
          </div>
          <div className="card-stat">
            <p>Quantity</p>
            <span>{nutrition.quantity}</span>
          </div>
        </div>
        <div className="card-meta">
            <small>{nutrition.created_at}</small>
            <small className="category">{nutrition.category}</small>
          </div>
      </div>

    );
  }