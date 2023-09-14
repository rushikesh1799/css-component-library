import React from "react";
import { Sidebar } from "../Components/Sidebar";
import AvatarBox from "../Components/Avatar/AvatarBox";

const Avatar = () => {
    return (
        <main>
            <Sidebar />
            <div className="main_content">
                <h2 className="component_header">Avatar Component</h2>
                <p className="component_content">
                    Avatars are used to show a thumbnail representation of an
                    individual or business in the interface.
                </p>
                <div className="avatar_wrapper">
                    <AvatarBox
                        imageURL={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla-p7MqWVSLL2rpSQHlxEO6mKceKYPvZjo4oslefoeXE7-oMcRHP5IfT3qgllHC8kKvQ&usqp=CAU"
                        }
                        altText={"Avatar Component"}
                        variant={"xs"}
                    />
                    <AvatarBox
                        imageURL={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla-p7MqWVSLL2rpSQHlxEO6mKceKYPvZjo4oslefoeXE7-oMcRHP5IfT3qgllHC8kKvQ&usqp=CAU"
                        }
                        altText={"Avatar Component"}
                        variant={"s"}
                    />
                    <AvatarBox
                        imageURL={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla-p7MqWVSLL2rpSQHlxEO6mKceKYPvZjo4oslefoeXE7-oMcRHP5IfT3qgllHC8kKvQ&usqp=CAU"
                        }
                        altText={"Avatar Component"}
                        variant={"md"}
                    />
                    <AvatarBox
                        imageURL={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla-p7MqWVSLL2rpSQHlxEO6mKceKYPvZjo4oslefoeXE7-oMcRHP5IfT3qgllHC8kKvQ&usqp=CAU"
                        }
                        altText={"Avatar Component"}
                        variant={"lg"}
                    />
                    <AvatarBox
                        imageURL={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla-p7MqWVSLL2rpSQHlxEO6mKceKYPvZjo4oslefoeXE7-oMcRHP5IfT3qgllHC8kKvQ&usqp=CAU"
                        }
                        altText={"Avatar Component"}
                        variant={"xlg"}
                    />
                </div>
                <h4 className="how_to_use">How to use Alert Component?</h4>
                <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=909.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CAvatarBox%2520imageURL%253D%257B%2522%253Cyour-image-url%253E%2522%257D%2520altText%253D%257B%2522Avatar%2520Component%2520title%2522%257D%2520variant%253D%257B%2522xs%2522%257D%2520%252F%253E%250A%253CAvatarBox%2520imageURL%253D%257B%2522%253Cyour-image-url%253E%2522%257D%2520altText%253D%257B%2522Avatar%2520Component%2520title%2522%257D%2520variant%253D%257B%2522s%2522%257D%2520%252F%253E%250A%253CAvatarBox%2520imageURL%253D%257B%2522%253Cyour-image-url%253E%2522%257D%2520altText%253D%257B%2522Avatar%2520Component%2520title%2522%257D%2520variant%253D%257B%2522md%2522%257D%2520%252F%253E%250A%253CAvatarBox%2520imageURL%253D%257B%2522%253Cyour-image-url%253E%2522%257D%2520altText%253D%257B%2522Avatar%2520Component%2520title%2522%257D%2520variant%253D%257B%2522lg%2522%257D%2520%252F%253E%250A%253CAvatarBox%2520imageURL%253D%257B%2522%253Cyour-image-url%253E%2522%257D%2520altText%253D%257B%2522Avatar%2520Component%2520title%2522%257D%2520variant%253D%257B%2522xlg%2522%257D%2520%252F%253E%250A"
                    sandbox="allow-scripts allow-same-origin"
                    className="avatar_component_iframe"
                ></iframe>
            </div>
        </main>
    );
};

export default Avatar;
