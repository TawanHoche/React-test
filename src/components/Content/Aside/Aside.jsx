import React from 'react'
import './Aside.css'

const Aside = () => {
  return (
    <div className='Aside'>
      <aside>
        <div className="utilities">
          <div className="done">
            Cette tâche est-elle finie ?
          </div>
          <div className="add">
            Voulez-vous ajouter une tâche à cette liste ?
            Nom :
          </div>
          <div className="del">
            Voulez-vous supprimer cette tâche
          </div>
          <div className="filter"></div>
        </div>
      </aside>
    </div>
  )
}

export default Aside