import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import user from "../../images/user.png";
import cart from "../../images/cart.png";
import likes from "../../images/likes.png";
import logo from "../../images/logo.svg";
import { FormControl, MenuItem, Select } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const MidHeader = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handlesetCategory = (event) => {
    setCategory(event.target.value);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="midHeader">
      <div className="midContainer">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <Link to="/help">مساعدة</Link>
          <Link to="/About">من نحن</Link>
          <Link to="/newPage">الجديد</Link>
          <Link to="/">الرئيسية</Link>
        </div>
        <div className="search">
          <div className="searchIcon">
            <FontAwesomeIcon className="icon" icon={faSearch} />
          </div>
          <input type="text" placeholder="بحث عن الصنف او الفئة" />
          <FormControl size="small">
            <Select
              className="midDropDown"
              value={category}
              onChange={handlesetCategory}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                fontSize: { xs: 14, sm: 16, md: 18 },
                color: "#6918B4",
                border: "none",
                boxShadow: "none",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiSelect-icon": {
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
        <div className="mobile-header-group">
          <div className="icons">
            <img onClick={() => navigate("/profile")} src={user} alt="" />
            <img onClick={() => navigate("/shoppingCart")} src={cart} alt="" />
            <img onClick={() => navigate("/wishList")} src={likes} alt="" />
          </div>
          <button className="menu-button" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isNavOpen ? "open" : ""}`}>
        <button className="close-nav" onClick={toggleNav}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="mobile-links">
          <Link to="/" onClick={toggleNav}>
            الرئيسية
          </Link>
          <Link to="/newPage" onClick={toggleNav}>
            الجديد
          </Link>
          <Link to="/About" onClick={toggleNav}>
            من نحن
          </Link>
          <Link to="/help" onClick={toggleNav}>
            مساعدة
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MidHeader;
