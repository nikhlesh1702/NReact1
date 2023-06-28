const heading = React.createElement(
    "div", 
    {id: "parent"},
    React.createElement("div", 
      {id:"child"},
        [ React.createElement("h1", {id: "heading"}, "Hello World"), 
          React.createElement("h2", {id:"heading"}, "Hello world ")])
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);