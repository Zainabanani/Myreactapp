import React from 'react'

const Fruit = ({fruit}) => {
  return (
    <div>
        <h1>Names of Fruits</h1>
       <h1>{fruit.name}</h1>
    </div>
  )
}

const Fruits = () =>{
    const fruitlists = [
        {id:1, name: 'Mango'},
        {id:2, name: 'Apple'},
        {id:3, name: 'Pineapple'},
        {id:4, name: 'Guava'},
    ]
  return  (
    <>
   {
    fruitlists.map((fruit) =>{
return <Fruit  key={fruit.id} fruit={fruit}/>
    })
   }
    </>
  )

}


export default Fruits