import React from 'react'

const User = () => {
const handleClick = ()=>{
    console.log('User Clicked');
};

 const handleClick2 = (name) =>{
console.log(name + ' Clicked');
 };



  return (
    <div>
        <button onClick={handleClick}>CLICK ME</button>
        <button onClick={() => handleClick2('ZAYNAB')}>CLICK ME AGAIN</button>
    </div>
  )
}

export default User