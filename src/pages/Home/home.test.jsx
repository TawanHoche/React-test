import React, {useState, useEffect} from 'react'
import Main from './Main/Main.test'
import Aside from './Aside'

const Home = ()  => {
  const [tasks, setTasks] = useState([])

  const handleNewTask = (taskData) => {
    setTasks([...tasks, taskData]) // contient task.titre, task.description, task.id
    console.log(tasks)
  }
    return (
        <div className='home'>
            <Main tasks = {tasks}/>
            <Aside addTask={handleNewTask}/>
        </div>
    )
}

export default Home