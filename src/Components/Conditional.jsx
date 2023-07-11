import React, { useState } from "react";
//conditional rendering
// multiple return
//short circuit evaluation && || !
// ternary operators

const Conditional = () => {
  const [isLoading, setIsLoading] = useState(false);
  const data = ["Ola", "Zainab", "Adam"];

  return (
    <div>
      {isLoading ? (
        <div>
          <h3>Sorrry, wait a minute</h3>
        </div>
      ) : (
        <div>
          {data.map((person, index) => {
            return <h3 key={index}>{person}</h3>;
          })}
        </div>
      )}
    </div>
  );
};

export default Conditional;
