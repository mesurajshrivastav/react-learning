/*
<div id="parent">
    <div id="child">
        <h1 id ="heading"> hey I am an h1 tag</h1>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "Hi i am a h1 tag"),
    React.createElement("h2", { id: "heading2" }, "Hi i am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", { id: "heading3" }, "Hi i am a h3 tag"),
    React.createElement("h4", { id: "heading4" }, "Hi i am h4 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
