import hero from "../../assets/hero-image.jpg";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#top" className="navbar__logo">
      <img className="navbar__image" src={hero}/>
      </a>
      <a href="#product-description">Product Description</a>
      <a href="#all-products">All Products</a>
    </nav>
  );
}

export default Navbar;