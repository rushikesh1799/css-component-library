import React from "react";
import { Sidebar } from "../Components/Sidebar";
import Header from "../Components/Headings/Header";

const Headings = () => {
    return (
        <main>
            <Sidebar />
            <div className="main_content">
                <h2 className="component_header">Header Component</h2>
                <p className="component_content">
                    Headings are used to show a text content with different font
                    sizes as per the requirement and user preferences.
                </p>
                <div className="headings_wrapper">
                    <Header text={"Heading 1"} level={1} />
                    <Header text={"Heading 2"} level={2} />
                    <Header text={"Heading 3"} level={3} />
                    <Header text={"Heading 4"} level={4} />
                    <Header text={"Heading 5"} level={5} />
                </div>
                <h4 className="how_to_use">How to use Alert Component?</h4>

                <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=724&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CHeader%2520text%253D%257B%2522Heading%25201%2522%257D%2520level%253D%257B1%257D%2520%252F%253E%250A%253CHeader%2520text%253D%257B%2522Heading%25202%2522%257D%2520level%253D%257B2%257D%2520%252F%253E%250A%253CHeader%2520text%253D%257B%2522Heading%25203%2522%257D%2520level%253D%257B3%257D%2520%252F%253E%250A%253CHeader%2520text%253D%257B%2522Heading%25204%2522%257D%2520level%253D%257B4%257D%2520%252F%253E%250A%253CHeader%2520text%253D%257B%2522Heading%25205%2522%257D%2520level%253D%257B5%257D%2520%252F%253E%250A"
                    sandbox="allow-scripts allow-same-origin"
                    className="Headings_component_iframe"
                ></iframe>
            </div>
        </main>
    );
};

export default Headings;
