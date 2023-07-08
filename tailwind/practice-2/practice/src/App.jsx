import "./App.css";

function App() {
  return (
    <>
      <form className="new-item-form">
        <label className="header" htmlFor="item">
          New Item
        </label>
        <input className="" type="text" id="item" name="item" />
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      <h1>To Do List</h1>
      <ul className="item-list">
        <li className="item"> </li>
      </ul>
    </>
  );
}

export default App;
