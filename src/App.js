import "./styles.css";
import { useState } from "react";
export default function App() {
  const [tasks, setTasks] = useState([{}]);
  const [value, setValues] = useState("");

  function addItem(e) {
    e.preventDefault();
    if (!value) return;
    const newTask = [...tasks, { text: `${value}` }];
    setTasks(newTask);
    setValues("");
  }
  function removeItem(e, id) {
    e.preventDefault();
    let temp = [...tasks];
    temp.splice(id, 1);
    setTasks(temp);
  }

  return (
    <>
      <div className="name">
        <center>
          {" "}
          <h1>TO - DO LIST</h1>
        </center>
      </div>
      <div>
        <form className="form" onSubmit={addItem}>
          <br />
          <center>
            {" "}
            <input
              type="text"
              className="input"
              placeholder="Add"
              value={value}
              onChange={(e) => setValues(e.target.value)}
            />
          </center>
          <br />
          <center>
            {" "}
            <button className="btn_submit">Submit</button>
          </center>
        </form>

        {tasks.map((item, id) => (
          <div className="task" key={id} id={id}>
            {item.text}
            <button className="btn_remove" onClick={(e) => removeItem(e, id)}>
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
