import { useState, useEffect } from "react";
import DishesCard from "./DishesCard"
import AddDishForm from "./AddDishForm"

function Home() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("")
  const [isSorted, setIsSorted] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/dishes`)
      .then((resp) => resp.json())
      .then((data) => setDishes(data));
  }, []);

//   function handleDeleteItem(deletedDish) {
//     console.log(deletedDish)
//     const updatedDishes = dishes.filter((dish) => dish.id !== deletedDish.id);
//     setDishes(updatedDishes);
// }

  function handleUpdate(){
    const updatedDish = dishes.map((dish) => {
      if (dish.id === updatedDish.id) {
        return updatedDish;
      } else {
        return dish;
      }
    });
    setDishes(updatedDish);
  }


  function handleSort() {

      console.log(dishes)
      let sortedDishes = dishes.sort((a, b) => (a.name > b.name) ? 1 : -1)
      console.log(sortedDishes)
      setDishes(sortedDishes)
 
  }





  let filteredDishes = dishes.filter((dish) => {
    return dish.name.toLowerCase().includes(search.toLowerCase())
})

  let dishesCards = filteredDishes.map((dish) => <DishesCard dish={dish} key={dish.id} setDishes={setDishes} handleUpdate={handleUpdate}/>)
  
  return (
    <>
      <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} value={search}/>
      <button onClick={handleSort}>Sort A-Z</button>
      {dishesCards}
      <AddDishForm setDishes={setDishes}/>

    </>
  );
}

export default Home;
