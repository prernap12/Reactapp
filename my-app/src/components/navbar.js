import React from "react";
import { FaSearch, FaHeart, FaUser,FaBook,FaHome,FaList,FaTags, FaStore} from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <header className="header">
                <div className="header_one">
                    <a href="\#" className="logo"><FaBook/>Newroad Bookstore</a>
                    <form className="search-form">
                        <input type="search" id="search-box" placeholder="search here"/>
                        <label htmlFor=""> <FaSearch/> </label>
                    </form>
                    <div className="icons">
                        <div id="search-btn"><FaSearch/></div>
                        <a href="/#"><FaHeart /></a>
                        <a href="/#"><FaCartArrowDown/></a>
                        <div id="login-btn" className="user-btn"><FaUser /></div>
                    </div>
                </div>
                <div className="header_two"> 
                    <div className="navbar">
                        <a href="\#">Home</a>
                        <a href="\#">Featured</a>
                        <a href="\#">Arrivals</a>
                        <a href="\#">Reviews</a>
                        <a href="\#">Blogs</a>
                    
                    </div>
                </div>
            </header>
            <div className="bottom-navbar">
                <a href="/#"><FaHome /></a>
                <a href="/#"><FaList /></a>
                <a href="/#"><FaTags /></a>
                <a href="/#"><FaStore /></a>

            </div>
        </div>
    )
}
export default Navbar