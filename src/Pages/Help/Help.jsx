
import "./help.css"
import message from "../../images/message.png"
import phone from "../../images/phone.png"
import callPhone from "../../images/callPhone.png"
import { useState } from "react"

const Help = () => {

    const [active, setActive] = useState(null); 

    const handleClick = (item) => {
        setActive(item); 
    }

    return (
        <div className="help">
            <div className="helpContainer">
                <h3>مساعدة</h3>
                <div className="contact">
                    <div 
                        onClick={() => handleClick("message")} 
                        className={active === "message" ? "activeBorder" : ""}
                    >
                        <img src={message} alt="send message" />
                        <span>تواصل معنا</span>
                    </div>
                    <div 
                        onClick={() => handleClick("phone")} 
                        className={active === "phone" ? "activeBorder" : ""}
                    >
                        <img src={phone} alt="call" />
                        <span>اتصل بنا</span>
                    </div>
                </div>

                { active === "phone" &&
                    <div className="contactPhone">
                        <div className="number">
                            <span>11111</span>
                            <img src={callPhone} alt="" />
                        </div>
                        <p>رقم الاتصال السريع مع خدمة العملاء</p>
                    </div>
                } 

                { active === "message" && 
                    <div className="contactMessage">
                        <textarea name="promblemMessage" ></textarea>
                        <p>يرجى كتابة مشكلتك وسيتم حلها في اسرع وقت</p>
                        <button>ارسال</button>
                    </div>
                }


            </div>
        </div>
    )
}

export default Help;
