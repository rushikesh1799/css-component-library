import React from "react";
import { useNavigate } from "react-router";

const Components = () => {
    const navigate = useNavigate();

    return (
        <div className="components_wrapper">
            <h2 className="components_heading">All components</h2>
            <div className="all_components">
                <div
                    className="component_div"
                    onClick={() => navigate("/components/avatar")}
                >
                    Avatar
                </div>
                <div
                    className="component_div"
                    onClick={() => navigate("/components/alert")}
                >
                    Alert
                </div>
                <div
                    className="component_div"
                    onClick={() => navigate("/components/badge")}
                >
                    Badge
                </div>
                <div
                    className="component_div"
                    onClick={() => navigate("/components/button")}
                >
                    Button
                </div>
                <div
                    className="component_div"
                    onClick={() => navigate("/components/card")}
                >
                    Card
                </div>
                <div
                    className="component_div"
                    onClick={() => navigate("/components/headings")}
                >
                    Headings
                </div>
                <div
                    className="component_div"
                    onClick={() => navigate("/components/text")}
                >
                    Text
                </div>
                <div
                    className="component_div"
                    onClick={() => navigate("/components/image")}
                >
                    Image
                </div>
            </div>
        </div>
    );
};

export default Components;
