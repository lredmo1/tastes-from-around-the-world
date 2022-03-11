import { useState } from "react";

function AddDishForm({setDishes}) {
  const [formData, setFormData] = useState({
    name: "",
  });

  function handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/dishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setDishes((current) => [data, ...current]);
        setFormData({
          name: "",
        });
      });
  }
  return (
    <form onSubmit={handleSubmit} id="add-dish-form">
      <label>
        Dish Name:{" "}
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder=""
          required
        ></input>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddDishForm;
