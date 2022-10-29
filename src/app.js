export default function App() {
    return (
        <div className="app"></div>
    );
}

// react
const rootNode = document.getElementById('react_root');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);