import React from "react"; 
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Rating } from "@material-ui/lab";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "./ProductCard.css"
import { addItemsToCart } from "../../actions/CartAction";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  
  const addToCart = (id, quantity) => {
    dispatch(addItemsToCart(id, quantity));
    toast.success("Item added to cart successfully");
  };

  const options = {
    size: "small",
    precision: 0.5,
    value: product.ratings,
    readOnly: true,
    isHalf: true,
  };

  return (
    <Link to={`/product/${product._id}`}>
      <div className="product-card">
        {/* Discount Badge */}
        <div className="badge">
          <span className="new">NEW</span>
          <span className="discount">-50%</span>
        </div>

        {/* Wishlist Icon */}
        <div className="wishlist">
          <FaHeart />
        </div>

        {/* Product Image */}
        <img src={product.images[0].url} alt={product.name} className="product-image" />

        {/* Add to Cart Button */}
        <button 
          onClick={() => addToCart(product._id, 1)} 
          className="add-to-cart">
          Add to cart
        </button>

        {/* Product Rating */}
        <div className="rating">
          <Rating {...options} />
        </div>

        {/* Product Name and Price */}
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">
          {`$${product.price}`}
          <span className="old-price">$400.00</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
