        // Creating a bold tag using React create Element
        const bold = React.createElement("b",{},"Welcome to React Course");

        // Creating a paragraph tag using React create Element
        const heading1 = React.createElement("p",{style: {textAlign:"center",color:"red"}}, bold);
        
        // Creating a h1 tag using React create Element
        const heading2 = React.createElement("h1",{}, "Hello World");

        // creating a root elment such that we could render all the above tags
        const root = ReactDOM.createRoot(document.getElementById("root"));

        // Creating a CONTAINER div tag such that we could use all the above tags
        const container = React.createElement("div", {id:"container"},[heading1,heading2]);

        // rendering the container
        root.render(container);
