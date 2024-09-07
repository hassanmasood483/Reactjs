import axios from "axios";
import { useEffect, useState } from "react";

const styles = {
  searchContainer: {
    display: "flex",
    justifyContent: "center", // Center the input field horizontally
    marginBottom: "20px", // Space below the input field
  },
  productContainer: {
    display: "flex",
    flexWrap: "wrap", // Ensures products are displayed in rows
    justifyContent: "space-around",
  },
  productCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "250px", // Adjust as needed
    margin: "10px",
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
  },
  productImage: {
    height: "150px",
    width: "150px",
    objectFit: "contain",
  },
  productInfo: {
    marginTop: "10px",
  },
  category: {
    fontSize: "14px",
    color: "#888",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  price: {
    fontSize: "16px",
    color: "#333",
  },
  input: {
    width: "300px", // Set a reasonable width for the input
    height: "40px", // Set the height for the input box
    padding: "10px", // Padding for better text spacing
    fontSize: "16px", // Increase the font size
    borderRadius: "8px", // Rounded edges
    border: "1px solid #ccc", // Border color
  },
  deleteButton: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#ff4d4f",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const deleteItem = (id) => {
    const updatedItems = products.filter((item) => {
      return item.id !== id;
    });
    setProducts(updatedItems);
    setSearchedProducts(updatedItems);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching the product:", error);
    }
  };

  const searchHandler = (e) => {
    const userInput = e.target.value;
    const searchResult = products.filter((item) => {
      return item.title.toLowerCase().includes(userInput.toLowerCase());
    });
    setSearchedProducts(searchResult);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* Separate container for the search input */}
      <div style={styles.searchContainer}>
        <input
          style={styles.input}
          onChange={searchHandler}
          placeholder="Search products..."
        />
      </div>

      {/* Product container */}
      <div style={styles.productContainer}>
        {searchedProducts.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img
              src={product.image}
              alt="product"
              style={styles.productImage}
            />
            <div style={styles.productInfo}>
              <h3 style={styles.category}>Category: {product.category}</h3>
              <h2 style={styles.title}>{product.title}</h2>
              <h2 style={styles.price}>Price: ${product.price}</h2>
            </div>
            <button
              onClick={() => deleteItem(product.id)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
