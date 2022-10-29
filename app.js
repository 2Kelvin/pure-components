export default function App() {
    return React.createElement("div", { className: "app" });
}

// react
var rootNode = document.getElementById('react_root');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));