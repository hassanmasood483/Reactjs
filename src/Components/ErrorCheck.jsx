import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    console.log("before increment:", count);
    // setCount(count + 1); // Increment the state
    // setCount(count + 1); // Increment the state
    // setCount(count + 1); // Increment the state
    setCount((prevState) => {
      return prevState + 1;
    });
    setCount((prevState) => {
      return prevState + 1;
    });
    setCount((prevState) => {
      return prevState + 1;
    });
    console.log("after increment", count); // This will still log the old count due to async state updates
  };

  return (
    <>
      {/* <h1>{props.itemName}</h1> */}
      <h1>{count}</h1>
      <button onClick={clickHandler}>Increment</button>
    </>
  );
};

export default Counter;
