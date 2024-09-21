import Home from "./pages/Home";
import ProductPage from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";
import UserAuth from "./pages/UserAuth";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Layout from "./Components/Layout";
import PrivateRoute from "./Components/PrivateRoute";
import FormValidation from "./Components/FormValidation";
// if u hide element then it wont show parent tag
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* <Route index={true} element={<Home />} />
        <Route path="/" element={<Home />} /> */}
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Layout>
                <ProductPage />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route path="product-details/:id?" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="user-auth" element={<UserAuth />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Route>
        <Route path="formik" element={<FormValidation />} />
      </Routes>
    </>
  );
};
export default App;
