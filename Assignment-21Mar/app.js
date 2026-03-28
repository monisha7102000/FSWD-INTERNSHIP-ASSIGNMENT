import React, { useState } from "react";
import "./App.css";

const productsData = [
  { id: 1, name: "Phone", category: "electronics", price: 10000 },
  { id: 2, name: "Laptop", category: "electronics", price: 50000 },
  { id: 3, name: "Shirt", category: "clothing", price: 500 },
  { id: 4, name: "Jeans", category: "clothing", price: 1000 }
];

function App() {
  const [products] = useState(productsData);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) => {
    return (
      (filter === "all" || p.category === filter) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="App">
      <h1>🛒 Product Listing</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search product..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filters */}
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("electronics")}>Electronics</button>
        <button onClick={() => setFilter("clothing")}>Clothing</button>
      </div>

      {/* Product Cards */}
      <div className="container">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>₹{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;