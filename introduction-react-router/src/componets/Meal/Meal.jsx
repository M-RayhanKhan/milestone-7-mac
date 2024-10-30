import { Link } from 'react-router-dom';
import './Meal.css'
const Meal = ({meal}) => {
    const {idMeal,strArea , strTags,strIngredient1,strMealThumb
    } = meal
    return (
        <div className="user meal">
            <figure >
            <img style={{height: '200px'}} src={strMealThumb} alt="" />
            </figure>
            <h3>strArea: {strArea}</h3>
            <p>{strIngredient1}</p>
            <h2>{strTags ? strArea : "Not Found"}</h2>
            <Link to={`/mealDetails/${idMeal}`}>
            <button>Shoe Meals</button>
            </Link>
        </div>
    );
};

export default Meal;