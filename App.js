import React from "react";
import ReactDOM from "react-dom/client";

// react element
 const jsxHeading = <h1 id="heading">Hello am here</h1>;
 console.log(jsxHeading);
//react component 
//class based component - old

//functional based component - new way
// a function that return some piece of jsx code is functional component
const HeadinOnly =()=>(
    <div id="contain">
        <h1 className="head"> Hello from  component compostion</h1>
    </div>
)

const HeadingComponet =()=>(
    <div id="contain">
        <HeadinOnly/>
        {HeadinOnly()}
        <h1 className="head"> Hello from functional component </h1>
    </div>
)

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeadingComponet />);
 