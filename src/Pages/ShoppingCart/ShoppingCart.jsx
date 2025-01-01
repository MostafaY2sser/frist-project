import "./shoppingCart.css"
import shoppingCartImg from "../../images/cart.png"
import { useContext } from "react"
import { Store } from "../../ContextAPI"
import deleteProduct from "../../images/delete.png";
import { Link } from "react-router-dom";


const ShoppingCart = () => {


    const { cartItem ,  removeFromCart , clearCart , addToCart , deleteFromCart , totalItems ,totalPrice } = useContext(Store)


    

    //  Decrease Product and Remove if Product less than 0  
    const decreaseQuantity = (item) => {
        if (item.quantity > 1) {
            removeFromCart(item.id);
        }
    };


    return (
        <div className="shoppingCart">
            <div className="shoppingCartContainer">

                <div className="title">
                    <img src={shoppingCartImg} alt="" />
                    <span>عربة التسوق</span>
                </div>

                <div className="head">
                    <div className="decsription">
                        <span>السعر الاجمالي</span>
                        <span>الكمية</span>
                        <span>السعر</span>
                    </div>
                    <p className="deleteAll" onClick={clearCart} >افراغ محتويات العربة</p>
                </div>

                <div className="box">
                    {cartItem.map((item, index) => (
                        <div className="product" key={index}>
                            <div className="cost">
                                <p className="allPrice">{`${item.price * item.quantity}ج`}</p>
                                <div className="quantity">
                                    <button onClick={()=> decreaseQuantity(item)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={()=> addToCart(item)}>+</button>
                                </div>
                                <p className="price">{`${item.price}ج`}</p>
                            </div>
                            <div className="details">
                                <div className="info">
                                    <div className="name">
                                        <p>Mostfaa Mostfaa Mostfaa Mostfaa Mostfaa Mostfaa Mostfaa</p>
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="description">
                                        <div className="sizeCont"> <span className="size">M</span> :المقاس</div>
                                        <div> <span className="color" style={{background:"red"}}></span> :اللون</div>
                                    </div>
                                </div>
                                <img src={item.img} alt="المنتج" />
                                <img onClick={()=> deleteFromCart(item.id)} className="deletProduct" src={deleteProduct} alt="تحذف المنتج" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="totalPrice">{`${totalPrice}ج`}</div>

                <div className="lastSection">
                    <h4>تابع عملية الشراء</h4>
                    <p>( عدد <span>{totalItems}</span> من القطع )</p>
                    <div>الاجمالي : <span>{`${totalPrice}ج`}</span></div>
                    <Link className="continues" to="/checkoutOne">استمرار</Link>
                </div>

            </div>
        </div>
    )
}

export default ShoppingCart
