/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";

const SingleDetails = ({singleDetails}) => {
    console.log(singleDetails);
    const {strArea,strCategory,idMeal,strMealThumb,strInstructions} = singleDetails
   const navigate = useNavigate()
   const handleNavigate = () => {
    navigate(-1)
   }
    return (
        <div className="user">
            <h3>MealsId: {idMeal}</h3>
            <div >
            <img style={{width:'200px', borderRadius:'20px'}} src={strMealThumb} alt="koi img" />
            </div>
            <p>{strInstructions}</p>
            <h2>{strArea}</h2>
            <h1>{strCategory}</h1>
           <NavLink to='/meals'> <button>Go back</button></NavLink>
           <button onClick={handleNavigate}>Go back Meals</button>
        </div>
    );
};

export default SingleDetails;