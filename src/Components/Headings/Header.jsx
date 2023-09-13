import React from "react";

const Header = ({ text, level }) => {
    const HeadingTag = `h${level || 1}`;

    return <HeadingTag>{text}</HeadingTag>;
};

export default Header;
