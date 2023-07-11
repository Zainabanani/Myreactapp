import React from 'react'

const Friends = ({friend}) => {
  return (
    <div>
        <h1>{friend.name}</h1>
    </div>
  )
}

const Friendslist = () =>{
    const friends =[
        {name:'Zainab'},
        {name:'Mofe'},
        {name:'Adam'},
        {name:'Ola'},
        {name:'Funsho'},
    ];
    return (
<div>
    {friends.map( (friend) =>{
return <Friends key={friend.name} friend={friend}/>
    })}
</div>
)
};


export default Friendslist;