import React from 'react'


const Task = (props) => {
    return (
        <div onClick={() => props.toggleTasks(props.item.id)} className={`${props.item.completed ? "completed" : ''}`}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Task;