import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const isUserLoggedIn = false;

  return (
    <>
      {isUserLoggedIn ? props.children : <Navigate to={"/user-auth/login"} />}
    </>
  );
};
export default PrivateRoute;
