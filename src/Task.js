import React, {useState} from 'react';

function Task({index, task, deleteTask}) {
    const [text, setText] = useState(task.text)
    const [isCompleted, setIsCompleted] = useState(task.completed)
    return (
        <li className="task">
            <div>
                <input type="checkbox" checked={isCompleted} onChange={()=>setIsCompleted(!isCompleted)}/>
                <input className={"taskInput"} style={isCompleted ? {textDecoration: "line-through"} : {}} value={text} type="text" onChange={(e)=>setText(e.target.value)}/>
            </div>
            <button onClick={()=>{deleteTask(index)}}>delete</button>
        </li>
    );
}

export default Task;