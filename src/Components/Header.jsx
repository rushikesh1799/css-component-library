import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className="header_wrapper">
            <div onClick={() => navigate("/")} className="title">
                <h2>
                    <strong className="title_CSS">CSS</strong> 
                    {" "}Library
                </h2>
            </div>
            <div className="links_wrapper">
                <NavLink className="links" to="/">
                    Home
                </NavLink>
                <NavLink 
                    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active links" : "links" }  
                    to="/components">
                    Components
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
