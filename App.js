const heading = React.createElement("h1", {}, "Hello world!");

// neasted react element defined

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "Hello world!"),
    React.createElement("h1", { id: "h1" }, "Hello world!"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(parent);
