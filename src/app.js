function ChaiRecipe({ drinkers }) {
    return (
        <ol>
            <li>Boil {drinkers} cups of milk.</li>
            <li>Add {2 * drinkers} spoons of masala spices.</li>
            <li>Remove from heat and add {drinkers} spoons of tea.</li>
        </ol>
    );
}

export default function App() {
    return (
        <section>
            <h1>Spiced Chai Recipe</h1>
            <h2>For one</h2>
            <ChaiRecipe drinkers={1} />
            <h2>For a small gathering</h2>
            <ChaiRecipe drinkers={4} />
            <h2>For a large party</h2>
            <ChaiRecipe drinkers={10} />
        </section>
    );
}

// react connection
const rootNode = document.getElementById('react_root');
const root = ReactDOM.createRoot(rootNode);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

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
// to fix this, just pass in props to the component 
// now the component is pure as the results will always be consistent with the value you pass in as the prop

// each component should only “think for itself”
// it shouldn't depend upon others during rendering
// each component should calculate JSX on their own
// a component should act independently from other components to produce it's own results

// in components use props for the UI not preexisting variables defined before it
// components don't depend on other components to render their JSX
// each component renders its JSX independently 

// Pure functions only calculate, so calling them twice (during strict mode) won’t change anything
// Pure functions don’t mutate variables outside of the function’s scope
// ... or objects that were created before the fuction call —> that makes them impure!

// however, it's FINE to change objects/variables you've created inside the component function (i.e. while rendering)
// thi local mutation works because no outside functions/ calculations can affect/alter it... (it was created in the same render)
// ...therefore it's pure
// side effects are things that happen “on the side”, not during rendering
// In React, side effects usually belong inside event handlers
// evnt handlers => functions that run whenever you perform an action e.g. click a button
// event handlers are defined inside a component but do not run during rendering
// ...this is because no action has been performed to provoke them to run e.g. a button clicked
// So event handlers don’t need to be pure -> because they don't affect the rendering process
// If you’ve exhausted all other options and can’t find the right event handler for your side effect
// ...attach it to your returned JSX with a useEffect call in your component
// This tells React to execute it later, after rendering. (when side effects are allowed)
// try as much as possible to express your logic with rendering alone

// You should not mutate any of the inputs that your components use for rendering.
//  ...That includes props, state, and context.
// ...To update the screen, “set” state instead of mutating preexisting objects.
// Rendering can happen at any time, so components should not depend on each others’ rendering sequence
// by using pure functions/ components, you are able to skip any components that haven't changed 
// ...therefore improving rensering time and improving performance 
// ... i.e. pure components can be cached
// pure components can be reused anywhere in your code, even on the server side
// pure components allows calculations to be stopped at once if a particular component changes in the middle of a render
// then reupdate the screen with the new data