import { useState, useEffect } from "react";
import DishesCard from "./DishesCard"
import AddDishForm from "./AddDishForm"

function Home() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/dishes`)
      .then((resp) => resp.json())
      .then((data) => setDishes(data));
  }, []);

  function handleDeleteItem(deletedDish) {
    const updatedDishes = dishes.filter((dish) => dish.id !== deletedDish.id);
    setDishes(updatedDishes);
}

  let dishesCards = dishes.map((dish) => <DishesCard dish={dish} key={dish.id} handleDeleteItem={handleDeleteItem}/>)
  
  return (
    <>
      {dishesCards}
      <AddDishForm setDishes={setDishes}/>
    </>
  );
}

export default Home;
