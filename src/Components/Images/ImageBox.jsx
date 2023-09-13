import React from "react";
import "./Image.css";

const ImageBox = ({ imageURL, altText, variant }) => {
    return (
        <img
            src={imageURL}
            alt={altText}
            className={`user_img img_${variant}`}
        />
    );
};

export default ImageBox;
