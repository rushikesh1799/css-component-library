import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");

    const links = [
        "avatar",
        "alert",
        "badge",
        "button",
        "card",
        "heading",
        "text",
        "image"
    ];

    const searchHandler = () => {
        const isFound = links.includes(searchText.toLowerCase());
        if (isFound) {
        navigate(`/components/${searchText.toLowerCase()}`);
        } else {
        alert("Component not found!");
        }
        setSearchText("");
    };

    return (
        <div className="header_wrapper">
            <div onClick={() => navigate("/")} className="title">
                <h2>
                    <strong className="title_CSS">CSS</strong> 
                    {" "}Library
                </h2>
            </div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for components..."
                    className="search-input"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="search-button" onClick={searchHandler}>
                Search
                </button>
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
