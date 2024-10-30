import { useLoaderData } from "react-router-dom";
import SingleDetails from "../SingleDetails/SingleDetails";

const MealDetails = () => {
    const mealDetails = useLoaderData();
    return (
        <div>
            <h2>Meals Details </h2>
            {
                mealDetails.meals.map(single => <SingleDetails key={single.idMeal} singleDetails={single}></SingleDetails>)
            }
        </div>
    );
};

export default MealDetails;