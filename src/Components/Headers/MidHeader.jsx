import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import user from "../../images/user.png"
import cart from "../../images/cart.png"
import likes from "../../images/likes.png"
import logo from "../../images/logo.svg"
import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const MidHeader = () => {

    // go to Home Page
    const navigate = useNavigate()

    // Go To WishList Page
    const navigateWishList = useNavigate()

    // Go To WishList Page
    const navigateShoppingCart = useNavigate()

    // Go To profile Page
    const navigateprofile = useNavigate()



    // Handel Category  
    const [ category , setCategory ] = useState('');
    const handlesetCategory = (event) => {
        setCategory(event.target.value);
    };


    return (
        <div className="midHeader">
            <div className="midContainer">
                <div className="icons">
                    <img onClick={()=> navigateprofile("profile")} src={user} alt="" />
                    <img onClick={()=> navigateShoppingCart("shoppingCart")} src={cart} alt="" />
                    <img onClick={()=> navigateWishList("wishList")} src={likes} alt="" />
                </div>
                <div className="search">
                    <div className="searchIcon">
                        <FontAwesomeIcon className="icon" icon={faSearch} /> 
                    </div>
                    <input type="text" placeholder="بحث عن الصنف او الفئة"/>
                    <FormControl  size="small">
                        <Select
                        className="midDropDown"
                        value={category}
                        onChange={handlesetCategory}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{
                            fontSize:18,
                            color:"#6918B4",
                            border: 'none',              
                            boxShadow: 'none',          
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',       
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                border: 'none',          
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                border: 'none',        
                            },
                            '& .MuiSelect-icon': {
                                color: "#6918B4",
                            },
                        }}
                        >
                        <MenuItem value="">
                            <em>الكل</em>
                        </MenuItem>
                        <MenuItem value={"هواتف"}>هواتف</MenuItem>
                        <MenuItem value={"ملابس"}>ملابس</MenuItem>
                        <MenuItem value={"الكترونيات"}>الكترونيات</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="links">
                    <Link to="/help" className="link">مساعدة</Link>
                    <Link to="/About" className="link">من نحن</Link>
                    <Link to="/gmlaPage" className="link">بالجملة</Link>
                    <Link to="/newPage" className="link">الجديد</Link>
                    <Link to="/">الرئيسية</Link>
                </div>
                <div className="logo" onClick={()=> navigate("/")}>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MidHeader
