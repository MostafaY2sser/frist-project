
import "./moreFamous.css"
import famouse from "../../images/moreFamous.png";
import more from "../../images/more.png";
import moreFamouse from "../../FackeAPI/ApiMoreFamous"
import cart from "../../images/cart.png";
import likeOk from "../../images/likeOk.png";
import likeNo from "../../images/likeNo.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Rating } from "@mui/material";
import { Store } from "../../ContextAPI";


const MoreFamous = () => {


    const navigate = useNavigate();

    return (
        <div className="famous">
            <div className="top">
                <div onClick={() => navigate("/moreFamousPage")} className="more">
                    <img src={more} alt="" />
                    <span>رؤية المزيد</span>
                </div>
                <div className="title">
                    <img src={famouse} alt="" />
                    <span>الاكثر شهرة</span>
                </div>
            </div>
            <div className="products">
                {moreFamouse.map((item, index) => (
                    <ProductItem  key={index} item={item} />
                ))}
            </div>
        </div>
    )
}


const ProductItem = ({ item }) => {


    const { removeFromWishlist , addToWishlist } = useContext(Store)


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
                <span className="rate">{`${item.rating}.0`}</span>
                <Rating name="read-only" value={item.rating} readOnly />            
            </div>
            <div className="addCart">
                <img src={cart} alt="shopping cart" />
                <span>اضف الي العربة</span>
            </div>
            {item.new ? <span className="newOk">جديد</span> : null}
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
        like: PropTypes.bool.isRequired,
        new: PropTypes.bool,
        sall: PropTypes.bool,
    }).isRequired,
};


export default MoreFamous
