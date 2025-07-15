/*
<div id='parent>
<div id ="child">
<h1>hello inner papa</h1>
</div>
</div>
*/

const heading = React.createElement("div",{id:"parent"}, 
                React.createElement("div",{id:"child"},
                React.createElement("h1", {}, "hello inner papa")))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
console.log(heading)







// const heading = React.createElement("h1", {id:"heading"}, "Hello React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
