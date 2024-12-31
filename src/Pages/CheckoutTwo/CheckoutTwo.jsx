
import { useContext, useState } from "react"
import "./checkoutTwo.css"
import { Store } from "../../ContextAPI"
import imageOne from "../../images/paymentMethods/imageOne.png"
import imageTwo from "../../images/paymentMethods/imageTwo.png"
import imageThree from "../../images/paymentMethods/imageThree.png"



const CheckoutTwo = () => {


    const { totalItems , finalPrice } = useContext(Store)



    const [active, setActive] = useState(null); 

    // fucntion for handle Active Element
    const handleClick = (item) => {
        setActive(item); 
    }



    return (
        <div className="checkoutTwo">
            <div className="checkoutTwoContainer">

                <div className="title">
                    <h3>تابع عملية الشراء</h3>
                    <p>( عدد <span> {totalItems} </span>من القطع )</p>
                </div>

                <div className="details">
                    <p className="price">السعر الاجمالي: <span>{`ج${finalPrice}`}</span></p>
                    <p className="order">طلب#: 2222</p>
                </div>

                <hr />

                <div className="paymentMethodTitle">طريقة الدفع</div>

                <div className="paymentMethod">
                    <div   
                        onClick={()=> handleClick("one")}
                        className={ `box ${active === "one" ? "select" : "" }` }
                    >
                        <img src={imageOne} alt="" />
                    </div>
                    <div 
                        onClick={()=> handleClick("two")}
                        className={ `box ${active === "two" ? "select" : "" }` }
                    >
                        <img src={imageTwo} alt="" />
                    </div>
                    <div 
                        onClick={()=> handleClick("three")}
                        className={ `box ${ active === "three" ? "select" : ""}` }
                    >
                        <img src={imageThree} alt="" />
                    </div>
                </div>

                <form action="">
                    <label htmlFor="numberID">رقم البطاقة</label>
                    <input type="text" id="numberID" placeholder="رقم البطاقة الكامل" required />
                    <label htmlFor="name">اسم حامل البطاقة</label>
                    <input type="text" id="name" placeholder="الاسم الموجود على البطاقة" required />
                    <div className="infoRow">
                        <div className="date">
                            <label htmlFor="date">تاريخ الانتهاء</label>
                            <input type="text" id="date" placeholder="شهر\سنة"  required/>
                        </div>
                        <div className="code">
                            <label htmlFor="code">رمز الأمان</label>
                            <input type="text" id="code" placeholder="رمز الامان 3 أرقام"  required/>
                        </div>
                    </div>
                    <input className="submit" type="submit" value="استمرار" />
                </form>


            </div>
        </div>
    )
}

export default CheckoutTwo
