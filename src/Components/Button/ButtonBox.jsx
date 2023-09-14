import React from "react";
import "./Button.css";

const ButtonBox = ({ buttonText, variant, link, icon }) => {
    const variantClass = variant ? `rb_${variant.toLowerCase()}_btn` : "rb_btn";
    const iconClass = icon ? `fa ${icon}` : "";

    return (
        <button className={`rb_btn ${variantClass} ${iconClass}`}>
            {link ? (
                <a
                    href={link}
                    className={`${link} ? "link_btn" : ""`}
                    target="_blank"
                >
                    {buttonText}
                </a>
            ) : (
                buttonText
            )}
        </button>
    );
};

export default ButtonBox;
