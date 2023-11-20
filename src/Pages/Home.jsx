import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="home_heading">
                <h1>Your unique component library</h1>
                <p>
                    A collection of unique and innovative components for modern
                    web development.
                </p>
            </div>
            <Button variant="contained" onClick={() => navigate("/components")}>Get Started</Button>
        </div>
    );
};

export default Home;
