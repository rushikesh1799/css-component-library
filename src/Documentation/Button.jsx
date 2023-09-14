import React from "react";
import { Sidebar } from "../Components/Sidebar";
import ButtonBox from "../Components/Button/ButtonBox";

const Button = () => {
    return (
        <main>
            <Sidebar />
            <div className="main_content">
                <h2 className="component_header">Button Component</h2>
                <p className="component_content">
                    A button indicates possible user action. Buttons allow users
                    to take actions, and make choices, with a single tap.
                </p>
                <h2 className="component_header">
                    Primary and Secondary button Components
                </h2>
                <div className="avatar_wrapper">
                    <ButtonBox buttonText={"Primary"} variant={"Primary"} />
                    <ButtonBox buttonText={"Secondary"} variant={"Secondary"} />
                </div>
                <h4 className="how_to_use">How to use these Components?</h4>
                <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=817.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CButtonBox%2520buttonText%253D%257B%2522Primary%2522%257D%2520variant%253D%257B%2522Primary%2522%257D%2520%252F%253E%250A%253CButtonBox%2520buttonText%253D%257B%2522Secondary%2522%257D%2520variant%253D%257B%2522Secondary%2522%257D%2520%252F%253E%250A"
                    sandbox="allow-scripts allow-same-origin"
                    className="Button_component_iframe"
                ></iframe>
                <h2 className="component_header">Link button Components</h2>
                <div className="avatar_wrapper">
                    <ButtonBox
                        buttonText={"NeoG"}
                        link={"https://neog.camp/"}
                    />
                </div>
                <h4 className="how_to_use">How to use these Components?</h4>
                <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=817.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CButtonBox%2520buttonText%253D%257B%2522NeoG%2522%257D%2520link%253D%257B%2522https%253A%252F%252Fneog.camp%252F%2522%257D%2520%252F%253E%250A"
                    sandbox="allow-scripts allow-same-origin"
                    className="Button_component_iframe"
                ></iframe>

                <h2 className="component_header">Icon button Components</h2>
                <div className="avatar_wrapper">
                    <ButtonBox
                        buttonText={"Add to Cart"}
                        icon={"fa-shopping-cart"}
                    />
                    <ButtonBox buttonText={"Like"} icon={"fa-thumbs-up"} />
                    <ButtonBox buttonText={"Share"} icon={"fa-share"} />
                    <ButtonBox buttonText={"Subscribe"} icon={"fa-bell"} />
                </div>
                <h4 className="how_to_use">How to use these Components?</h4>
                <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=817.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CButtonBox%2520buttonText%253D%257B%2522Add%2520to%2520Cart%2522%257D%2520icon%253D%257B%2522fa-shopping-cart%2522%257D%2520%252F%253E%250A%253CButtonBox%2520buttonText%253D%257B%2522Like%2522%257D%2520icon%253D%257B%2522fa-thumbs-up%2522%257D%2520%252F%253E%250A%253CButtonBox%2520buttonText%253D%257B%2522Share%2522%257D%2520icon%253D%257B%2522fa-share%2522%257D%2520%252F%253E%250A%253CButtonBox%2520buttonText%253D%257B%2522Subscribe%2522%257D%2520icon%253D%257B%2522fa-bell%2522%257D%2520%252F%253E%250A"
                    sandbox="allow-scripts allow-same-origin"
                    className="Button_component_iframe"
                ></iframe>
            </div>
        </main>
    );
};

export default Button;
