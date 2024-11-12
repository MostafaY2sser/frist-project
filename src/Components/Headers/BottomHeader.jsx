

import { FormControl, MenuItem, Select } from "@mui/material"
import "./header.css"
import { useState } from 'react';
import { Link } from "react-router-dom";


const BottomHeader = () => {

  //  Handel Category :--------------------------
  const [ category , setCategory ] = useState('');
  const handleChange = (event) => {
    const categoryValue = event.target.value 
    setCategory(categoryValue)
    // console.log(categoryValue)
  };




  return (
    <div className="bottomHeader">
      <div className="bottomContainer">
      <FormControl className="lastDropDown" >
        <Select
          value={category}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            fontSize:18,
            color:"white",
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
                color: "white",
            },
        }}
        >
          <MenuItem value="">
            <em>جميع الفئات</em>
          </MenuItem>
          <MenuItem value={"رجال"}>رجال</MenuItem>
          <MenuItem value={"نساء"}>نساء</MenuItem>
          <MenuItem value={"اطفال"}>اطفال</MenuItem>
        </Select>
      </FormControl>
      <div className="links">
        <Link to="/..." className="link">رياضة</Link>
        <Link to="/..." className="link">الحديقة والمنزل</Link>
        <Link to="/..." className="link">الهواتف الزكية</Link>
        <Link to="/..." className="link">اكسسورات</Link>
        <Link to="/..." className="link">الكترونيات</Link>
        <Link to="/..." className="link">اطفال</Link>
        <Link to="/..." className="link">رجال</Link>
        <Link to="/..." className="link">نساء</Link>
      </div>
      </div>
    </div>
  )
}

export default BottomHeader
