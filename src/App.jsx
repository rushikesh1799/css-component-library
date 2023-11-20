import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import Components from "./Pages/Components";
import Header from "./Components/Header";
import Alert from "./Documentation/Alert";
import Avatar from "./Documentation/Avatar";
import Badge from "./Documentation/Badge";
import Button from "./Documentation/Button";
import Card from "./Documentation/Card";
import Headings from "./Documentation/Headings";
import Text from "./Documentation/Text";
import Image from "./Documentation/Image";

function App() {
    return (
        <>
            <Header />
            <hr />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/components" element={<Components />}></Route>
                <Route path="/components/alert" element={<Alert />}></Route>
                <Route path="/components/avatar" element={<Avatar />}></Route>
                <Route path="/components/badge" element={<Badge />}></Route>
                <Route path="/components/button" element={<Button />}></Route>
                <Route path="/components/card" element={<Card />}></Route>
                <Route
                    path="/components/headings"
                    element={<Headings />}
                ></Route>
                <Route path="/components/text" element={<Text />}></Route>
                <Route path="/components/image" element={<Image />}></Route>
            </Routes>
        </>
    );
}

export default App;
