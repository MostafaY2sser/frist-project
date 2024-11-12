import "./enterCode.css"
import { useNavigate } from "react-router-dom";


const EnterCode = () => {

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate("/newpassword"); 
    };

    return (
        <div className="enterCode">
            <div className="codeContainer">
            <form  onSubmit={handleSubmit}>
                    <h4>ادخال رمز التاكيد</h4>
                    <p className="text" >********لقد تم ارسال رمز التأكيد الى 00</p>
                    <div className="code">
                        <input type="text" name="code" placeholder="0" maxLength={1} required/>
                        <input type="text" name="code" placeholder="0" maxLength={1} required/>
                        <input type="text" name="code" placeholder="0" maxLength={1} required/>
                        <input type="text" name="code" placeholder="0" maxLength={1} required/>
                        <p className="Question">?هل تريد إعادة ارسال الرمز</p>
                    </div>
                    <input  className="submit"  type="submit" value="تأكيد"/>
                </form>
            </div>
        </div>
    )
}

export default EnterCode
