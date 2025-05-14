import React from "react";

const Navbar = () => {
    return (
        <div>
            <header className="header">
                <div className="header_one">
                    <a href="\#" className="logo">Newroad Bookstore</a>
                    <form className="search-form">
                        <input type="search" id="search-box" placeholder="search here"/>
                        <label htmlFor="">  </label>
                    </form>
                </div>

            </header>
        </div>
    )
}
export default Navbar