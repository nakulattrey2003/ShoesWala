import React from 'react';

import {FiHeart} from "react-icons/fi";
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";

import "./Nav.css";

function Nav({handleInputChange, query}){
    return(
        <nav>
            <div className="nav-container">
                <input 
                    type="text" 
                    className='search-input' 
                    placeholder='Enter Shoes Name To Search' 
                    onChange={handleInputChange}
                    value={query}
                />
            </div>

            <div className='profile-container'>
                <a href="#">
                    <FiHeart className="nav-icons" />
                </a>
                <a href="#">
                    <AiOutlineShoppingCart className="nav-icons" />
                </a>
                <a href="#">
                    <AiOutlineUserAdd className="nav-icons" />
                </a>
            </div>
        </nav>
    )
}

export default Nav;