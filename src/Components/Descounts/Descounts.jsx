

import "./Descounts.css"
import best from "../../images/descounts.png";
import more from "../../images/more.png";
import descounts from "../../FackeAPI/ApiDescounts";
import cart from "../../images/cart.png";
import likeOk from "../../images/likeOk.png";
import likeNo from "../../images/likeNo.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Rating } from "@mui/material";
import { Store } from "../../ContextAPI";

const Descounts = () => {

    const navigate = useNavigate();
    return (
        <div className="descounts">
            <div className="top">
                <div onClick={() => navigate("/descountsPage")} className="more">
                    <img src={more} alt="" />
                    <span>رؤية المزيد</span>
                </div>
                <div className="title">
                    <img src={best} alt="" />
                    <span>تخفيضات</span>
                </div>
            </div>
            <div className="products">
                {descounts.map((item, index) => (
                    <ProductItem  key={index} item={item} />
                ))}
            </div>
        </div>
    )
}


const ProductItem = ({ item }) => {

    const { removeFromWishlist , addToWishlist , addToCart } = useContext(Store)

    // State Of Like 
    const [isLiked, setIsLiked] = useState(item.like);

    // Toggle Like with Wishlist Condition
    const toggleLike = () => {
        if (isLiked) {
            // Remove item From WishList
            removeFromWishlist(item.id);
        } else {
            // Add item to WishList
            addToWishlist(item);
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
                <div className="preiceDesciunts">{`${item.descount} ج`}</div>
                <div className="stars">
                    <span className="rate">{`${item.rating}.0`}</span>
                    <Rating name="read-only" value={item.rating} readOnly />
                </div>
            </div>
            <div className="addCart" onClick={()=> addToCart(item)}>
                <img src={cart} alt="shopping cart" />
                <span>اضف الي العربة</span>
            </div>
            {item.sall ? <span className="sallOk">20% تخفيض</span> : null } 
            <img
                className="iconHeart"
                src={isLiked ? likeOk : likeNo}
                alt={isLiked ? "like" : "dislike"}
                onClick={toggleLike} 
            />
        </div>
    );
};


// To Delete Wrong :------------
ProductItem.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        descount: PropTypes.number.isRequired,
        like: PropTypes.bool.isRequired,
        new: PropTypes.bool,
        sall: PropTypes.bool,
    }).isRequired,
};

export default Descounts
