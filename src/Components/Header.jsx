import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header_wrapper">
            <h1>NeoG Component Library</h1>
            <div className="links_wrapper">
                <NavLink className="links" to="/">
                    Home
                </NavLink>
                <NavLink className="links" to="/components">
                    Components
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
