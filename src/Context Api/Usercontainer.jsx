import React, {useContext} from "react";
import { NavbarContext } from "./Navbar";



const Usercontainer = () => {
  const {user, logout, login} = useContext (NavbarContext)

  return (

    <div>
      {user ? (
        <div>
          <h4> {user.name} </h4>
          <button className="btn btn-primary rounded-1" onClick={logout}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <p>Please login</p>
          <button className="btn btn-primary rounded-1" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Usercontainer;
