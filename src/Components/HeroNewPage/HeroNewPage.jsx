
import "./heroNewPage.css"
import here from "../../images/newPageImg/here.png"
import img_1 from "../../images/newPageImg/img-1.png"
import img_2 from "../../images/newPageImg/img-2.png"
import img_3 from "../../images/newPageImg/img-3.png"
import img_4 from "../../images/newPageImg/img-4.png"
import img_5 from "../../images/newPageImg/img-5.png"
import img_6 from "../../images/newPageImg/img-6.png"
import newimg from "../../images/newPageImg/new.png"


const HeroNewPage = () => {


    return (
        <div className="hero">
            <div className="images">
                <img src={img_1} alt="" />
                <img src={img_2} alt="" />
                <img src={img_3} alt="" />
                <img src={img_4} alt="" />
                <img src={img_5} alt="" />
                <img src={img_6} alt="" />
            </div>
            <img className="here" src={here} alt="" />
            <img className="newimg" src={newimg} alt="" />
            <p className="text">جميع المنتجات  <br />التي وصلت حديثاً</p>
            <span className="hereHere">هنا</span>
            <span className="newText">جديد</span>
            <span className="newTextSmallLeft">جديد</span>
            <span className="newTextSmallRight">جديد</span>
        </div>
        )
}

export default HeroNewPage
