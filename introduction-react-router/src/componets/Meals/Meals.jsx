import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
    const meals = useLoaderData()
    console.log(meals.meals);
    return (
        <div>
            <h3>This is meals: {meals.meals.length}</h3>
            <div className="users">
                {
                    meals.meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;