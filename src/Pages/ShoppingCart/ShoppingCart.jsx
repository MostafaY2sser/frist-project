import "./shoppingCart.css"
import shoppingCartImg from "../../images/cart.png"
import { useContext, useState } from "react"
import { Store } from "../../ContextAPI"

const ShoppingCart = () => {


    const { cartItem , clearCart } = useContext(Store)

    const [ quantity , setQuantity ] = useState(1)

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
                                <p className="price">{`${item.price}ج`}</p>
                                <div className="quantity">
                                    <button onClick={()=> setQuantity(quantity - 1)}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={()=> setQuantity(quantity + 1)}>+</button>
                                </div>
                                <p className="allPrice">{item.price}</p>
                            </div>
                            <div className="info">
                                <img src={item.img} alt="" />
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default ShoppingCart
