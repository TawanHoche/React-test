import React from 'react'
import './del.css'

const Del = () => {
  return (
    <div className="del">
    <p>Voulez-vous supprimer cette tâche</p>
    <div className="del_buttons">
      <button>Oui</button>
      <button>Non</button>
    </div>
  </div>
  )
}

export default Del