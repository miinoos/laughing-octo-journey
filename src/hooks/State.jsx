import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0); //default value is given to display count when there is no value defined

  return (
    <>
      <p>This is an example of useEffect Hook!</p>
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
    </>
  );
};

export default State;
