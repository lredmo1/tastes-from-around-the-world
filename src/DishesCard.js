import EditDish from "./EditDish";
import {useState} from 'react'

function DishesCard({ dish, setDishes, handleUpdate }) {

  const [isEditing, setIsEditing] = useState(false)
  
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

  function handleEdit(){
    setIsEditing(true)
  }

  return (
    <div id="dishes-card">
      <h1>Name: {dish.name}</h1>
      <button onClick={handleDelete}>Delete</button>
      
      {isEditing ? <EditDish dish={dish} setDishes={setDishes} setIsEditing={setIsEditing} handleUpdate={handleUpdate}/> : <button onClick={handleEdit}>Edit</button>} 
    </div>
  );
}

export default DishesCard;
