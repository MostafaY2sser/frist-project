
import BestSalling from "../../Components/BestSalling/BestSalling"
import Category from "../../Components/Category/Category"
import Descounts from "../../Components/Descounts/Descounts"
import MoreFamous from "../../Components/MoreFamous/MoreFamous"
import Selling from "../../Components/Selling/Selling"
import ServicesSection from "../../Components/ServicesSection/ServicesSection"
import SliderCategory from "../../Components/SliderCategory/SliderCategory"
import "./home.css"

const Home = () => {
    return (
        <div className="home">
            <div className="homeContainer">
                <Category/>
                <SliderCategory/>
                <ServicesSection/>
                <BestSalling/>
                <MoreFamous/>
                <Selling/>
                <Descounts/>
            </div>
        </div>
    )
}

export default Home
