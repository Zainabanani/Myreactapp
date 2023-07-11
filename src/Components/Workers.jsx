import React from 'react'

const Worker = ({name, Gender, Age}) => {
  return (
    <div>
        <h2> {name} </h2>
        <h2> {Gender} </h2>
        <h2> {Age} </h2>
    </div>
  )
}

const Workers = () =>{
  return (
    <div>
       <Worker 
       name= 'Ado'
       Gender = 'Male'
       Age = {30} 
       />   
         <Worker 
        name= 'Ali'
       Gender = 'Male'
       Age = {20} 
       />

           <Worker 
        name= 'Abu'
       Gender = 'Male'
       Age = {70}
        />
    </div>
  )
}




export default Workers