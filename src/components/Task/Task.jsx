import React, {useState} from 'react'
import './Task.css'

const Task = ({ task, index, handleTaskSelection, taskRef }) => {
    return (
        <div
            className="task"
            id={`task${index + 1}`}
            onClick={handleTaskSelection}
            ref={(element) => (taskRef.current[index] = element)}>
            <h1>{task.titre}</h1>
            <p>{task.description}</p>
            <p>fait ?</p>
        </div>
    );
  };

export default Task