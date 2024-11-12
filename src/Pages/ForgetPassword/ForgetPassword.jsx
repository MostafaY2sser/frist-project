
import { useState } from "react"
import "./ForgetPassword.css"
import {  useNavigate } from "react-router-dom"

const ForgetPassword = () => {

    // eslint-disable-next-line no-unused-vars
    const [ correct , setcorrect ] =useState(false)

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate("/entercode"); 
    };


    return (
        <div className="forget">
            <div className="forgetContainer">
                <form  onSubmit={handleSubmit}>
                    <h4>هل نسيت كلمة المرور</h4>
                    <p className="text" >الرجاء ادخال رقم هاتفك وسوف يتم ارسال رمز <br /> اعادة تعيين كلمة المرور الخاصة بك</p>
                    <div className="number">
                        <label htmlFor="number">رقم الهاتف</label>
                        <input type="text" name="phoneNumber" required />
                        { correct && <p>رقم الهاتف غير صحيح</p>}
                    </div>
                    <input className="submit"   type="submit" value="تأكيد"/>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword
