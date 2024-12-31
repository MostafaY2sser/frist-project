import { useContext } from "react";
import "./wishlist.css";
import { Store } from "../../ContextAPI.jsx";
import like from "../../images/likes.png"
import { Rating } from "@mui/material";
import cart from "../../images/cart.png"
import LikeOk from "../../images/likeOk.png"

const Wishlist = () => {


    const {  wishlistitem , removeFromWishlist , addToCart } = useContext(Store);

    return (
        <div className="wislList">
            <div className="wislListContainer">
                <div className="title">
                    <h3>قائمة الامنيات</h3>
                    <img src={like} alt="" />
                </div>
                <div className="products">
                    {wishlistitem.map((item, index) => (
                        <div key={index} className="box">

                            <img className="productImg" src={item.img} alt="" />

                            <div className="details">
                                <div className="info">
                                    <span>{item.name}</span>
                                    <div className="rating">
                                        <span className="rate">{`${item.rating}.0`}</span>
                                        <Rating name="read-only" value={item.rating} readOnly />
                                    </div>
                                </div>
                                <div className="price">
                                    <span className="productPrice">{`${item.price}ج`}</span>
                                    <span className="discount">19ج</span>
                                </div>
                            </div>
                            <div className="addToCart" onClick={()=> addToCart(item)} >
                                <img src={cart} alt="اضف الي العربة" />
                                <span>اضف الي العربة</span>
                            </div>

                            <img className="removeItem" onClick={()=> removeFromWishlist(item.id)} src={LikeOk} alt="" />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
