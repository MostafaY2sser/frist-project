import "./bestSalling.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import best from "../../images/best.png";
import more from "../../images/more.png";
import bestSelling from "../../FackeAPI/ApiBestSelling";
import cart from "../../images/cart.png";
import likeOk from "../../images/likeOk.png";
import likeNo from "../../images/likeNo.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Rating } from "@mui/material";
// import { useState } from "react";
import { Store } from "../../ContextAPI.jsx";

const BestSalling = () => {
  const navigate = useNavigate();

  return (
    <div className="best">
      <div className="top">
        <div onClick={() => navigate("/bestSellingPage")} className="more">
          <img src={more} alt="" />
          <span>رؤية المزيد</span>
        </div>
        <div className="title">
          <img src={best} alt="" />
          <span>الاكثر بيعا</span>
        </div>
      </div>
      <div className="products">
        {bestSelling.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const ProductItem = ({ item }) => {
  const { addToWishlist, removeFromWishlist, addToCart } = useContext(Store);

  // State Of Like
  const [isLiked, setIsLiked] = useState(item.like);

  // Toggle Like with Wishlist Condition
  const toggleLike = () => {
    if (isLiked) {
      // Remove item From WishList
      removeFromWishlist(item.id);
      toast.info(`${item.name} تم إزالته من المفضلة`);
    } else {
      // Add item to WishList
      addToWishlist(item);
      toast.success(`${item.name} تم إضافته إلى المفضلة`);
    }
    setIsLiked((prevLiked) => !prevLiked);
  };

  return (
    <div className="item">
      <img className="productImage" src={item.img} alt="product image" />
      <div className="info">
        <span>{`${item.price} ج`}</span>
        <span>{item.name}</span>
      </div>
      <div className="rating">
        <span className="rate">{`${item.rating}.0`}</span>
        <Rating name="read-only" value={item.rating} readOnly />
      </div>
      <div className="addCart" onClick={() => addToCart(item)}>
        <img src={cart} alt="shopping cart" />
        <span>اضف الي العربة</span>
      </div>
      {item.new ? <span className="newOk">جديد</span> : null}
      {item.sall ? <span className="sallOk">20% تخفيض</span> : null}
      <img
        className="iconHeart"
        src={isLiked ? likeOk : likeNo}
        alt={isLiked ? "like" : "dislike"}
        onClick={toggleLike}
      />
    </div>
  );
};

// Delete Wrong :------------
ProductItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    like: PropTypes.bool.isRequired,
    new: PropTypes.bool,
    sall: PropTypes.bool,
  }).isRequired,
};

export default BestSalling;
