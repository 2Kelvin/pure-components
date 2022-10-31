function Cup({ guest }) {
    return <p>Tea cup for guest #{guest}</p>
}

function TeaSet() {
    return (
        <div className="guests">
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
        </div>
    );
}

export default function App() {
    return <TeaSet />;
}

// react connection
const rootNode = document.getElementById('react_root');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

// NOTES
// pure components only perform calculations, nothing more!
// this helps avoid bugs as the codebase grows
// pure functions have 2 characteristics
    // it minds it's own business: it doesn't change any variables/objects existing before it was called
    // it's very clear & concise to what it does; it always returns the same result given the same input (same input, same output)
        //...e.g. function Double() should always double the number passed to it as it states

// every component should be a pure function
// given the same input, the component should always return the same JSX 
// React's rendering process must always be pure
// components should always return their JSX without changing prior variables/ objects that existed, before rendering
// components that break this rule are called 'impure components'
// ***MAIN POINT HERE!! Do Not change/ modify any preexisting variable (existing outside the function) inside the component function & then use it to render the JSX
// this outside variables available globally to other calculations could lead to confusing results in our JSX components
// ... they give unclear results
// to fix this, if you really want to use the global variable inside the component....
// ...just pass it to the component as a 'prop'
// now the component is pure as the results will always be consistent with the value you pass in as the prop

// each component should only “think for itself”
// it shouldn't depend upon others during rendering
// each component should calculate JSX on their own
// a component should act independently from other components to produce it's own results