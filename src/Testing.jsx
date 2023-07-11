import React from 'react'

const Testing = () => {
  //logic
  const myName = "Ola";

  return (
    //template
    <div className="First">
<h1>First Component</h1>
<h1> {myName} </h1>
<p>{2 + 2}</p>
    </div>
  );
};

export default Testing