
import React, {useState} from 'react'
import './add.css'

const Add = ({addTask}) => {

  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [id, setId] = useState(1)
  const [isSelected, setIsSelected] = useState(false)

  const handleTaskName = (e) => {
    setTitre(e.target.value)
  }

  const handleTaskDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleAddDiv = () => {

    addTask({titre, description, id, isSelected})
    setTitre('')
    setDescription('')
    setId(id + 1)
  
  }

  return (
    <div className="add">
      <p>Voulez-vous ajouter une tâche à cette liste ?</p>
      <input type="text" id="add_name" placeholder='Nom de la tâche' value={titre} onChange={handleTaskName}/>
      <input type="text" id="add_desc" placeholder='Description de la tâche' value={description} onChange={handleTaskDescription}/>
      <button onClick={handleAddDiv}>Ajouter</button>
    </div>
  )
}

export default Add