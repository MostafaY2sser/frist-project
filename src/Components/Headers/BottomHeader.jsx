import { FormControl, MenuItem, Select } from "@mui/material";
import "./header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const BottomHeader = () => {
  // Handle Category Selection
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    const categoryValue = event.target.value;
    setCategory(categoryValue);
  };

  // Categories
  const categories = [
    { value: "", label: "جميع الفئات" },
    { value: "رياضة", label: "رياضة" },
    { value: "الحديقة والمنزل", label: "الحديقة والمنزل" },
    { value: "الهواتف الزكية", label: "الهواتف الزكية" },
    { value: "اكسسورات", label: "اكسسورات" },
    { value: "الكترونيات", label: "الكترونيات" },
    { value: "اطفال", label: "اطفال" },
    { value: "رجال", label: "رجال" },
    { value: "نساء", label: "نساء" },
  ];

  return (
    <div className="bottomHeader">
      <div className="bottomContainer">
        <FormControl className="lastDropDown">
          <Select
            value={category}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              fontSize: 18,
              color: "white",
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
                color: "white",
              },
            }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>
                {cat.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="links">
          {categories.slice(1).map((cat) => (
            <Link key={cat.value} to={`/${cat.value}`} className="link">
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
