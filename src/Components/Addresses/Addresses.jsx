import './Addresses.css';
import anawenImg from '../../images/3naweneImg/Group 564.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import   { useState } from 'react';
import Modal from 'react-modal';

const Addresses = () => {

Modal.setAppElement('#root');

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  return (
    <div 
    dir='rtl'
    className='Addresses'>
        <div className='AddressesPage'>
            <div>
                <img src={anawenImg} alt="anawenImg" />
            </div>

            <div className="address-container">
      <div className="address-item">
        <div className="address-info">
          فرح عماد, مصر, القاهرة, مصر الجديدة, 01111, 01111000000
        </div>
        <div className="address-actions">
          <button className="edit-btn">
          <FontAwesomeIcon icon={faPencil} />
          </button>
          <button className="delete-btn">
          <FontAwesomeIcon icon={faTrash} style={{color: "#d92626",}} />
          </button>
        </div>
      </div>
      
      <div className="address-item">
        <div className="address-info">
          فرح عماد, مصر, الإسكندرية, المنشية, 9988, 01111000000
        </div>
        <div className="address-actions">
          <button className="edit-btn">
          <FontAwesomeIcon icon={faPencil} />
          </button>
          <button className="delete-btn">
          <FontAwesomeIcon icon={faTrash} style={{color: "#d92626",}} />
          </button>
        </div>
      </div>
      
      <div className="add-new-address">
        <button onClick={openModal}  className="add-address-link">إضافة عنوان جديد +</button>
      </div>
    </div>

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="إضافة عنوان"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="modal-title">إضافة عنوان</h2>
        <form className="address-form">
          <input type="text" placeholder="اسم المستلم" required />
          <input type="text" placeholder="البلد \ المنطقة" required />
          <input type="text" placeholder="المدينة \ المحافظة" required />
          <input type="text" placeholder="اسم الشركة" />
          <input type="text" placeholder="رقم الصندوق" />
          <input type="text" placeholder="خط الشارع 1" required />
          <input type="text" placeholder="خط الشارع 2" />
          <input type="text" placeholder="الرمز البريدي" required />
          <input type="text" placeholder="الدولة" required />
          <input type="text" placeholder="رقم الهاتف" required />
          <input type="email" placeholder="البريد الإلكتروني" />

          <button type="submit" className="submit-button">إضافة</button>
        </form>
        <button onClick={closeModal} className="close-button">إغلاق</button>
      </Modal>

        </div>
    </div>
  )

}

export default Addresses;