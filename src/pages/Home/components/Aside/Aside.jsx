import React from 'react'
import './Aside.css'
import Done from '../../../../components/done'
import Add from '../../../../components/add'
import Del from '../../../../components/del'
import Filter from '../../../../components/filter'

const Aside = ({addTask, taskDone, delTask}) => {

  return (
    <div className='Aside'>
      <aside>
        <Done taskDone={taskDone}/>
        <Add addTask={addTask}/>
        <Del delTask={delTask}/>
        <Filter/>
      </aside>
    </div>
  )
}

export default Aside