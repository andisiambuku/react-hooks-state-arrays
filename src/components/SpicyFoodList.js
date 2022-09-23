import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
    
   return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
  
  function handleLiClickFood(id){
    const newFoodArray = food.filter((food) => food.id !== id);
    setFoods(newFoodArray);

    const foodList = foods.map((food) => (
      <li key={food.id} onClick={() => handleLiClick(food.id)}>
        {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      </li>
    ));

    // Updateing Elements in an array
    const newUpdatedFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newUpdatedFoodArray);

    return (
      <div>
        <button onClick={handleLiClicFood}>Delete Food</button>
        <ul>{foodList}</ul>
      </div>)
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  
  
  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
  if (filterBy === "All") {
    return true;
  } else {
    return food.cuisine === filterBy;
  }
  });
  const foodsList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleFilterChange(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  return (
    <select name="filter" onChange={handleFilterChange}>
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>
    </select>
  );
  }

  }
  
  








export default SpicyFoodList;
