import React, {useState} from 'react'
import Main from './Main'
import Aside from './Aside'



const Home = ()  => {
    const [addTask, setAddTask] = useState([])


    const handleNewDiv = (TaskData) => {
      setAddTask([...addTask, TaskData])
    }

    const handleDone = (TaskData) => {
        setAddTask([...addTask, TaskData])
    }

    const [taskDiv, setTaskDiv] = useState()

    const handleTaskDiv =  (SelectTask) => {
        setTaskDiv(SelectTask)
        ChangeDivName()
    }

    const ChangeDivName = () => {
        console.log(taskDiv)
    }

    return (
        <div className='home'>
            <Main TaskData = {addTask} SelectTask={handleTaskDiv}/>
            <Aside addTask={handleNewDiv} taskDone={handleDone}/>
        </div>
    )
}

export default Home