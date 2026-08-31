import { useState } from "react";
import { products } from "./mockdata/products";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import ProductList from "./components/ProductList/ProductList";
import SearchBar from "./components/SearchBar/SearchBar";
import Cart from "./components/Cart/Cart";
import Badge from "./components/Badge/Badge";

function App() {
  const [cartItems, setCartItems] = useState(function () {
    try {
      const saved = localStorage.getItem("cart");
      if (saved) {
        return JSON.parse(saved);
      } else {
        return [];
      }
    } catch (error) {
      return [];
    }
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("none");
  const [discountCode, setDiscountCode] = useState("");

  function updateCart(newCart) {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function handleAddToCart(product) {
    let found = false;
    let newCart = [];

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === product.id) {
        found = true;
        newCart.push({
          id: cartItems[i].id,
          name: cartItems[i].name,
          price: cartItems[i].price,
          quantity: cartItems[i].quantity + 1,
        });
      } else {
        newCart.push(cartItems[i]);
      }
    }

    if (!found) {
      newCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }

    updateCart(newCart);
  }

  function handleIncrease(id) {
    let newCart = [];

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id) {
        newCart.push({
          id: cartItems[i].id,
          name: cartItems[i].name,
          price: cartItems[i].price,
          quantity: cartItems[i].quantity + 1,
        });
      } else {
        newCart.push(cartItems[i]);
      }
    }

    updateCart(newCart);
  }

  function handleDecrease(id) {
    let newCart = [];

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id) {
        if (cartItems[i].quantity === 1) {
          // skip pushing it — this removes the item
        } else {
          newCart.push({
            id: cartItems[i].id,
            name: cartItems[i].name,
            price: cartItems[i].price,
            quantity: cartItems[i].quantity - 1,
          });
        }
      } else {
        newCart.push(cartItems[i]);
      }
    }

    updateCart(newCart);
  }

  function handleRemove(id) {
    let newCart = [];

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id !== id) {
        newCart.push(cartItems[i]);
      }
    }

    updateCart(newCart);
  }

  function clearCart() {
    updateCart([]);
  }

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSortChange(e) {
    setSortOrder(e.target.value);
  }

  // Derived data — not stored in state, calculated fresh every render

  let filteredProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
      filteredProducts.push(products[i]);
    }
  }

  let sortedProducts = filteredProducts.slice();
  if (sortOrder === "low-to-high") {
    sortedProducts.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (sortOrder === "high-to-low") {
    sortedProducts.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  let totalCartCount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalCartCount = totalCartCount + cartItems[i].quantity;
  }

  return (
    <div id="top">
      <Navbar />

      <ProductDescription />

      <section id="all-products" className="all-products">
        <div className="all-products__header">
          <h2>All Products</h2>
          <Badge text={"Cart: " + totalCartCount} color="green" />
        </div>

        <div className="all-products__controls">
        <SearchBar value={searchTerm} onChange={handleSearchChange} />

        <select value={sortOrder} onChange={handleSortChange}>
          <option value="none">Sort by</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
        </div>

        <ProductList
          products={sortedProducts}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
        />
      </section>

      <section className="cart-section">
        <h2>Your Cart</h2>
        <Cart
          cartItems={cartItems}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
        />
        {cartItems.length > 0 && (
          <button className="cart__clear-btn" onClick={clearCart}>Clear Cart</button>
        )}
      </section>
    </div>
  );
}

export default App;