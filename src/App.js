import react, { useRef, useState } from 'react';
import './App.css';

function App() {


  //To add a task in a todo list and set the input field back to null
  const addTask = () => {
      setData([...data, task])
      clearData.current.value = ""
      setTask("")
  }


  //To delete a task
  const deleteTask = (val) => {

    setData(data.filter((task) => {
        return task !== val
      })
    )


  }
  //States
  const [data, setData] = useState([])
  const [task, setTask] = useState("")
  const clearData = useRef(null)

  return (
    <div className="app">
    <h1>To-Do App</h1>
    <div>
        <input ref={clearData} type="text" placeholder="Add task" 
        onChange={event => setTask(event.target.value)}
        onKeyDown={(event) => {if(event.keyCode === 13)  addTask() } } />
        <button className="add_task_btn"
        onClick={addTask}  >Add task</button>
    </div>
    <br />
    <hr></hr>

          <div className="todos">
            <ul>
              {  
                data.map((value,key) => {
                return (
                <div className="deleteDiv">
               
                <li key = {key}>{value}</li>
                <div>
                <button className="deleteBtn" onClick={() => deleteTask(value)}>Delete Task</button>
                </div>
                </div>)}) 
              }

            </ul>
          </div>


    </div>
  )
}

export default App;
