function DishesCard({ dish, setDishes }) {
  
  function handleDeleteItem(deletedDish) {
    setDishes((currentDishes) => currentDishes.filter((dish) => dish.id !== deletedDish.id));
  }

  function handleDelete() {
    fetch(`http://localhost:5000/dishes/${dish.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(handleDeleteItem(dish));
  }

  return (
    <div id="dishes-card">
      <h1>Name: {dish.name}</h1>
      <h1>Ingredients: {dish.ingredients}</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DishesCard;
