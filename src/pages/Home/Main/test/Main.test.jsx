import React, { useEffect, useState } from 'react'
import './Main.css'

const Main = ({TaskData, SelectTask, SelectedTaskData}) => {

  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleTaskSelection = (taskId) => {
    setSelectedTaskId(prevTaskId => prevTaskId === taskId ? null : taskId);
    SelectTask(prevTaskId => prevTaskId === taskId ? null : taskId);
  }

  useEffect(() => {
    SelectedTaskData === true ? setSelectedTaskId('true') : setSelectedTaskId('false')
  }, [SelectedTaskData])

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
          {TaskData.map((task) => (
            <div key={task.id} 
                 className={`task ${selectedTaskId === task.id ? 'task-selected' : selectedTaskId ? 'task-disabled' : ''}`} 
                 id={'task' + task.id} 
                 onClick={() => handleTaskSelection(task.id)}>
              <h1>{task.titre}</h1>
              <p>{task.description}</p>
              <p>{selectedTaskId === task.id ? 'true' : 'false'}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Main
