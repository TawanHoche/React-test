import React from 'react'
import './del.css'

const Del = ({delTask}) => {
  const [useDelTask, setUseDelTask] = React.useState(false)
  const handleDelTask = () => {
    setUseDelTask(true)
    test()

  }

  const test = () => {
    delTask(useDelTask)
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