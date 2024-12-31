
import "./newPage.css"
import HeroNewPage from "../../Components/HeroNewPage/HeroNewPage"
import newPageItem from "../../FackeAPI/ApiNewPage"
import { useContext, useState } from "react"
import { Rating } from "@mui/material"
import cart from "../../images/cart.png"
import likeOk from "../../images/likeOk.png"
import likeNo from "../../images/likeNo.png"
import propTypes from "prop-types"
import { Store } from "../../ContextAPI"



const NewPage = () => {
    return (
        <div className="newPage">
            <div className="newPageContainer">
                <HeroNewPage/>
                <div className="products">
                {newPageItem.map((item, index) => (
                    <ProductItem  key={index} item={item} />
                ))}
                </div>
            </div>
        </div>
    )
}

const ProductItem = ({ item }) => {

    const { addToWishlist , removeFromWishlist , addToCart } = useContext(Store);
    
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
            <div className="addCart" onClick={()=> addToCart(item)}>
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



// Delete Wrong :------------
ProductItem.propTypes = {
    item: propTypes.shape({
        img: propTypes.string.isRequired,
        price: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        rating: propTypes.number.isRequired,
        id: propTypes.number.isRequired,
        like: propTypes.bool.isRequired,
        new: propTypes.bool,
        sall: propTypes.bool,
    }).isRequired,
};


export default NewPage
