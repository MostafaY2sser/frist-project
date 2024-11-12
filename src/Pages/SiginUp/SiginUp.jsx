import "./siginUp.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Link, useNavigate } from "react-router-dom"
import facebook from "../../images/facebook.png"
import google from "../../images/google.png"
import apple  from "../../images/apple.png"



const SiginUp = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate("/"); 
        toast.info(`${item.name} تم إزالته من المفضلة`);
    };

    return (
        <div className="signup">
            <div className="signupContainer">
                <h2 className="pageName">انشاء حساب</h2>
                <div className="boxForm">
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <div className="firstName">
                                <label htmlFor="frist">الاسم الاول</label>
                                <input type="text"  id="frist" name="fristName" required />
                            </div>
                            <div className="lastName">
                                <label htmlFor="last">الاسم الثاني</label>
                                <input type="text"  id="last" name="lastName" required/>
                            </div>
                        </div>
                        <div className="email">
                            <label htmlFor="email">البريد الالكتروني</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="password">
                            <div className="pass">
                                <label htmlFor="pass">كلمة المرور</label>
                                <input type="text" id="pass" name="password" required/>
                                <p>...يجب ان تحتوي على ارقام وحروف كبيرة</p>
                            </div>
                            <div className="comfirmpass">
                                <label htmlFor="comfirm">تأكيد كلمة المرور</label>
                                <input type="text" id="comfirm" name="confirmpassword" required />
                            </div>
                        </div>
                        <input className="submit" type="submit" value="انشاء حساب"/>
                    </form>
                    <div className="question">هل لديك حساب بالفعل ? <Link to="/login">تسجيل الدخول</Link></div>
                </div>
                <div className="social">
                    <p>يمكنك تسجيل الدخول عبر مواقع التواصل الاجتماعي</p>
                    <div  className="box">
                        <span>تسجيل الدخول عبر الفيسبوك</span>
                        <img src={facebook} alt="" />
                    </div>
                    <div className="box">
                        <span>تسجيل الدخول عبر جوجل</span>
                        <img src={google} alt="" />
                    </div>
                    <div className="box">
                        <span>تسجيل الدخول عبر آبل</span>
                        <img src={apple} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiginUp
