import React from "react";
import AlertBox from "../Components/Alert/AlertBox";
import "../App.css";
import { Sidebar } from "../Components/Sidebar";

const Alert = () => {
    return (
        <main>
            <Sidebar />
            <div className="main_content">
                <h2 className="component_header">Alert Component</h2>
                <p className="component_content">
                    Provide contextual feedback messages for typical user
                    actions with the handful of available and flexible alert
                    messages.
                </p>
                <div className="component_sample_wrapper">
                    <AlertBox
                        text={"Hi this is an Primary Alert"}
                        variant={"primary"}
                    />
                    <AlertBox
                        text={"Hi this is an Secondary Alert"}
                        variant={"secondary"}
                    />
                    <AlertBox
                        text={"Hi this is an Success Alert"}
                        variant={"success"}
                    />
                    <AlertBox
                        text={"Hi this is an Danger Alert"}
                        variant={"danger"}
                    />
                    <AlertBox
                        text={"Hi this is an Warning Alert"}
                        variant={"warning"}
                    />
                    <AlertBox
                        text={"Hi this is an Light Alert"}
                        variant={"light"}
                    />
                    <AlertBox
                        text={"Hi this is an Dark Alert"}
                        variant={"dark"}
                    />
                </div>
                <h4 className="how_to_use">How to use Alert Component?</h4>
                <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=771.25&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CAlertBox%2520text%253D%257B%2522Hi%2520this%2520is%2520a%2520Primary%2520Alert%2522%257D%2520variant%253D%257B%2522primary%2522%257D%2520%252F%253E%250A%253CAlertBox%2520text%253D%257B%2522Hi%2520this%2520is%2520a%2520Secondary%2520Alert%2522%257D%2520variant%253D%257B%2522secondary%2522%257D%2520%252F%253E%250A%253CAlertBox%2520text%253D%257B%2522Hi%2520this%2520is%2520a%2520Success%2520Alert%2522%257D%2520variant%253D%257B%2522success%2522%257D%2520%252F%253E%250A%253CAlertBox%2520text%253D%257B%2522Hi%2520this%2520is%2520a%2520Danger%2520Alert%2522%257D%2520variant%253D%257B%2522danger%2522%257D%2520%252F%253E%250A%253CAlertBox%2520text%253D%257B%2522Hi%2520this%2520is%2520a%2520Warning%2520Alert%2522%257D%2520variant%253D%257B%2522warning%2522%257D%2520%252F%253E%250A%253CAlertBox%2520text%253D%257B%2522Hi%2520this%2520is%2520a%2520Light%2520Alert%2522%257D%2520variant%253D%257B%2522light%2522%257D%2520%252F%253E%250A%253CAlertBox%2520text%253D%257B%2522Hi%2520this%2520is%2520a%2520Dark%2520Alert%2522%257D%2520variant%253D%257B%2522dark%2522%257D%2520%252F%253E%250A"
                    sandbox="allow-scripts allow-same-origin"
                    className="component_iframe"
                ></iframe>
            </div>
        </main>
    );
};

export default Alert;
