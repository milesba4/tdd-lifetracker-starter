import "./NutritionNew.css";
export default function NutritionNew(){
    return(
<div>
    <h1>Record Nutrition</h1>
<div className="nutrition-form">
            <div className="input-field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Nutrition name" />
            </div>
            <div className="input-field">
                <label htmlFor="category">Category</label>
                <input type="text" name="category" placeholder="Category name" />
            </div>
            <div className="split-input-field">
                <div className="input-field">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" name="quantity" placeholder="Quantity" />
                </div>
            </div>

        <button>Record</button> 
        </div>
</div>
  )
  }
  