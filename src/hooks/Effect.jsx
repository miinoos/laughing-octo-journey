import { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0); //default value is given to display count when there is no value defined

  useEffect(() => {
    //code what we want to run
    console.log("The count is :", count);

    //optional return function - cleanup or while unmounting
    return () => {
      console.log("I am being cleaned up!");
    };
  }, [count]); //what our code react to, depencency array
  //empty dependency array is only run once while mounting

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

export default Effect;
