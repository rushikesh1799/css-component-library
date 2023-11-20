import React from "react";
import { Sidebar } from "../Components/Sidebar";
import { TextBox } from "../Components/Text/Text";

const Text = () => {
  return (
    <main>
      <Sidebar />
      <div className="main_content">
        <h2 className="component_header">Text Component</h2>
        <p className="component_content">Text is used to render text and paragraphs within an interface.</p>
        <div className="headings_wrapper">
          <TextBox variant={"4xl"} text={"(4xl) In love with React & Next"} />
          <TextBox variant={"3xl"} text={"(3xl) In love with React & Next"} />
          <TextBox variant={"2xl"} text={"(2xl) In love with React & Next"} />
          <TextBox variant={"xl"} text={"(xl) In love with React & Next"} />
          <TextBox variant={"lg"} text={"(lg) In love with React & Next"} />
          <TextBox variant={"md"} text={"(md) In love with React & Next"} />
          <TextBox variant={"sm"} text={"(sm) In love with React & Next"} />
        </div>
        <br />
        <h3>How to use Text Component?</h3>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=monokai&wt=none&l=jsx&width=817.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=136%25&si=false&es=2x&wm=false&code=%253CTextBox%2520variant%253D%257B%25224xl%2522%257D%2520text%253D%257B%2522%284xl%29%2520In%2520love%2520with%2520React%2520%2526%2520Next%2522%257D%2520%252F%253E%250A%253CTextBox%2520variant%253D%257B%25223xl%2522%257D%2520text%253D%257B%2522%283xl%29%2520In%2520love%2520with%2520React%2520%2526%2520Next%2522%257D%2520%252F%253E%250A%253CTextBox%2520variant%253D%257B%25222xl%2522%257D%2520text%253D%257B%2522%282xl%29%2520In%2520love%2520with%2520React%2520%2526%2520Next%2522%257D%2520%252F%253E%250A%253CTextBox%2520variant%253D%257B%2522xl%2522%257D%2520text%253D%257B%2522%28xl%29%2520In%2520love%2520with%2520React%2520%2526%2520Next%2522%257D%2520%252F%253E%250A%253CTextBox%2520variant%253D%257B%2522lg%2522%257D%2520text%253D%257B%2522%28lg%29%2520In%2520love%2520with%2520React%2520%2526%2520Next%2522%257D%2520%252F%253E%250A%253CTextBox%2520variant%253D%257B%2522md%2522%257D%2520text%253D%257B%2522%28md%29%2520In%2520love%2520with%2520React%2520%2526%2520Next%2522%257D%2520%252F%253E%250A%253CTextBox%2520variant%253D%257B%2522sm%2522%257D%2520text%253D%257B%2522%28sm%29%2520In%2520love%2520with%2520React%2520%2526%2520Next%2522%257D%2520%252F%253E"
          sandbox="allow-scripts allow-same-origin"
          className="avatar_component_iframe">
        </iframe>
      </div>
    </main>
  );
};
export default Text;
