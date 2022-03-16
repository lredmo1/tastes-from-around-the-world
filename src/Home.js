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

  let dishesCards = dishes.map((dish) => <DishesCard dish={dish} key={dish.id} setDishes={setDishes}/>)
  
  return (
    <>
      {dishesCards}
      <AddDishForm setDishes={setDishes}/>
    </>
  );
}

export default Home;
