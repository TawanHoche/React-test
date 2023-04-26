import React, {useState, useEffect} from 'react'
import Main from './Main'
import Aside from './Aside'

const Home = ()  => {
    const [useTaskData, setUseTaskData] = useState([])


    const handleNewTask = (TaskData) => {
        setUseTaskData([...useTaskData, TaskData])
    }

    const handleDone = (TaskData) => {
        console.log(TaskData)
    }


    const [useTaskId, setUseTaskId] = useState()

    const handleTaskId = (SelectTask) => {
        setUseTaskId(SelectTask)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {useTaskId && ChangeSelectedTaskClass()}, [useTaskId])

    const ChangeSelectedTaskClass = () => {
        useTaskId.classList.add('task-selected')
    }


    return (
        <div className='home'>
            <Main TaskData = {useTaskData} SelectTask={handleTaskId} />
            <Aside addTask={handleNewTask} taskDone={handleDone}/>
        </div>
    )
}

export default Home