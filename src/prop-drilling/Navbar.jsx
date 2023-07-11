import React, { useState } from 'react'
import Navlinks from './Navlinks'

const Navbar = () => {
    const [user, setUser] = useState ({name: "Jhon"})
    const logout = () =>{
        setUser (null)
    }

    const login = () =>{
        setUser ({name: 'jhon'})
    }
  return (
    <div className="container bg-dark text-white shadow-md d-flex justify-content-between align-items-center">
      <div>
        <h3 className='fw-bold text-white'>Prop Drilling </h3>
      </div>
      <div>
        <Navlinks user={user} logout={logout} login={login}/>
      </div>
    </div>
  );
} 

export default Navbar