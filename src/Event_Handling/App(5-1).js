import { useCallback } from "react";

// Function declared outside the component
function handleClick2(e) {
  console.log("click2", e);
}

function handleClick() {
  alert("Button was clicked!");
}

function App() {
  /**
   * ℹ️ Synthetic Event
   * - When an event occurs in React, a synthetic event object is passed to the event handler as an argument
   * - This synthetic event is a wrapper that extends the native JavaScript event object
   *   (it has almost the same interface)
   * - The original native event object is available as syntheticEvent.nativeEvent
   * - For now, you can think of them as the same event object
   */
  function handleClick1(e) {
    console.log("click1", e);
  }

  /**
   * ℹ️ Consider React lifecycle when creating event handler functions!
   *  - When a component rerenders, functions defined inside the component are recreated
   *  - This can cause unnecessary work and performance issues
   *  - Therefore, it is recommended to define functions outside the component as much as possible,
   *    or wrap them with useCallback to prevent them from being recreated on every render
   */
  const handleChange = useCallback((e) => {
    console.log("change", e.target.value);
  }, []);

  return (
    <div>
      <button onClick={handleClick1}>Button1</button>
      <button onClick={handleClick2}>Button2</button>
      <button onClick={handleClick}>Alert Button</button> {/* Added this */}
      <div>
        <input type="text" onChange={handleChange} />
      </div>
    </div>
  );
}

/** HTML **/
<>
  /** HTML **/
  <button onclick="handleClick()">handleClick</button>
  /** React **/
  <button onClick={handleClick}>Button</button>
</>;

export default App;
