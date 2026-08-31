import ProductCard from "../ProductCard/ProductCard";
import EmptyState from "../EmptyState/EmptyState";
import "./ProductList.css";

function ProductList(props) {
  if (props.products.length === 0) {
    return <EmptyState message="No products found" />;
  }

  return (
    <div className="product-list">
      {props.products.map(function (product) {
        let isInCart = false;

        for (let i = 0; i < props.cartItems.length; i++) {
          if (props.cartItems[i].id === product.id) {
            isInCart = true;
          }
        }

        return (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category={product.category}
            isInCart={isInCart}
            onAddToCart={function () {
              props.onAddToCart(product);
            }}
          />
        );
      })}
    </div>
  );
}

export default ProductList;