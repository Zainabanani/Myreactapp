import React, { useEffect, useState } from "react";
import "../Styles/food.css";
import { ColorRing } from "react-loader-spinner";

const Food = () => {
  const url = "https://example-data.draftbit.com/cars?_limit=10";
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState (true)
  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setCars(data);
    setIsLoading (false)
  };
  useEffect(() => {
    getData();
    
  }, []);
  
if (isLoading) {
    return <h2> 
        <ColorRing
  visible={true}
  height="150"
  width="150"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
    </h2>


}

  return (
    <section>
        <nav>
            <div className="mobile">Anani Mobiles</div>
            <div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Popular Cars</a></li>
                    <li><a href="">Win Free Cars Accesories</a></li>
                </ul>
            </div>
        </nav>
        <h2>Come choose a ride of your choice</h2>

        
    <div className="container">
      {cars.map((car) => {
        const {id, model, color, price, description, image  } = car;
        return (
            
<div key={id} className="card">
            <img src={image} alt={'car image'} />
            <h1> Model: {model}</h1>
            <h2> Color: {color}</h2>
            <h3> Price:  {price}</h3>
            <p>Description: {description}</p>
          </div>
        
        );
      })}
    
    </div>
            <button type="submit">CHECKOUT</button>
          
    </section>

  );
};

export default Food;
