

import "./servicesSection.css"
import img_1 from "../../images/sevrisesImages/1.png"
import img_2 from "../../images/sevrisesImages/2.png"
import img_3 from "../../images/sevrisesImages/3.png"
import img_4 from "../../images/sevrisesImages/4.png"
import img_5 from "../../images/sevrisesImages/5.png"


const ServicesSection = () => {


    return (
        <div className="services">
            <div className="item">
                <img src={img_1} alt="" />
                <span>توفير انسب الأسعار</span>
            </div>
            <div className="item">
                <img src={img_2} alt="" />
                <span>منتجات <br />أصلية</span>
            </div>
            <div className="item">
                <img src={img_3} alt="" />
                <span>امكانية الاستبدال</span>
            </div>
            <div className="item">
                <img src={img_4} alt="" />
                <span>توصيل في اسرع وقت</span>
            </div>
            <div className="item">
                <img src={img_5} alt="" />
                <span>نوفر لك كل ما تحتاجه</span>
            </div>
        </div>
    )
}

export default ServicesSection
