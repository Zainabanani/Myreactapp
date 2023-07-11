import React from 'react'

const User2 = () => {
const handleClick = () =>{
console.log('User Clicked');
}

const click = (name) =>{
    console.log(name + ' Clicked again');
}

  return (
    <div>
        <button onClick={handleClick}>CLICK HERE</button>
<button onClick={()=>click ('ZEEZAH')}>CLICK HERE AGAIN</button>
    </div>
  )
}

export default User2