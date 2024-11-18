import user from "../../images/profilePage/Group 561.png";
import img1 from "../../images/profilePage/SVGRepo_iconCarrier (2).png";
import img2 from "../../images/profilePage/SVGRepo_iconCarrier (3).png";
import img3 from "../../images/profilePage/SVGRepo_iconCarrier (4).png";
import img4 from '../../images/profilePage/Frame.png'
import img5 from '../../images/profilePage/SVGRepo_iconCarrier (5).png'
import img6 from '../../images/profilePage/Capa_1.png'
import "./profile.css";
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div dir="rtl" className="profile">
      <div className="profileContainer">
        <div>
          <img src={user} alt="user" />
        </div>
        <div className="aria">
          <Link to='/ProfileInfo' className="section">
            <div>
              <img src={img1} alt="img1" />
            </div>
            <div className="text">
              <h3>المعلومات الشخصية</h3>
              <p>معلومات تسجيل الدخول الخاصة بك من بريد الكتروني وكلمة سر...</p>
            </div>
          </Link>
          <Link to="/Addresses" className="section">
            <div>
              <img src={img2} alt="img1" />
            </div>
            <div className="text">
              <h3>عناويني</h3>
              <p>اضافة عناوين جديدة ، ازالة عنوان سابق او تعديل عنوان سابق</p>
            </div>
          </Link>
          <Link to="/Talapaty" className="section">
          <div>
              <img src={img3} alt="img1" />
            </div>
            <div className="text">
              <h3>طلباتي</h3>
              <p>طلباتك السابقة والقادمة والطلبات التي تكون قيد التفيذ</p>
            </div>
          </Link>
          <div className="section">
          <div>
              <img src={img4} alt="img1" />
            </div>
            <div className="text">
              <h3>الرمز الشريطي </h3>
              <p>قائمة الباركود و قالب الباركود الخاص بك</p>
            </div>
          </div>
          <Link to="/Massage" className="section">
          <div>
              <img src={img5} alt="img1" />
            </div>
            <div className="text">
              <h3>الرسائل والهدايا</h3>
              <p>جميع الرسائل والهدايا التي قد تصلك والردود على مشاكلك</p>
            </div>
          </Link>
          <div className="section">
          <div>
              <img src={img6} alt="img1" />
            </div>
            <div className="text">
              <h3>المدفوعات</h3>
              <p>جميع الرصيد والنقاط الخاصة بك المحفوظة في الموقع</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
