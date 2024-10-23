import { useEffect, useState } from "react";

const Recipes = ({handleSidevarRecipes}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="md:w-2/3  mb-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
             {
                recipes.map(recipe =>    <div key={recipe.recipe_id} className="card bg-base-100  px-4 py-4 border-2">
                    <figure className="h-[230px] w-full">
                        <img className="rounded-lg w-full h-full object-cover"
                            src={recipe.recipe_img} />
                    </figure>
                    <div className="pt-5">
                        <h2 className="card-title text-2xl">{recipe.name}</h2>
                        <p className="border-b pb-4 mt-2 text-gray-500">{recipe.short_description}</p>
                        <div className="mt-2 border-b pb-3">
                            <h3 className="text-xl font-semibold mb-1">Ingredients: {recipe.ingredients.length}</h3>
                            {
                             recipe.ingredients.slice(0,3).map((indgred, index) => <ul key={index}>
                                <li className="text-gray-500  list-disc ml-4">{indgred}</li>
                             </ul>)
                            }
                        </div>
                        <div className="mt-2 flex itmes-center">
                            <div className="flex items-center">
                            <p className="text-gray-500">{recipe.preparing_time} munite</p>
                            </div>
                            <div className="flex items-center ml-4">
                            <p className="text-gray-500">{recipe.calories} calories</p>
                            </div>
                        </div>
                        <div className="card-actions mt-3">
                            <button onClick={() => handleSidevarRecipes(recipe)} className="btn bg-green-400 rounded-3xl px-8 text-xl">Want to Cook</button>
                        </div>
                    </div>
                </div>)
             }
            </div>
        </div>
    );
};

export default Recipes;