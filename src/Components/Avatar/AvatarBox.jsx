import React from "react";
import "./Avatar.css";

const AvatarBox = ({ imageURL, altText, variant }) => {
    return (
        <img
            src={imageURL}
            className={`avatar avatar-${variant}`}
            alt={altText}
        />
    );
};

export default AvatarBox;
