import React, { useEffect, useState } from 'react'
import './Main.css'

const Main = ({TaskData, SelectTask, SelectedTaskData}) => {

const [useTest, setUseTest] = useState('false')
useEffect(() => {SelectedTaskData === true ? setUseTest('true') : setUseTest('false')}, [SelectedTaskData])


  const handleTaskSelection = (e) => {
    const TaskId = document.getElementById(e.currentTarget.id)
    const TaskList = document.getElementsByClassName('task')

    if (TaskId.classList.contains('task-selected')) {
      TaskId.classList.remove('task-selected')
      SelectTask(null)
      for (let i = 0; i < TaskList.length; i++) {
        TaskList[i].classList.remove('task-disabled')
      }
    } else {
      for (let i = 0; i < TaskList.length; i++) {
        TaskList[i].classList.remove('task-selected');
      }
      TaskId.classList.add('task-selected')
      SelectTask(TaskId);
      for (let i = 0; i < TaskList.length; i++) {
        TaskList[i] !== TaskId ? TaskList[i].classList.add('task-disabled') : TaskList[i].classList.remove('task-disabled');
        }
      }
    }

  return (
    <div className='Main'>
      <main>
        <div className="mes_listes">
        <div class="select">
          <select>
              <option>Choisissez votre liste</option>
              <option>Liste 1</option>
              <option>Liste 2</option>
              <option>Ajouter une liste</option>
          </select> {/*pas possible de mettre un bouton dans une option
          faut créer soi-meme un select */}
        </div>
        {/*petit bouton pour renommer ou supprimer la liste a coté de sa selection */}
        </div> {/*mettre une sorte de menu déroulant ou on peut choisir differentes listes*/}
        <div className="Tasks">
          {TaskData.map((task, index) => (
            <div key={index} className={'task'} id={'task' + (index+1)}onClick={handleTaskSelection}>
              <h1>{task.titre}</h1>
              <p>{task.description}</p>
              <p>{useTest} </p>
              {/* ajouter gestion dates */}
            </div>
          ))}

        </div>
      </main>
    </div>
  )
}

export default Main