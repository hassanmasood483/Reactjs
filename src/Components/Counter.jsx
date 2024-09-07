import { useState, useEffect } from "react";

// need of useState
// const Counter = () => {
//   let count = 0;
//   const Increment = () => {
//     count++;
//     console.log(count);
//   };
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={Increment}>Increment</button>
//       <button>Decrement</button>
//     </>
//   );
// };
// export default Counter;

// using UseState

// const Counter = () => {
//   const [count, setCount] = useState(6);
//   const Increment = () => {
//     setCount(count + 1);
//   };
//   const Decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={Increment}>Increment</button>
//       <button onClick={Decrement}>Decrement</button>
//     </>
//   );
// };
// export default Counter;

// making array to make different components and using map

const Counter = ({ itemName, onDelete }) => {
  const [count, setCount] = useState(6);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  //   useEffect(() => {
  //     console.log("use effect ran", { itemName });
  //   }); // it gets triggered on every change like typing anything in input field as well
  //   useEffect(() => {
  //     console.log("use effect ran");
  //   }, []); // it only gets triggered once the code is run , only once.
  //   useEffect(() => {
  //     console.log("use effect ran", { itemName });
  //   }, [count]); // now it depends upon the change in array : count
  useEffect(() => {
    console.log("Use Effect ran for count value:", count);
    return () => {
      console.log("cleanup function:", count);
    };
  }, [count]);
  return (
    <>
      <h1>{itemName}</h1>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};
export default Counter;
