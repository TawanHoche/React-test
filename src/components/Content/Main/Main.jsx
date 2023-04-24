import React from 'react'
import './Main.css'

const Main = ({TaskData}) => {
  
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
        <div className="Taches">
          {console.log(TaskData)}
          {TaskData.map((task, index) => (
            <div key={index} className='tache'>
              <h1>{task.titre}</h1>
              <p>{task.description}</p>
              <p>fait ?</p>
              {/* ajouter gestion dates */}
            </div>
          ))}

        </div>
      </main>
    </div>
  )
}

export default Main