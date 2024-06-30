import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement("h1", { id: "heading" }, "Hello world!");
console.log(heading);

// JSX - it is not HTML in JS (It is HTML like syntax)
const jsxheading = <h1 id="heading">Hello world!</h1>;
console.log(jsxheading);

const title = {
    text: "Hello world!",
    id: "heading"
};

// Functional Component
const HeadingComponent = () => {
    return <h1 id="heading1">Hello Jayesh</h1>;
};

const num = 1000;
const HeadingComponent2 = () => {
    // same way to declare without return keyword
    return (
        <div className="container">
            {title.text}
            <HeadingComponent />
            <h1 id="heading">Hello world! {num}</h1>
        </div>
    );
};

// This is how you should render functional Component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
