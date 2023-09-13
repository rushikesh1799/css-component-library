import React from "react";
import { Sidebar } from "../Components/Sidebar";
import ImageBox from "../Components/Images/ImageBox";

const Image = () => {
    return (
        <main>
            <Sidebar />
            <div className="main_content">
                <h2 className="component_header">Image Component</h2>
                <p className="component_content">
                    Images are integral part of the website, useful for profile,
                    logos and carousels.
                </p>
                <h3>Rounded Image</h3>
                <p className="component_content">
                    Round Images can be used by adding variant property as
                    "rounded".
                </p>
                <div className="Image_wrapper">
                    <ImageBox
                        imageURL={
                            "https://fastly.picsum.photos/id/866/400/400.jpg?hmac=oHJBlOQwtaF75oX43dFtPf4At_GRLEx9FQqkkfpLR5U"
                        }
                        altText={"Image Component"}
                        variant={"rounded"}
                    />

                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=817.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CImageBox%2520%250A%2509imageURL%253D%257B%2522%253Cyour-image-url%253E%2522%257D%2520%250A%2509altText%253D%257B%2522Image%2520Component%2522%257D%250A%2520%2520%2520%2520variant%253D%257B%2522rounded%2522%257D%250A%252F%253E%250A"
                        sandbox="allow-scripts allow-same-origin"
                        className="avatar_component_iframe"
                    ></iframe>

                    <h3>Responsive Image</h3>
                    <p className="component_content">
                        Responsive Images can be used by adding variant property
                        as "responsive".
                    </p>
                    <ImageBox
                        imageURL={
                            "https://fastly.picsum.photos/id/866/400/400.jpg?hmac=oHJBlOQwtaF75oX43dFtPf4At_GRLEx9FQqkkfpLR5U"
                        }
                        altText={"Image Component"}
                        variant={"responsive"}
                    />

                    <iframe
                        src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=817.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CImageBox%2520%250A%2509imageURL%253D%257B%2522%253Cyour-image-url%253E%2522%257D%2520%250A%2509altText%253D%257B%2522Image%2520Component%2522%257D%250A%2520%2520%2520%2520variant%253D%257B%2522responsive%2522%257D%250A%252F%253E%250A"
                        sandbox="allow-scripts allow-same-origin"
                        className="avatar_component_iframe"
                    ></iframe>
                </div>
            </div>
        </main>
    );
};

export default Image;
