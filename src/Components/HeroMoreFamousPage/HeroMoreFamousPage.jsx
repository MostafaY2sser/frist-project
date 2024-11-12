

import "./heroMoreFamousPage.css"
// import man from "../../images/bestSellingImg.png";
import more from "../../images/moreFamousImg.png"

const HeroMoreFamousPage = () => {
    return (
        <div className="heroMoreFamous">
            <div className="bg"></div>
            {/* <img className="man" src={man} alt="" /> */}
            <div className="text">
                <div className="title">
                    <img src={more} alt="" />
                    <span>الاكثر شهرة</span>
                </div>
                <p>اكثر المنتجات شهرة في المتجر</p>
            </div>
        </div>
    )
}

export default HeroMoreFamousPage
