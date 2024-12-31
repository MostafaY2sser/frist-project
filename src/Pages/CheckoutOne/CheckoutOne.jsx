
import { useContext, useEffect, useState } from "react";
import "./checkoutOne.css";
import { Store } from "../../ContextAPI";
import img_1 from "../../images/chekoutOne/img_1.png";
import img_2 from "../../images/chekoutOne/img_2.png";
import img_3 from "../../images/chekoutOne/img_3.png";
import img_4 from "../../images/chekoutOne/img_4.png";
import img_5 from "../../images/chekoutOne/img_5.png";
import img_6 from "../../images/chekoutOne/img_6.png";
import img_7 from "../../images/chekoutOne/img_7.png";
import { Link } from "react-router-dom";

const CheckoutOne = () => {


    const { totalItems , totalPrice , finalPrice } = useContext(Store);


// ------------------------------------------------------------------------------------
            //  Logic Shopping Method
    // State for selected Shopping Method
    const [selectedMethod, setSelectedMethod] = useState(null);

    // Fanction for Selecte Method 
    const handleSelect = (method) => setSelectedMethod(method);


    // Data
    const shippingMethods = [
        { name: "Singapore Post", cost: "80ج", time: "15 - 20 يوم", img: img_1 },
        { name: "Speedaf express", cost: "80ج", time: "15 - 20 يوم", img: img_2 },
        { name: "Aramex", cost: "80ج", time: "15 - 20 يوم", img: img_3 },
        { name: "China Post", cost: "80ج", time: "15 - 20 يوم", img: img_4 },
        { name: "Post NL", cost: "80ج", time: "15 - 20 يوم", img: img_5 },
    ];

    // Extra Data
    const extraOptions = [
        { text: "يمكنك استلام الطرد بنفسك من مستودع متجرنا", name: "تسلم الطرد بنفسك", img: img_6 },
        { text: "قم بالتخزين في مستودع متجرنا واستلمه مع الطلبات الجديدة", name: "التخزين المقفل", img: img_7 },
    ];
// ------------------------------------------------------------------------------------





// ------------------------------------------------------------------------------------
            // Logic Address

    //  State For Selecte Address
    const [selectedAddress, setSelectedAddress] = useState(null);

    // State for Address
    const [addresses, setAddresses] = useState([]);
    
    // State for Popup 
    const [showPopup, setShowPopup] = useState(false);

    // State for Add New Address
    const [newAddress, setNewAddress] = useState("");

    // Store Address in Local Storage
    useEffect(() => {
        const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
        setAddresses(storedAddresses);
    }, []);

    //  Function for handle Select Address 
    const handleSelectAddress = (address) => setSelectedAddress(address);

    // Function For Handle Address
    const handleAddAddress = () => {
        if (newAddress.trim()) {
            const newId = `address${addresses.length + 1}`;
            const newAddressObject = { id: newId, details: newAddress };

            const updatedAddresses = [...addresses, newAddressObject];
            setAddresses(updatedAddresses);

            // Save address in Local Storage
            localStorage.setItem("addresses", JSON.stringify(updatedAddresses));

            setSelectedAddress(newId);
            setNewAddress("");
            setShowPopup(false);
        }
    };
// ------------------------------------------------------------------------------------




    return (
        <div className="checkoutOne">
            <div className="checkoutOneContainer">

                <div className="title">
                    <h3>تابع عملية الشراء</h3>
                    <div>( عدد <span>{totalItems}</span> من القطع )</div>
                </div>


                <h3 className="shippingMethod">طريقة الشحن</h3>
                <div className="chooseMeth">
                    <div className="head">
                        <span>الطريقة</span>
                        <span>تكلفة الشحن</span>
                        <span>وقت الشحن</span>
                    </div>
                    <div className="methods">
                        {shippingMethods.map((method, index) => (
                            <div key={index}  className={`box ${selectedMethod === method.name ? 'selected' : ''}`} >
                                <div className="column one">
                                    <p>{method.name}</p>
                                    <img src={method.img} alt={method.name} />
                                    <input 
                                        type="radio" 
                                        checked={selectedMethod === method.name}
                                        onChange={() => handleSelect(method.name)} 
                                        required
                                    />
                                </div>
                                <div className="column two">{method.cost}</div>
                                <div className="column three">{method.time}</div>
                            </div>
                        ))}
                        {extraOptions.map((option, index) => (
                            <div key={index} className={`LastBox ${selectedMethod === option.name ? 'selected' : ''}`} >
                                <p className="lastText">{option.text}</p>
                                <div className="column">
                                    <p>{option.name}</p>
                                    <img src={option.img} alt={option.name} />
                                    <input 
                                        type="radio" 
                                        checked={selectedMethod === option.name}
                                        onChange={() => handleSelect(option.name)} 
                                        required
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <h3 className="addressName">عنوان التسليم</h3>
                <div className="address">
                    {addresses.map((address) => (
                        <div key={address.id} className={`box ${selectedAddress === address.id ? "selected" : ""}`}>
                            <p>{address.details}</p>
                            <input
                                type="radio"
                                checked={selectedAddress === address.id}
                                onChange={() => handleSelectAddress(address.id)}
                                required
                            />
                        </div>
                    ))}
                </div>
                <div className="addAddress" onClick={() => setShowPopup(true)}>
                    اضافة عنوان جديد +
                </div>

                {showPopup && (
                    <div className="popup">
                        <div className="popupContent">
                            <h3>إضافة عنوان جديد</h3>
                            <textarea
                                placeholder="أدخل العنوان الجديد هنا..."
                                value={newAddress}
                                onChange={(e) => setNewAddress(e.target.value)}
                            ></textarea>
                            <div className="popupActions">
                                <button onClick={handleAddAddress}>إضافة</button>
                                <button onClick={() => setShowPopup(false)}>إلغاء</button>
                            </div>
                        </div>
                    </div>
                )}


                <p className="infoCost">معلومات التكلفة</p>
                <div className="infoContainer">
                    <div className="cost">
                        <div className="productCost">
                            <span>:تكلفة المنتج</span>
                            <span className="totalPrice">{`${totalPrice}ج`}</span>
                        </div>
                        <div className="shoppingCost">
                            <span>:تكلفة الشحن</span>
                            <span>80ج  +</span>
                        </div>
                    </div>
                    <div className="discount">
                        <div className="discountCode">
                            <p> : كود الخصم</p>
                            <input type="text" />
                            <span>+</span>
                        </div>
                        <p>0ج -</p>
                    </div>
                    <div className="total">
                        <span className="text"> : المبلغ الاجمالي</span>
                        <span className="price">{`${finalPrice}ج`}</span>
                    </div>
                </div>


                <div className="continues"> 
                    <Link className="link" to="/checkoutTwo" >استمر</Link>
                </div>

            </div>
        </div>
    );
};

export default CheckoutOne;
