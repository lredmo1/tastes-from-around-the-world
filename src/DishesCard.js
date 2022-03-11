function DishesCard({dish}) {
 
  return (
    <div id="dishes-card">
      <h1>Name: {dish.name}</h1>
      <h1>Country of Origin: {dish.country}</h1>
    </div>
  );
}

export default DishesCard;
