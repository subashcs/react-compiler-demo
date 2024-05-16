import { useState } from "react";
import "./App.css";
import { Count } from "./components/Count";

function App() {
  "use memo";  
  // Info: with the above string react compiler automatically memoizes callbacks and data
  // Experiment: remove the use memo string above and 
  // notice the how react re renders the Count component 
  // on count change
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  console.log("compiler check: app component called");

  return (
    <>
      <p>count is {count}</p>
      <Count onClick={handleClick} />
    </>
  );
}

export default App;
