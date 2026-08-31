import CartItem from "../CartItem/CartItem";
import EmptyState from "../EmptyState/EmptyState";
import "./Cart.css";

function Cart(props) {
  if (props.cartItems.length === 0) {
    return <EmptyState message="Your cart is empty" />;
  }

  let totalItems = 0;
  let totalPrice = 0;

  for (let i = 0; i < props.cartItems.length; i++) {
    totalItems = totalItems + props.cartItems[i].quantity;
    totalPrice = totalPrice + props.cartItems[i].price * props.cartItems[i].quantity;
  }

  return (
    <div className="cart">
      {props.cartItems.map(function (item) {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={function () {
              props.onIncrease(item.id);
            }}
            onDecrease={function () {
              props.onDecrease(item.id);
            }}
            onRemove={function () {
              props.onRemove(item.id);
            }}
          />
        );
      })}

      <p className="cart__total">
        Total Items: {totalItems} — Total Price: ₹{totalPrice}
      </p>
    </div>
  );
}

export default Cart;