function DishesCard({ dish, handleDeleteItem }) {

  function handleDelete() {
    fetch(`http://localhost:5000/dishes/${dish.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((item) => handleDeleteItem(item));
  }

  return (
    <div id="dishes-card">
      <h1>Name: {dish.name}</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DishesCard;
