import React, {useState} from 'react'
import Main from './Main'
import Aside from './Aside'

const Content = ()  => {
    const [addTask, setAddTask] = useState([])

    const handleNewDiv = (TaskData) => {
      setAddTask([...addTask, TaskData])
    }

    return (
        <div className='content'>
            <Main TaskData = {addTask}/>
            <Aside addTask={handleNewDiv}/>
        </div>
    )
}

export default Content