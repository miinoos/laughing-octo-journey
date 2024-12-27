import { useState, useMemo } from "react";

import { initialItems } from "../utils.jsx";

const Memo = () => {
  const [count, setCount] = useState(0); //default value is given to display count when there is no value defined

  const [items] = useState(initialItems);
  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  ); //if the dependency array elements stay same then the calculation is only done once

  return (
    <>
      <p>This is an example of useMemo Hook!</p>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1); //updating the value
        }}
      >
        Increment
      </button>
      <br></br>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <p>Selected Item: {selectedItem?.id}</p>
    </>
  );
};

export default Memo;
