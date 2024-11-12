

import  "./sliderCategory.css"
import sliderImages from  "../../FackeAPI/ApiSLider"
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";


const SliderCategory = () => {


    //  Handel Scroll :-----------
    const contentRef = useRef(null);
    
    // Handle Scroll Left 
    const handleLeftClick = () => {
        if (contentRef.current) {
            contentRef.current.scrollLeft -= 220; 
        }
    };

    // Handle Scroll right
    const handleRightClick = () => {
        if (contentRef.current) {
            contentRef.current.scrollLeft += 220; 
        }
    };


    return (
        <div className="sliderCategory">
            <div className="title">جميع الفئات</div>
            <div className="content" ref={contentRef} >
                { sliderImages.map((item , index)=>(
                    <div key={index} className="item">
                        <img src={item.img} alt="product image" />
                        <span>{item.name}</span>
                    </div>
                )) }
            </div>
            <div className="arrow">
                <FontAwesomeIcon className="arrwoIcon left" icon={faArrowLeft} onClick={handleLeftClick}  />
                <FontAwesomeIcon className="arrwoIcon right"  icon={faArrowRight} onClick={handleRightClick}  /> 
            </div>
        </div>  
    )
}

export default SliderCategory
