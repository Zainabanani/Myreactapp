
import React, { useState } from 'react'

const Usestatepractice = () => {
const [humans, setHumans] = useState (
  {
    name: 'Zainab Adam',
    age: 59,
    gender: 'Female',
    occupation: 'Voice Actor'
  }
)

const change = () =>{
setHumans ({...humans, gender: 'unknown gender', age: 26})
}

const reset = () =>{
  setHumans ({ })
}

  return (
    <div>
      <h1> {humans.name} </h1>
      <h1> {humans.age} </h1>
      <h1> {humans.gender} </h1>
      <h1> {humans.occupation} </h1>
      <button onClick={change}>CLICK HERE TO CHANGE DETAILS</button>
      <button onClick={reset}>CLEAR DETAILS</button>
    </div>
  )
}

export default Usestatepractice

































































// import React, { useState } from 'react'

// const Usestatepractice = () => {
// const [people, setPeople] = useState (
// {name: 'Zaynab',
// age: 50,
// gender: 'Male',
// occupation: 'Fullstack developer'
// }
// )

// const change = () =>[
//   setPeople ({...people, age:20, gender:'Female'})
// ]
//   return (
//     <div>
//       <h1>{people.name}</h1>
//       <h1>{people.age}</h1>
//       <h1>{people.gender}</h1>
//       <h1>{people.occupation}</h1>
//       <button onClick={change}>CLICK TO CHANGE DETAILS</button>

//     </div>
//   )
// }

// export default Usestatepractice