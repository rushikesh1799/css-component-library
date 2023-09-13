import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
    const links = [
        { name: "Avatar", path: "/avatar" },
        { name: "Alert", path: "/alert" },
        { name: "Badge", path: "/badge" },
        { name: "Button", path: "/button" },
        { name: "Card", path: "/card" },
        { name: "Headings", path: "/headings" },
        { name: "Image", path: "/image" },
        { name: "Text", path: "/text" },
    ];

    const styles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
        };
    };

    return (
        <div className="sidebar_wrapper navlinks_wrapper">
            {links.map((link, index) => (
                <NavLink
                    className="navbar_links"
                    style={styles}
                    to={`/components${link.path}`}
                    key={index}
                >
                    {link.name}
                </NavLink>
            ))}
        </div>
    );
};
