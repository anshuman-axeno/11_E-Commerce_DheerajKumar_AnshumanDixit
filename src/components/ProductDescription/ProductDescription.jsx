import "./ProductDescription.css";
import hero from "../../assets/hero-image.jpg";
function ProductDescription() {
  return (
    <section id="product-description" className="product-description">
      <h2>About Our Store</h2>
      <img
        src={hero}
        alt="Our store"
        className="product-description__image"
      />
      <p>
        We sell a curated mix of everyday electronics and home essentials —
        from wireless accessories to simple items that make your space more
        comfortable. Everything here is picked for quality and simplicity.
      </p>
    </section>
  );
}

export default ProductDescription;
