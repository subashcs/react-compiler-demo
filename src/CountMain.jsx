import { useState } from "react";
import { Count } from "./components/Count";

export function CountMain() {
  // Info: with the above string react compiler automatically memoizes callbacks and data
  // Experiment: remove the use memo string above and
  // notice the how react re renders the Count component
  // on count change

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  console.log("compiler check: count main component called");

  return (
    <div>
      <p>Counter Component</p>
      <p>Count is {count}</p>
      <Count onClick={handleClick} />
    </div>
  );
}
