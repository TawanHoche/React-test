import React from 'react'
import './done.css'

const Done = () => {
  return (
    <div className="done">
    <p>Cette tâche est-elle finie ?</p>
    <div className="done_buttons">
      <button>Oui</button>
      <button>Non</button>
    </div>
  </div>
  )
}

export default Done