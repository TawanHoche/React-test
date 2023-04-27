import React from 'react'
import './del.css'

const Del = ({delTask}) => {

  const handleDelTask = () => {
    delTask()
  }

  return (
    <div className="del">
    <p>Supprimer cette tâche</p>
    <div className="del_buttons">
      <button onClick={handleDelTask}>Supprimer</button>
    </div>
  </div>
  )
}

export default Del