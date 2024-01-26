import React, {useState} from "react";
import "./App.css"
import Task from "./Task";

export default function App() {
    const [tasks, setTasks] = useState([])
    const [newTasks, setNewTasks] = useState("")

    const handleAddTasks = () => {
        if (newTasks !== "") {
            setTasks([...tasks, {text: newTasks, id: Math.random(), completed: false}])
            setNewTasks("")
        }
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((item) => item.id !== index))
    }

    return (

        <div className="body">
            <div className="container">
                <h1>ToDo list</h1>
                <div className="tasks">
                    <div>
                        <input
                            className={"newTaskInput"}
                            type="text"
                            value={newTasks}
                            onChange={(e) => setNewTasks(e.target.value)}
                            placeholder="Enter a new task"
                        />
                        <button onClick={handleAddTasks}>Add</button>
                    </div>
                    <ul>
                        {tasks.map((task) => (
                            <Task key={task.id} task={task} index={task.id} deleteTask={deleteTask}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}



