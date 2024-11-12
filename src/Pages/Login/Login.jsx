
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import facebook from "../../images/facebook.png"
import google from "../../images/google.png"
import apple  from "../../images/apple.png"
import { useState } from "react"



const Login = () => {


    // eslint-disable-next-line no-unused-vars
    const [ correct , setCorrect ] = useState(false)

    const navigate = useNavigate()

    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate("/"); 
    };


    return (
        <div className="login">
            <div className="signupContainer">
                <h2 className="pageName">تسجيل دخول</h2>
                <div className="boxForm">
                    <form onSubmit={handleSubmit}>
                        <div className="email">
                            <label htmlFor="email">البريد الالكتروني</label>
                            <input type="email" id="email" required />
                        </div>
                        <div className="password">
                            <div className="pass">
                                <label htmlFor="pass">كلمة المرور</label>
                                <input type="text" id="pass" required />
                                <Link to="/forgetpassword" className="forgetPassword">?هل نسيت كلمة المرور</Link>
                                { correct && <p className="unCorrect">كلمة المرور غير صحيحة</p>}
                            </div>
                        </div>
                        <input className="submit" type="submit" value="تسجيل دخول"/>
                    </form>
                    <div className="question">ليس لديك حساب ? <Link to="/signup">إنشاء حساب</Link></div>
                </div>
                <div className="social">
                    <p>يمكنك تسجيل الدخول عبر مواقع التواصل الاجتماعي</p>
                    <div  className="box">
                        <span>تسجيل الدخول عبر الفيسبوك</span>
                        <img src={facebook} alt="facebook" />
                    </div>
                    <div className="box">
                        <span>تسجيل الدخول عبر جوجل</span>
                        <img src={google} alt="google" />
                    </div>
                    <div className="box">
                        <span>تسجيل الدخول عبر آبل</span>
                        <img src={apple} alt="apple" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
