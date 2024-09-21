import Counter from "../Components/Counter";
import { useState, useEffect, useContext } from "react";
import { userAuthContext } from "../Contexts/UserAuthContext";
const Home = () => {
  const [items, setItems] = useState(["Jeans", "Jackets", "Shirts", "Caps"]);
  const [userinput, setInput] = useState([""]);

  const x = useContext(userAuthContext);

  const deleteItem = (id) => {
    const updatedItems = [...items.slice(0, index), ...items.slice(index + 1)];
    setItems(updatedItems);
  };

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const addItemClickHandler = () => {
    setItems([...items, userinput]);
    setInput("");
  };
  alert;
  useEffect(() => {
    const newItem = prompt("Please enter the item yo want to add");
    if (!newItem) {
      return; //exit function
    }
    setItems([...items, newItem]);
  }, []);
  return (
    <>
      <h1>{x.isLoggedIn}</h1>
      <input
        value={userinput}
        onChange={inputChangeHandler}
        placeholder="add an item"
      />
      <button onClick={addItemClickHandler}>Add</button>
      {items.map((item, index, arr) => (
        <Counter
          key={index} //Always pass unique ID in key  if want manipulation  & if we want to display only then we can use index
          itemName={item}
          onDelete={() => deleteItem(index)} // Pass delete function
        />
      ))}
    </>
  );
};

export default Home;
