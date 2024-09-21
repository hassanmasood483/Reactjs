import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const x = useParams();
  console.log(x.id);

  return (
    <>
      <h1>Product Details Page</h1>
    </>
  );
};
export default ProductDetails;
