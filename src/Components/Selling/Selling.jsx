
import "./selling.css"
import  percentage  from "../../images/Selling/imgCenter-1.png"
import  fiftyPercentage  from "../../images/Selling/50.png"
import  onePerson  from "../../images/Selling/image 25.png"
import  twoPerson   from "../../images/Selling/image 32 (1).png"
import  bestSelling  from "../../images/Selling/bestSelling.png"
import  selling  from "../../images/Selling/imgCenter-2.png"

const Selling = () => {
    return (
        <div className="selling">
            <div className="images">
                <img src={onePerson} alt="" />
                <img src={fiftyPercentage} alt="" />
                <div className="group">
                    <img src={twoPerson} alt="" />
                    <img className="text" src={bestSelling} alt="" />
                </div>
                <img className="center top"src={percentage} alt="" />
                <img className="center bottom" src={selling} alt="" />
            </div>
        </div>
    )
}

export default Selling
