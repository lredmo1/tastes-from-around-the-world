import { useState } from "react";

function EditDish({ dish, setDishes, setIsEditing, handleUpdate }) {
  const [formData, setFormData] = useState({
    name: dish.name,
  });

  function handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    setFormData({...formData, [key]: value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/dishes/${dish.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
    })
    .then((resp) => resp.json())
    .then((dish) => {
        setDishes((current) => current.map((currentDish) => {
                  if (currentDish.id === dish.id) {
                    return dish;
                  } else {
                    return currentDish;
                  }
                }))
        setIsEditing(false)
    })

    }


    // function handleUpdate(){
    //     const updatedDish = dishes.map((dish) => {
    //       if (dish.id === updatedDish.id) {
    //         return updatedDish;
    //       } else {
    //         return dish;
    //       }
    //     });
    //     setDishes(updatedDish);
    //   }

  return (
    <>
      <form onSubmit={handleSubmit} id="add-dish-form">
        <label>
          Dish Name:{" "}
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          ></input>
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default EditDish;
