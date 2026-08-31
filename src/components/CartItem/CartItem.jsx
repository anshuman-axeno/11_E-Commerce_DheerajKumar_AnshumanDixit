import Button from "../Button/Button";
import "./CartItem.css";

function CartItem(props) {
  let subtotal = props.price * props.quantity;

  return (
    <div className="cart-item">
      <p className="cart-item__name">{props.name}</p>
      <p>₹{props.price}</p>

      <div className="cart-item__qty">
    
      <Button label="−" onClick={props.onDecrease} variant="outline" />
      <span>{props.quantity}</span>
      <Button
        label="+"
        onClick={props.onIncrease}
        variant="outline"
        disabled={props.quantity >= 10}
      />
      </div>

      <p className="cart-item__subtotal">Subtotal: ₹{subtotal}</p>

      <Button label="Remove" onClick={props.onRemove} variant="danger" />
    </div>
  );
}

export default CartItem;