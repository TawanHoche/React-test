import React from 'react'
import './add.css'

const Add = () => {
  return (
    <div className="add">
      <p>Voulez-vous ajouter une tâche à cette liste ?</p>
      <input type="text" id="add_name" placeholder='Nom de la tâche'/>
      <button>Ajouter</button>
    </div>
  )
}

export default Add