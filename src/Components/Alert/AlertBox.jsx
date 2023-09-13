import React from "react";
import "./Alert.css";

const AlertBox = ({ text, variant }) => {
    return <p className={`alert alert_${variant}`}>{text}</p>;
};

export default AlertBox;
