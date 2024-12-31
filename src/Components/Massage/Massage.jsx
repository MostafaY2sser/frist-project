import './massage.css'
import img from '../../images/massageImage/Group 584.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';
const Massage = () => {
  return (
    <div className="massage">
        <div 
        dir='rtl'
        className="massageContainer">
            <div>
                <img src={img} alt="" />
            </div>
           
            {/* navigation */}

        <div className="navigation-bar">
          <nav>
            <ul>
              <li className="active">الرسائل</li>
              <li>الهدايا</li>
            </ul>
          </nav>
        </div>
        
        <div className='massageContainer'>

            <div className='massage-card'>
                <div className="remove-icon">
                <FontAwesomeIcon icon={faTrash} style={{color: "#d92626",}} />
                </div>
                <p>تم تلقي مشكلتك رقم 1450 وسيتم حلها في اقرب وقت
                شكراً على استخدامك متجر برونز</p>
                <FontAwesomeIcon icon={faThumbsUp} />
                <FontAwesomeIcon icon={faThumbsDown} />
            </div>
            
            <div className='massage-card'>
                <div className="remove-icon">
                <FontAwesomeIcon icon={faTrash} style={{color: "#d92626",}} />
                </div>
                <p>تم تلقي مشكلتك رقم 1450 وسيتم حلها في اقرب وقت
                شكراً على استخدامك متجر برونز</p>
                <FontAwesomeIcon icon={faThumbsUp} />
                <FontAwesomeIcon icon={faThumbsDown} />
            </div>

        </div>
        </div>
    </div>
  )
}

export default Massage;