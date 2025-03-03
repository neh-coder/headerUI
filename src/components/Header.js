import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div className='d-flex'>
      <div className='flex-column'>
         <h2 className='fontColourr'>Shree</h2>
      </div>    
    </div>{
    // <div className='container'>
    // <div className='home'>
    // Home
    // </div>
    // <div className='shop'>
    // Our Shop
    // </div>
    // <div className='product'>
    // Products Details
    // </div>
    // <div className='contact'>
    // Contact Us
    // </div>
    // </div>
    }
    <div className='navbarr'>
     <div className='navlogo borderOut'>
      <div className='logo'>
         
      </div>
     </div>
      <div className='addressTo'>
        <p className='locFirst'>deliver to</p>
          <div className='location'>
            <CiLocationOn className='locOn'/>
              <p className='locSec'>location</p>
          </div> 
      </div>
      <div className='navSearch'>
        <select className='searchSelect'>
        <option>All</option>
        </select>
        <input type="text" placeholder='Enter name' className='searchInput'/>
        <div className='searchIcon'>
        <FaSearch/>
        </div>
      </div> 
      <div className='addList'>
      <p className='addFirst'>address List</p>
      <p className='addSec'>Hello</p>
      </div> 
    </div>
    </>
  )
}

export default Header
