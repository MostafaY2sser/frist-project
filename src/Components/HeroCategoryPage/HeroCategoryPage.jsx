import "./heroCategoryPage.css"
import  men  from "../../images/menCategory/men.png"
import  checked  from "../../images/menCategory/checked.png"
import  descout  from "../../images/menCategory/descout.png"


const HeroCategoryPage = () => {
    return (
        <div className="heroCategoryPage">

            <div className="left">
                <div className="checked">
                    <img src={checked} alt="" />
                    <span>الافضل</span>
                </div>
                <div className="checked">
                    <img src={checked} alt="" />
                    <span>الانسب</span>
                </div>
                <div className="checked">
                    <img src={checked} alt="" />
                    <span>الاحدث</span>
                </div>
            </div>

            <div className="center">
                <img src={men} alt="" />
            </div>

            <div className="right">
                <h1>الرجال</h1>
                <h4>جميع ما تحتاجه</h4>
                <div>
                    <img src={descout} alt="" />
                    <span>كل يوم تخفيضات جديدة</span>
                </div>
            </div>

        </div>
    )
}

export default HeroCategoryPage
