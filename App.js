const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("div",{},"I am a h1 tag"),
        React.createElement("div",{},"I am a h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("div",{},"I am a h1 tag"),
        React.createElement("div",{},"I am a h2 tag"),
    ])
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);