import React, { useRef } from 'react'
import './Main.css'

const Main = ({ TaskData, SelectTask }) => {
  const taskRefs = useRef([]);

  const handleTaskSelection = (e) => {
      const TaskId = e.currentTarget;

      if (TaskId.classList.contains('task-selected')) {
          TaskId.classList.remove('task-selected');
          SelectTask(null);
          taskRefs.current.forEach((task) => {
              task.classList.remove('task-disabled')
          });
      } else {
          taskRefs.current.forEach((task) => {
              task.classList.remove('task-selected')
          });
          TaskId.classList.add('task-selected');
          SelectTask(TaskId);
          taskRefs.current.forEach((task) => {
              task.classList.add('task-disabled')
          });
          TaskId.classList.remove('task-disabled');
          TaskId.classList.add('task-selected');
      }
  };

  const Task = ({ task, index, handleTaskSelection, taskRef }) => {
    return (
        <div
            className="task"
            id={`task${index + 1}`}
            onClick={handleTaskSelection}
            ref={(element) => (taskRef.current[index] = element)}>
            <h1>{task.titre}</h1>
            <p>{task.description}</p>
            <p>fait ?</p>
        </div>
    );
  };

  return (
    <div className="Main">
        <main>
            <div className="mes_listes">
                <div class="select">
                    <select>
                        <option>Choisissez votre liste</option>
                        <option>Liste 1</option>
                        <option>Liste 2</option>
                        <option>Ajouter une liste</option>
                    </select>{' '}
                    {/*pas possible de mettre un bouton dans une option
      faut créer soi-meme un select */}
                </div>
                {/*petit bouton pour renommer ou supprimer la liste a coté de sa selection */}
            </div>{' '}
            {/*mettre une sorte de menu déroulant ou on peut choisir differentes listes*/}
            <div className="Tasks">
              {TaskData.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    index={index}
                    handleTaskSelection={handleTaskSelection}
                    taskRef={taskRefs}
                />
              ))}
            </div>
        </main>
    </div>
);
};

export default Main
