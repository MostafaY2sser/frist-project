import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css"
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FormControl , MenuItem, Select } from "@mui/material";


const TopHeader = () => {


    //  Handle Language :--------------------------
    const [ language , setLanguage] = useState('');
    const handleLanguage = (event) => {
        setLanguage(event.target.value);
    };

    //  Handle Country  :--------------------------
    const [ country, setCountry] = React.useState('');
    const handlesetCountry = (event) => {
        setCountry(event.target.value);
    };

    return (
        <div className="topHeader">
            <div className="container">
            <div className="left">
                <FormControl sx={{color:"white"}} size='small'>
                    <Select
                    value={language}
                    onChange={handleLanguage}
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
                        <em>العربية</em>
                    </MenuItem>
                    <MenuItem value={"Englash"}>Englash</MenuItem>
                    </Select>
                </FormControl>
                <span>:اللغة</span>
                <FontAwesomeIcon className='leftIcon' icon={faGlobe} />
            </div>
            <div className="right">
                <FormControl size='small'>
                    <Select
                    value={country}
                    onChange={handlesetCountry}
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
                        <em>القاهرة,مصر</em>
                    </MenuItem>
                    <MenuItem value={20}>الرياض,السعودية</MenuItem>
                    </Select>
                </FormControl>
                <span>: التوصيل</span>
            </div>
            </div>
        </div>
    )
}

export default TopHeader
