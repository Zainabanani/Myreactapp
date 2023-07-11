import React from 'react'

const State = ({state}) => {
  return (
    <div>
<h1> {state.name}</h1>
    </div>
  )
}

const Statelists = () =>{
    const states =
    [
        {id:1, name: 'Adamawa'},
        {id:1, name: 'Kaduna'},
        {id:1, name: 'Kano'},
        {id:1, name: 'Katsina'},
    ]

    return (
       <div>
         {states.map((state) =>{
return <State key={state.id} state ={state}/>
        })}
       </div>
    );
};

export default Statelists