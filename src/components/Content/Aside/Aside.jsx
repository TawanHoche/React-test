import React from 'react'
import './Aside.css'
import Done from './components/done'
import Add from './components/add'
import Del from './components/del'
import Filter from './components/filter'

const Aside = ({addTask}) => {

  return (
    <div className='Aside'>
      <aside>
        <Done/>
        <Add addTask={addTask}/>
        <Del/>
        <Filter/>
      </aside>
    </div>
  )
}

export default Aside