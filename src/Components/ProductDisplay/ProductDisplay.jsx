import React from "react";
import { useLocation } from "react-router-dom";
import "./Product.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus, faShare, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

export const ProductDisplay = () => {
  const location = useLocation(); 
  const product = location.state; 

  
  if (!product) {
    return <div>المنتج غير متوفر</div>;
  }

  return (
    <div className="container">
      <div className="first-section">
        <div className="left-side">
          <div className="info">
            <h3>{product.name}</h3>
            <p>
              وقت التسليم 4 - 5 ايام
              <FontAwesomeIcon icon={faTruck} style={{ color: "#ff6600" }} />
            </p>
          </div>
          <div className="text">
            <p>{`سعر المنتج: ${product.price} ج`}</p>
          </div>
          <div className="rate">
            <FontAwesomeIcon icon={faStar} style={{ color: "#f39212" }} />
            <span>{`${product.rating}.0`}</span>
          </div>
          <div className="buttons">
            <button>
              اضافة الى العربة
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <button>
              اشتري الان
              <FontAwesomeIcon icon={faHandHoldingDollar} />
            </button>
          </div>
        </div>
        <div className="right-side">
          <img src={product.img} alt={product.name} />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;




// import React from "react";
// import "./Product.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHeart,
//   faPlus,
//   faShare,
//   faStar,
// } from "@fortawesome/free-solid-svg-icons";
// import { faTruck } from "@fortawesome/free-solid-svg-icons";
// import {
//   faCartShopping,
//   faHandHoldingDollar,
// } from "@fortawesome/free-solid-svg-icons";

// const ProductDisplay = () => {
//   return (
//     <div className="container">
//       <div className="frist-section">
//         <div className="left-side">
//           <div className="info">
//             <h3>قميص رجالي</h3>
//             <p>
//               وقت التسليم 4 - 5 ايام
//               <span>
//                 <FontAwesomeIcon icon={faTruck} style={{ color: "#ff6600" }} />
//               </span>
//             </p>
//           </div>

//           <div className="text">
//             <p>
//               قميص رجالي بأكمام طويلة مصنوع من قماش عالي الجودة يحتوي على جيبين
//               أماميين عند الصدر، ما يمنحه لمسة عملية بالإضافة إلى الجمالية
//             </p>
//           </div>
//           <div className="price">
//             <p>999ج</p>
//           </div>

//           <div className="rate">
//             <FontAwesomeIcon icon={faStar} style={{ color: "#f39212" }} />
//             <FontAwesomeIcon icon={faStar} style={{ color: "#f39212" }} />
//             <FontAwesomeIcon icon={faStar} style={{ color: "#f39212" }} />
//             <FontAwesomeIcon icon={faStar} style={{ color: "#f39212" }} />
//             <span>4,0</span>
//           </div>

//           <div className="size">
//             <h3>المقاسات : </h3>
//             <span>S</span>
//             <span>M</span>
//             <span>L</span>
//             <span>XL</span>
//             <span>XXL</span>
//             <span>XXXL</span>
//           </div>

//           <div className="colors">
//             <h3>الالوان المتاحة: </h3>
//             <input
//               type="radio"
//               //   value="option1"
//               //   checked={selectedOption === 'option1'}
//               //   onChange={handleChange}
//             />
//             <input
//               type="radio"
//               //   value="option1"
//               //   checked={selectedOption === 'option1'}
//               //   onChange={handleChange}
//             />
//             <input
//               type="radio"
//               //   value="option1"
//               //   checked={selectedOption === 'option1'}
//               //   onChange={handleChange}
//             />
//           </div>

//           <div class="quantity-container">
//             <button class="quantity-btn decrease">-</button>

//             <div class="quantity-display">
//               <span class="quantity">1</span>
//             </div>

//             <button class="quantity-btn increase">+</button>
//           </div>

//           <div className="bottons">
//             <button>
//               اضافة الى العربة{" "}
//               <FontAwesomeIcon icon={faCartShopping} className="" />
//             </button>
//             <button>
//               اشتري الان{" "}
//               <FontAwesomeIcon icon={faHandHoldingDollar} className="" />
//             </button>
//           </div>
//         </div>

//         <div className="right-side">
//           <div className="one-element">
//             <FontAwesomeIcon className="icon" icon={faHeart} />
//             <FontAwesomeIcon className="icon" icon={faShare} />
//           </div>
//           <div className="three-element">
//             <div className="one"></div>
//             <div className="two"></div>
//             <div className="three"></div>
//           </div>
//         </div>
//       </div>
//       {/* start second-section */}
//       <div className="second-section">
//         <h3>وصف المنتج</h3>
//         <p>
//           قميص رجالي بأكمام طويلة مصنوع من قماش عالي الجودة، يوفر راحة وتهوية
//           مثالية للاستخدام اليومي و لتوفير الراحة والأناقة. يتميز بقصة مستقيمة و
//           ملائمة للجسم، ويأتي مع ياقة مستديرة. الأكمام الطويلة تكون مزودة بأزرار
//           عند المعصم لتعديل الإغلاق، مما يعطيه طابعًا رسميًا أو عمليًا
//         </p>
//         <p>
//           يحتوي القميص على جيبين أماميين عند الصدر، ما يمنحه لمسة عملية بالإضافة
//           إلى الجمالية.
//         </p>
//         <p>
//           القماش مصنوعًا من القطن الخالص لراحة أكبر، و لتسهيل العناية به وتقليل
//           التجاعيد. يتوفر القميص بألوان متعددة، من الألوان الهادئة الكلاسيكية
//           التي تناسب المناسبات الرسمية، إلى الألوان الجريئة المختلفة للاستخدام
//           اليومي أو المناسبات غير الرسمية. يمكن ارتداؤه بشكل منفرد أو مع سترة
//           لمظهر أكثر رسمية.
//         </p>
//         <div className="table-content">
//           <table
//             style={{
//               width: "40%",
//               borderCollapse: "collapse",
//               marginTop: "20px",
//             }}
//           >
//             <thead>
//               <tr>
//                 <th
//                   colSpan="2"
//                   style={{
//                     backgroundColor: "#999999",
//                     color: "black",
//                     padding: "10px",
//                     textAlign: "right",
//                   }}
//                 >
//                   عنوان مدمج
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td
//                   style={{
//                     border: "1px solid #ddd",
//                     padding: "10px",
//                     color: "#a8a7a7",
//                   }}
//                 >
//                   بيانات 1
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                   بيانات 2
//                 </td>
//               </tr>
//               <tr>
//                 <td
//                   style={{
//                     border: "1px solid #ddd",
//                     padding: "10px",
//                     color: "#a8a7a7",
//                   }}
//                 >
//                   بيانات 3
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                   بيانات 4
//                 </td>
//               </tr>
//               <tr>
//                 <td
//                   style={{
//                     border: "1px solid #ddd",
//                     padding: "10px",
//                     color: "#a8a7a7",
//                   }}
//                 >
//                   بيانات 5
//                 </td>
//                 <td style={{ border: "1px solid #ddd", padding: "10px" }}>
//                   بيانات 6
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/*end second-section */}
//       {/*start third-section */}
//       <div className="third-section">
//         <h3>الشراء معاً للحصول على خصم</h3>
//         <div className="priceAria">
//           <div className="card-addition">
//           <div className="card">
//             <div className="card-img"></div>
//             <div className="card-body">
//               <h4>قميص رجالي</h4>
//               <span>999 ج</span>
//             </div>
//           </div>
//           <FontAwesomeIcon
//             icon={faPlus}
//             style={{color: "#6918b4" , marginBottom : "30%" , fontSize : "20px" , padding : "5px"}}
//           />
//           <div className="card">
//             <div className="card-img"></div>
//             <div className="card-body">
//               <h4>قميص رجالي</h4>
//               <span>999 ج</span>
//             </div>
//           </div>
//           </div>

//           <div className="final-price">
//             <div>
//               <p>
//                 اجمالي السعر : <span>1.990ج</span> <span> oldPrice </span>{" "}
//               </p>
//             </div>
//               <div>
//                 <button>
//                   اضافة منتجيين الى العربة
//               <FontAwesomeIcon className="icon" icon={faCartShopping}/>

//                 </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*end third-section */}
//     </div>
//   );
// };

// export default ProductDisplay;
