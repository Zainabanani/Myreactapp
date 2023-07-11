import React, {useEffect, useState } from "react";

const FilteredFood = () => {
  const [luxury, setLuxury] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://example-data.draftbit.com/cars?_limit=10");
    const data = await res.json();
  
  const luxurycars = data.filter((car) => car.price > 87310);
   setLuxury(luxurycars);
  
};
 useEffect(() => {
   fetchData();
 }, []); 
  

  return (
    <div>
      <h1>Your Best plug for luxury cars</h1>
      {luxury.map((car) => {
        const { id, model, color, price, description, image } = car;
        return (
          <div key={id} className="card">
            <img src={image} alt={"car image"} />
            <h1> Model: {model}</h1>
            <h2> Color: {color}</h2>
            <h3> Price: {price}</h3>
            <p>Description: {description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FilteredFood;
