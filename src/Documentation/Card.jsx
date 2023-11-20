import React from "react";
import { CardWithBadge, CardWithDismiss, CardWithTextOverlay, HorizontalCard, TextOnlyCard, VerticleCard } from "../Components/Card/Card";
import { Sidebar } from "../Components/Sidebar";

const Card = () => {
    return (
        <main>
            <Sidebar />
            <div className="main_content">
                {/* 1 */}
                <h1 className="component_header">Card Components</h1>
                <h2>Card With Badge Component</h2>
                <p className="component_content">Card is a flexible component used to group and display content in a clear and concise format.</p>

                <CardWithBadge
                    title={"Title"}
                    content={"Card content with badge."}
                    badge={"New"}
                />
                <br />
                <h3>How to use Card With Badge?</h3>
                <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=817.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CCardWithBadge%250A%2509title%253D%257B%2522Title%2522%257D%250A%2509content%253D%257B%2522Card%2520content%2520with%2520badge.%2522%257D%250A%2509badge%253D%257B%2522New%2522%257D%250A%252F%253E"
                    sandbox="allow-scripts allow-same-origin"
                    className="avatar_component_iframe" >
                </iframe>
                {/* 2 */}
                <h2>Card With Dismiss Component</h2>
                <p className="component_content">
                    Card is a flexible component used to group and display content in a
                    clear and concise format.
                </p>
                <CardWithDismiss
                    title={"Title"}
                    content={"Card content with dismiss option."}
                />
                <br />
                <h3>How to use Card With Dismiss Option?</h3>
                <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=817.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CCardWithDismiss%250A%2509title%253D%257B%2522Title%2522%257D%250A%2509content%253D%257B%2522Card%2520content%2520with%2520dismiss%2520option.%2522%257D%250A%252F%253E"
                    sandbox="allow-scripts allow-same-origin"
                    className="avatar_component_iframe" >
                </iframe>
                {/* 3 */}
                <h2>Text Only Card Component</h2>
                <p className="component_content">
                    Card is a flexible component used to group and display content in a
                    clear and concise format.
                </p>
                <TextOnlyCard content={"This is text only card."} />
                <br />
                <h3>How to use Text Only Card?</h3>
                <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=817.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CTextOnlyCard%2520%250A%2520%2520content%253D%257B%2522This%2520is%2520text%2520only%2520card.%2522%257D%2520%250A%252F%253E"
                    sandbox="allow-scripts allow-same-origin"
                    className="avatar_component_iframe" >
                </iframe>
                {/* 4 */}
                <h2>Card With Text Overlay Component</h2>
                <p className="component_content">
                    Card is a flexible component used to group and display content in a
                    clear and concise format.
                </p>
                <CardWithTextOverlay
                    imageURL={
                    "https://tse3.mm.bing.net/th?id=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&pid=Api&P=0&h=180"
                    }
                    title={"Title"}
                    content={"Card with text overlay."}
                />
                <br />
                <h3>How to use Card With Text Overlay?</h3>
                <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=817.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CCardWithTextOverlay%250A%2509imageURL%253D%257B%2522https%253A%252F%252Ftse3.mm.bing.net%252Fth%253Fid%253DOIP.roeJGz3eeyhxK3XRQ0LxpQHaFj%2526pid%253DApi%2526P%253D0%2526h%253D180%2522%257D%250A%2509title%253D%257B%2522Title%2522%257D%250A%2520%2509content%253D%257B%2522Card%2520with%2520text%2520overlay.%2522%257D%250A%252F%253E"
                    sandbox="allow-scripts allow-same-origin"
                    className="avatar_component_iframe" >
                </iframe>
                {/* 5 */}
                <h2>Verticle Card Component</h2>
                <p className="component_content">
                    Card is a flexible component used to group and display content in a
                    clear and concise format.
                </p>
                <VerticleCard
                    imageURL={
                    "https://tse3.mm.bing.net/th?id=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&pid=Api&P=0&h=180"
                    }
                    title={"Title"}
                    content={"Card content of verticle card."}
                />
                <br />
                <h3>How to use Verticle Card?</h3>
                <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=817.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CVerticleCard%250A%2509imageURL%253D%257B%2522https%253A%252F%252Ftse3.mm.bing.net%252Fth%253Fid%253DOIP.roeJGz3eeyhxK3XRQ0LxpQHaFj%2526pid%253DApi%2526P%253D0%2526h%253D180%2522%257D%250A%2509title%253D%257B%2522Title%2522%257D%250A%2509content%253D%257B%2522Card%2520content%2520of%2520verticle%2520card.%2522%257D%250A%252F%253E"
                    sandbox="allow-scripts allow-same-origin"
                    className="avatar_component_iframe" >
                </iframe>
                {/* 6 */}
                <h2>Horizontal Card Component</h2>
                <p className="component_content">
                    Card is a flexible component used to group and display content in a
                    clear and concise format.
                </p>
                <HorizontalCard
                    imageURL={
                    "https://tse3.mm.bing.net/th?id=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&pid=Api&P=0&h=180"
                    }
                    title={"Title"}
                    content={"Card content of horizontal card."}
                />
                <br />
                <h3>How to use Horizontal Card?</h3>
                <iframe
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=817.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CHorizontalCard%250A%2509imageURL%253D%257B%2522https%253A%252F%252Ftse3.mm.bing.net%252Fth%253Fid%253DOIP.roeJGz3eeyhxK3XRQ0LxpQHaFj%2526pid%253DApi%2526P%253D0%2526h%253D180%2522%257D%250A%2509title%253D%257B%2522Title%2522%257D%250A%2509content%253D%257B%2522Card%2520content%2520of%2520horizontal%2520card.%2522%257D%250A%252F%253E"
                    sandbox="allow-scripts allow-same-origin"
                    className="avatar_component_iframe" >
                </iframe>
            </div>
        </main>
    );
};

export default Card;
