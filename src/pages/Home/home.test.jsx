import React, {useState, useEffect} from 'react'
import Main from './components/Main/Main.test'
import Aside from './components/Aside'

const Home = ()  => {
    // Récupération des données dans la nouvelle Task
    const [useTasks, setUseTasks] = useState(JSON.parse(localStorage.getItem('tasks')) ?? [])


    const handleNewTask = (TaskData) => {
        setUseTasks([...useTasks, TaskData])
        console.log(useTasks)
    }

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(useTasks));
    }, [useTasks])

    // Récupération de la Task séléctionnée
    const [useTaskId, setUseTaskId] = useState(null)

    const handleTaskId = (SelectTask) => {
        setUseTaskId(SelectTask)
    }


    // Changement de classe de la Task selectionnée  |
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    useEffect(() => {useTaskId && ChangeSelectedTaskClass()}, [useTaskId])

    const ChangeSelectedTaskClass = () => {
        useTaskId.classList.add('task-selected')
    }


    // Supprimer la Task
    const handleDeleteTask = () => {
        const updatedTasks = useTasks.filter(task => task !== useTaskId);
        setUseTasks(updatedTasks);
        setUseTaskId(null);
        console.log(updatedTasks)
    }
// probleme de latence entre moment ou on click et le changement d'état de useDelTask
// probleme quand on supprime la task : l'id n'est pas actualisé (si on suppirme )


    return (
        <div className='home'>
            <Main TaskData = {useTasks} SelectTask={handleTaskId}/>
            <Aside addTask={handleNewTask} delTask={handleDeleteTask}/>
        </div>
    )
}

export default Home