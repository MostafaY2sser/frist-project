

import "./Footer.css"
import facebock from "../../images/footer/facebock.png"
import instgram from "../../images/footer/instgram.png"
import tiktok from "../../images/footer/tiktok.png"
import twitter from "../../images/footer/twitter.png"
import youtub from "../../images/footer/youtub.png"
import p from "../../images/footer/p.png"
import logo from "../../images/footer/logo.png"
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContainer">


                <div className="column images">
                    <img src={logo} alt="logo" />
                    <div className="socialMedia">
                        <img src={youtub} alt="" />
                        <img src={facebock} alt="" />
                        <img src={p} alt="" />
                        <img src={instgram} alt="" />
                        <img src={twitter} alt="" />
                        <img src={tiktok} alt="" />
                    </div>
                </div>


                <div className="column">
                    <div className="number">
                        <h2>الهاتف</h2>
                        <p>+201000000000</p>
                        <p>+201200000000</p>
                    </div>
                    <div className="email">
                        <h2>البريد الاكتروني</h2>
                        <p>bronzstore@yahoo.com</p>
                    </div>
                </div>


                <div className="column">
                    <h2>الخدمات</h2>
                    <Link className="link" to="/">الخدمات</Link>
                    <Link className="link" to="/">الخصوصية</Link>
                    <Link className="link" to="/">البنود</Link>
                    <Link className="link" to="/">القوانين</Link>
                </div>

                <div className="column">
                    <h2>روابط سريعة</h2>
                    <Link className="link" to="/">الرئيسية</Link>
                    <Link className="link" to="/">من نحن</Link>
                    <Link className="link" to="/">ما يميزنا</Link>
                    <Link className="link" to="/">شكاوي</Link>
                </div>

            </div>
            <div className="copyWrite">bronzstore@yahoo.com جميع الحقوق محفوظة</div>
        </div>
    )
}

export default Footer
