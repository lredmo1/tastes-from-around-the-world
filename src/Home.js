//add functionality where user inputs ingredients and can check which recipes they can make with those ingredients

import { useState, useEffect } from "react";
import DishesCard from "./DishesCard";
import AddDishForm from "./AddDishForm";

function Home() {
  const [dishes, setDishes] = useState([]);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/dishes`)
      .then((resp) => resp.json())
      .then((data) => setDishes(data));
  }, []);

  let dishesCards = dishes.map((dish) => (
    <DishesCard dish={dish} key={dish.id} setDishes={setDishes} />
  ));

  function handleChange(e) {
    // let key = e.target.name;
    let value = e.target.value;
    setFormData([value]);
  }

  let ingredientsArray = [];
  function handleAddIngredient(e) {
    e.preventDefault();
    ingredientsArray.push(formData);
    console.log("ingredient added");
    console.log(ingredientsArray);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/dishes`)
      .then((resp) => resp.json())
      .then((data) => searchRecipes(data));
  }
  // let userIngredients = ["rice", "fish"]

  function searchRecipes(dishes) {
    let availableRecipes = [];
    for (let i = 0; i < ingredientsArray.length; i++) {
      dishes.map((dish) => {
        // let recipeIngredients = []
        // recipeIngredients.push(dish.ingredients)
        if (dish.ingredients.includes(ingredientsArray[i])) {
          availableRecipes.push(dish);
          //if this already in the array, do nothing
          //if not in the array push to array
        }
        //if item is already in the array remove
        //if the item is not in the array do nothing
      });
    }
    // availableRecipes = [Sushi, Maki Roll]

    // recipeIngredients.includes(userIngredients[i] ? keep the recipe : filter out the recipe)
    return availableRecipes;
  }

  return (
    <>
      {dishesCards}
      <AddDishForm setDishes={setDishes} />

      <form onSubmit={handleSubmit}>
        <label>
          Search by Ingredients:{""}
          <input
            name="ingredients"
            type="text"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder=""
          ></input>
        </label>
        <button onClick={handleAddIngredient}>Add Ingredients</button>
        <button type="submit">Find Recipes</button>
      </form>
    </>
  );
}

export default Home;

// array of ingredients
// fetch the ingredients on the backend and compare
// iterate over my array and check if that ingredient is included in the string for every dish
// if it's not included, filter out that dish
// check again within the new list
// rice fish - maki roll, sushi
// check every ingredient in string is present in the ingredients array
// return matches
