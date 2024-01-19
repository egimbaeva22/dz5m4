import React, { useState } from "react";

export default function TodoList() {
    const [tasks, setTasks] = useState([])
    const [newTasks, setNewTasks] = useState("")

    const handleAddTasks = () => {
        if (newTasks !== ""){
            setTasks([...tasks, newTasks])
            setNewTasks("")
        }
    }
    return (
        <div>
            <h1>ToDo list</h1>
            <div>
                <input
                    type="text"
                    value={newTasks}
                    onChange={(e) => setNewTasks(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button onClick={handleAddTasks}>Add</button>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
 }



