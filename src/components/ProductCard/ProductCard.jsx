import Button from "../Button/Button";
import Badge from "../Badge/Badge";
import "./ProductCard.css";

function ProductCard(props) {
  let buttonLabel = "Add to Cart";
  let buttonDisabled = false;

  if (props.isInCart) {
    buttonLabel = "Added";
    buttonDisabled = true;
  }

  return (
    <div className="product-card">
      <img className="product-card__image" src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>₹{props.price}</p>
      <Badge text={props.category} color="blue" />
      <div className="product-card__footer">
      <Button
        label={buttonLabel}
        onClick={props.onAddToCart}
        variant="primary"
        disabled={buttonDisabled}
      />
    </div>
      
    </div>
  );
}

export default ProductCard;