import React, {useState, useEffect} from 'react'
import Main from './Main'
import Aside from './Aside'

const Home = ()  => {
    // Récupération des données dans la nouvelle Task
    const [useTaskData, setUseTaskData] = useState([])


    const handleNewTask = (TaskData) => {
        setUseTaskData([...useTaskData, TaskData])
    }

    // Récupération de la Task séléctionnée
    const [useTaskId, setUseTaskId] = useState(null)

    const handleTaskId = (SelectTask) => {
        setUseTaskId(SelectTask)
    }

        //Changement de classe de la Task selectionnée  | eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {useTaskId && ChangeSelectedTaskClass()}, [useTaskId])

    const ChangeSelectedTaskClass = () => {
        useTaskId.classList.add('task-selected')
    }


    // Supprimer la Task
    const [useDelTask, setUseDelTask] = useState(false)

    const handleDeleteTask = (delTask) => {
        console.log(delTask)
        setUseDelTask(delTask)
    }

    useEffect(() => {useDelTask === true && DeleteTask()}, [useDelTask])

    const DeleteTask = () => {
        
        useTaskId.remove()
    }
// probleme de latence entre moment ou on click et le changement d'état de useDelTask
// probleme quand on supprime la task : l'id n'est pas actualisé (si on suppirme )


    // Récupération de l'état de la Task
    const [useTaskDone, setUseTaskDone] = useState(false)

    useEffect(() => {useTaskId !== null && handleDone()}, [useTaskId])

    const handleDone = (TaskDone) => {
        setUseTaskDone(TaskDone)
    }
 // fonctionne pas




    return (
        <div className='home'>
            <Main TaskData = {useTaskData} SelectTask={handleTaskId} SelectedTaskData = {useTaskDone}/>
            <Aside addTask={handleNewTask} delTask={handleDeleteTask} taskDone={handleDone}/>
        </div>
    )
}

export default Home