import { createContext, useState } from "react";
const userAuthContext = createContext();

const UserAuthControllerProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(10); // dom has to be updated by a state
  return (
    <>
      <userAuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {props.children}
      </userAuthContext.Provider>
    </>
  );
};
export { UserAuthControllerProvider, userAuthContext };
