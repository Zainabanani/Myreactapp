import "./App.css";
import Sneakers from "./Components/Sneakers";
import Food from "./Components/Food";
import Conditional from "./Components/Conditional";
import FilteredFood from "./Components/FilteredFood";
import Navbar from "./prop-drilling/Navbar";
import Navbar2 from "./Context Api/Navbar";
import Complexforms from "./Components/Complexforms";

//JSX RULES
//1. every element must be closed
//2. components must start with capital letter
//3. We write className instead of 'class'
//4. We can only return just one thing from a component
//5. Javascript inside react must be sorrounded with coli bracket
//6, We have to import image and the names must tally
function App() {
  return (
    <div>
      
      <Complexforms />
    </div>
  );
}

export default App;
