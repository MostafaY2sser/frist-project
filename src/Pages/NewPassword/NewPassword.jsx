

import "./newPassword.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const NewPassword = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate("/"); 
    };


    return (
        <div className="newPassword">
            <div className="newContainer">
                <div className="title">
                    <FontAwesomeIcon className="checkIcon" icon={faCheck} /> 
                    <span>تم تأكيد رقم هاتفك</span>
                </div>
                <form  onSubmit={handleSubmit}>
                    <div className="new">
                        <label htmlFor="new">كلمة المرور الجديدة </label>
                        <input type="text" id="new" required />   
                    </div>
                    <div className="new">
                        <label htmlFor="confirnm">تأكيد كلمة المرور الجديدة</label>
                        <input type="text" id="confirnm" required/>
                    </div>
                    <input  className="submit" type="submit" value="تأكيد" />
                </form>
            </div>
        </div>
    )
}

export default NewPassword
