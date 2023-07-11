import React, {useEffect, useState} from 'react'
//runs by default on every re-render - state change
//two parameters - function, dependency array list []
// [] useeffect runs once (if the array is empty)
// [val1, val2,  ....]

const Useeffect = () => {
  const [val, setVal] = useState(0);
  const [age, setAge] = useState (20);
  const increase = () =>{
    setVal (val + 2);
  };

useEffect (() =>
 {console.log('use effect ran');}, [val, age]);


  return (
    <div>
      <h1>USE EFFECT</h1>
      <h1>{val}</h1>
      <h1>{age}</h1>
      <button onClick={increase}>INCREASE</button>
      <button onClick={() => setAge (age + 5)}>Change age</button>
    </div>
  )
}

export default Useeffect