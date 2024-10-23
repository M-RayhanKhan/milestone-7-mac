
const Sidebar = ({ 
    recipes, 
    removeRecipeQueue, 
    remainingRecipe, 
    handleRecipeiItemSum,
    caloriesQueue,
    readTime
}) => {
    return (
        <div className="lg:w-1/3 border">
            <div className="overflow-x-auto border-b mx-1">
                <h3 className="text-center">Went to cook: {recipes.length}</h3>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            recipes.map((recipe, index) =>
                                <tr className="hover" key={index}>
                                    <th>{index + 1}</th>
                                    <td>{recipe.name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                    <td>
                                        <button onClick={() => {
                                            removeRecipeQueue(recipe.recipe_id)
                                            handleRecipeiItemSum(recipe.preparing_time, recipe.calories)}} className="py-1 bg-green-400 rounded-3xl px-2">Preparing</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {/* currently cooking section */}
            <div className="overflow-x-auto mt-10 mx-1">
            <h1 className="text-center text-2xl font-bold">Currently cooking: {remainingRecipe.length}</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       
                        {
                            remainingRecipe.map((recipe, index) =>
                                <tr className="hover" key={index}>
                                    <th>{index + 1}</th>
                                    <td>{recipe.name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                
                                </tr>)
                        }
                            <tr className="hover">
                                <td></td>
                                <td></td>
                                <td>Total Time: {readTime}</td>
                                <td>Total Calories: {caloriesQueue}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sidebar;