import React, { useEffect, useState } from 'react'
import './Main.css'

const Main = ({tasks}) => {


  const handleSelectTask = (selectedTask) => {
    if(tasks.map(task => 
      task.id === selectedTask.id)) {
        selectedTask.isSelected ? selectedTask.isSelected = false : selectedTask.isSelected = true
        console.log(selectedTask)
      }
  }



  return (
    <div className='Main'>
      <main>
        <div className="mes_listes">
        <div className="select">
          <select>
              <option>Choisissez votre liste</option>
              <option>Liste 1</option>
              <option>Liste 2</option>
              <option>Ajouter une liste</option>
          </select>
        </div>
        </div>
        <div className="Tasks">
          {tasks.map((task) => (
            <div key={task.id} id={'task ' + task.id}
            className={`task ${task.isSelected ? 'task-selected' : '' }`}
            onClick={() => handleSelectTask(task)}>
              <h1>{task.titre}</h1>
              <p>{task.description}</p>
              <p>fait ?</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Main
