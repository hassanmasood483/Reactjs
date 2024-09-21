import { useEffect, useState } from "react";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [userInput, setUserInput] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data);
      setSearchedProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteHandler = (id) => {
    const updatedItems = products.filter((currentProduct) => {
      return currentProduct.id !== id;
    });
    setProducts(updatedItems);
    setSearchedProducts(updatedItems);
    setUserInput("");
  };

  const searchHandler = (e) => {
    setUserInput(e.target.value);
    const searchResult = products.filter((item) => {
      if (item.title.toLowerCase().includes(userInput.toLowerCase())) {
        return true;
      }
    });
    setSearchedProducts(searchResult);
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
      <h1>Products Page</h1>
      <input
        value={userInput}
        onChange={searchHandler}
        placeholder="Search the item"
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ddd",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {searchedProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              transition: "transform 0.3s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "350px", // Reduced height for smaller cards
              textAlign: "center",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h2
              style={{
                fontSize: "1rem", // Reduced font size for title
                color: "#333",
                marginBottom: "10px",
                height: "40px", // Fixed height for titles to ensure uniformity
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2, // Ensures titles take up two lines at most
              }}
            >
              {product.title}
            </h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "150px", // Reduced image size
                  height: "150px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "0.85rem", // Smaller font for description
                color: "#666",
                marginBottom: "15px",
                height: "80px", // Reduced description height
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3, // Limits description to 3 lines
              }}
            >
              {product.description}
            </p>
            <h3
              style={{
                fontSize: "1.2rem",
                color: "#28a745",
                fontWeight: "bold",
              }}
            >
              ${product.price}
            </h3>

            <button
              onClick={() => {
                deleteHandler(product.id);
              }}
              style={{
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "10px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
