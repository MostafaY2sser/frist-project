

import "./heroBestSellingPage.css"
import man from "../../images/bestSellingImg.png"
import best from "../../images/best.png"

const HeroBestSellingPage = () => {
    return (
        <div className="heroBSP">
            <div className="bg"></div>
            <img className="man" src={man} alt="" />
            <div className="text">
                <div className="title">
                    <img src={best} alt="" />
                    <span>الاكثر بيعا</span>
                </div>
                <p>اكثر المنتجات بيع في المتجر</p>
            </div>
        </div>
    )
}

export default HeroBestSellingPage
