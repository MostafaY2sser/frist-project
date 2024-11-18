import './talapaty.css'
const Talapaty = () => {

  return (
    <div className="talapaty">
      <div className="talapatyContainer">
        {/* navigation */}

        <div className="navigation-bar">
          <nav>
            <ul>
              <li className="active">طلباتي</li>
              <li>طلبي غير المدفوعة</li>
              <li>تحميل الطلبات الجديدة</li>
              <li>مخزوني المقفل</li>
              <li>تخصيص الفاتورة</li>
            </ul>
          </nav>
        </div>

        {/* search */}

        <div className="search-bar">
        
          <h3>بحث في : </h3>

          <select className="dropdown">
            <option value="all">الكل</option>
            <option value="order">رقم الطلب</option>
            <option value="product">نوع المنتج</option>
          </select>
          
          <input
            type="text"
            placeholder="رقم الطلب أو نوع المنتج..."
            className="search-input"
          />

          

          

          <select className="dropdown">
            <option value="all">الكل</option>
            <option value="today">اليوم</option>
            <option value="week">هذا الأسبوع</option>
            <option value="month">هذا الشهر</option>
          </select>

          <button className="search-button">بحث</button>
        </div>

        {/* orders-table */}

        <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>المستلم</th>
                <th>الشحن</th>
                <th>الحالة</th>
                <th>كمية</th>
                <th>تاريخ</th>
                <th>طلب</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>فرح عماد</td>
                <td>Singapore Post</td>
                <td className="status-paid">مدفوع</td>
                <td>1</td>
                <td>20-10-2024</td>
                <td>#524022</td>
              </tr>
              <tr>
                <td>فرح عماد</td>
                <td>Singapore Post</td>
                <td className="status-paid">مدفوع</td>
                <td>2</td>
                <td>14-11-2024</td>
                <td>#355380</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Talapaty;
