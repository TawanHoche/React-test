
import React, {useState} from 'react'
import './add.css'

const Add = ({test}) => {
  const [divName, setDivName] = useState(null)

  const handleDivNameChange = (e) => {
    setDivName(e.target.value)
  }

  return (
    <div className="add">
      <p>Voulez-vous ajouter une tâche à cette liste ?</p>
      <input type="text" id="add_name" placeholder='Nom de la tâche' value={divName} onChange={handleDivNameChange}/>
      {/* ajouter input pour description et date */}
      <button onClick={() => test(divName)}>Ajouter</button>
    </div>
  )
}

export default Add