import React from "react";
import { BadgeBox } from "../Components/Badge/Badge";
import { Sidebar } from "../Components/Sidebar";

const Badge = () => {
    return (
        <main>
            <Sidebar />
            <div className="main_content">
                <h2 className="component_header">Badge Component</h2>
                <p className="component_content">The badge component is used to display and highlight short information,
        label or statuses.</p>
                <div className="badgebox-wrapper">
                    <BadgeBox text={"Primary"} variant={"primary"} />
                    <BadgeBox text={"Secondary"} variant={"secondary"} />
                    <BadgeBox text={"Success"} variant={"success"} />
                    <BadgeBox text={"Danger"} variant={"danger"} />
                    <BadgeBox text={"Warning"} variant={"warning"} />
                    <BadgeBox text={"Info"} variant={"info"} />
                    <BadgeBox text={"Light"} variant={"light"} />
                    <BadgeBox text={"Dark"} variant={"dark"} />
                </div>

                <h3>How to use Badge Component?</h3>
                <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=817.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CBadgeBox%2520text%253D%257B%2522Primary%2522%257D%2520variant%253D%257B%2522primary%2522%257D%2520%252F%253E%250A%253CBadgeBox%2520text%253D%257B%2522Secondary%2522%257D%2520variant%253D%257B%2522secondary%2522%257D%2520%252F%253E%250A%253CBadgeBox%2520text%253D%257B%2522Success%2522%257D%2520variant%253D%257B%2522success%2522%257D%2520%252F%253E%250A%253CBadgeBox%2520text%253D%257B%2522Danger%2522%257D%2520variant%253D%257B%2522danger%2522%257D%2520%252F%253E%250A%253CBadgeBox%2520text%253D%257B%2522Warning%2522%257D%2520variant%253D%257B%2522warning%2522%257D%2520%252F%253E%250A%253CBadgeBox%2520text%253D%257B%2522Info%2522%257D%2520variant%253D%257B%2522info%2522%257D%2520%252F%253E%250A%253CBadgeBox%2520text%253D%257B%2522Dark%2522%257D%2520variant%253D%257B%2522dark%2522%257D%2520%252F%253E"
                    sandbox="allow-scripts allow-same-origin"
                    className="avatar_component_iframe">
                </iframe>

            </div>
        </main>
    );
};

export default Badge;
