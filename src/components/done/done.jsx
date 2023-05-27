import {React, useState} from 'react'
import './done.css'

const Done = ({taskDone}) => {
  const [taskValue, setTaskValue] = useState(false)

  const handleTaskTrue = () => {
    setTaskValue(true)
    taskDone(taskValue)
  }

  const handleTaskFalse = () => {
    setTaskValue(false)
    taskDone(taskValue)
  }


  return (
    <div className="done">
    <p>Cette tâche est-elle finie ?</p>
    <div className="done_buttons">
      <button onClick={handleTaskTrue} disabled>Oui</button>
      <button onClick={handleTaskFalse} disabled>Non</button>
    </div>
  </div>
  )
}

export default Done