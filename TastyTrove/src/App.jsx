import { useState } from "react";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {
  const [recipes, setRecipes] = useState([])
  const [remainingRecipe, setRemainingRecipe] = useState([])
  const [readTime , setReadTime] = useState(0)
  const [caloriesQueue , setCalories] = useState(0)
  const handleSidevarRecipes = recipe =>{
   const isExist = recipes.find(previous => previous.recipe_id === recipe.recipe_id)
   if (!isExist) {
    setRecipes([...recipes, recipe])
   }else{
    alert('isExsit')
   }
   
  } 
  const removeRecipeQueue = (id) =>{
      const updateRecipe = recipes.find(recipe => recipe.recipe_id === id);
      const deleteQueue = recipes.filter(recipe => recipe.recipe_id !== id);
      setRecipes(deleteQueue);
      setRemainingRecipe([...remainingRecipe, updateRecipe])
  }

  const handleRecipeiItemSum = (time, calories) =>{
    console.log(time,calories);
    setReadTime(readTime + time)
    setCalories(caloriesQueue + calories)
  }

  return (
    <div>
      {/* navbar section */}
      <Header></Header>
      {/* recipes section */}
      <div className="flex gap-6 container mx-auto px-2 lg:px-0">
      <Recipes handleSidevarRecipes={handleSidevarRecipes}></Recipes>
      {/* side var */}
     <Sidebar caloriesQueue={caloriesQueue} readTime={readTime} handleRecipeiItemSum={handleRecipeiItemSum} recipes={recipes} remainingRecipe={remainingRecipe} removeRecipeQueue={removeRecipeQueue}></Sidebar>
      </div>
    </div>
  );
};

export default App;