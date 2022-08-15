import './App.css';
import React, {useState} from 'react'

function App() {

  const [todos, setToDo] = useState([
    {name: "do homework", isPriority: true},
    {name: "review classnotes", isPriority: true},
    {name: "walk fish", isPriority: false}
  ])

  const[newToDo, setNewToDo] = useState("");

  const todoNodes = todos.map((todo, index) =>{
    return <li key={index}>
      <tr>{todo.name}</tr>
      Priority level: {todo.isPriority ?<span className="priority">HIGH!</span> : <span>low</span>}

      </li>
  })

  
  const handleItemInput = (event) => {
    setNewToDo(event.target.value);
  }  

  const saveNewToDo = (event) => {
    event.preventDefault();
    const copyItems = [...todos]
    copyItems.push({name: newToDo, isPriority: false})
    setToDo(copyItems);
    setNewToDo("")
  }

const setPriority = (index) => {
  const copyItems = [...todos]
  copyItems[index].isPriority = true;
  setToDo(copyItems)
}

  
  return (
    <div className="App">
      <h1>To Do List:</h1>
      <table class="table">
          <tr><ul><li>{todoNodes}</li></ul></tr>
      </table>

      <form onSubmit={saveNewToDo}>
        <label htmlFor="new-to-do">Add a new thing you want to do</label>
        <input type="text" value={newToDo} onChange={handleItemInput}></input>
        <input type="submit" value="Save New To Do"></input>
      </form>

      <p>
      Priority level:
      <input type="radio" id="high" name="priority" value="high"></input>
      <label for="high">HIGH!</label>
      <input type="radio" id="low" name="priority" value="low"></input>
      <label for="low">low</label>
      </p>
    </div>
    );

}

export default App;
