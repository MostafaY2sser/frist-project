import './ProfileInfo.css'
import img from '../../images/profileInfo img/Group 562.png'
import imgProfile from '../../images/profileInfo img/Rectangle 477.png'
import { useState } from 'react';
export default function ProfileInfo() {

    
        const [formData, setFormData] = useState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dob: "",
          gender: "",
          country: "",
          city: "",
          password: "",
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Submitted Data:", formData);
        };
  return (
    <div 
    dir='rtl'
    className='ProfileInfo'>
        <div className='ProfileInfoContainer'>
            <div>
                <img src={img} alt="" />
            </div>

            <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="profile-image">
          <img src={imgProfile} alt="Profile" />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="firstName"
            placeholder="الاسم الأول"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="الاسم الثاني"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="رقم الهاتف"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dob"
          placeholder="تاريخ الميلاد"
          value={formData.dob}
          onChange={handleChange}
        />

        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            ذكر
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            أنثى
          </label>
        </div>

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">اختر الدولة</option>
          <option value="1">مصر</option>
          <option value="2">السعودية</option>
          <option value="3">الإمارات</option>
        </select>

        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
        >
          <option value="">اختر المدينة</option>
          <option value="1">القاهرة</option>
          <option value="2">الرياض</option>
          <option value="3">دبي</option>
        </select>

        <input
          type="password"
          name="password"
          placeholder="كلمة المرور"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          تحديث المعلومات
        </button>
        <button type="button" className="delete-btn">
          حذف الحساب
        </button>
      </form>
    </div>
        </div>
    </div>
  )
};




