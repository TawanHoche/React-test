import React, {useState} from 'react'
import Main from './Main'
import Aside from './Aside'

const Content = ()  => {
    const [addDiv, setAddDiv] = useState()

    const handleButtonClick = (divName) => {
      setAddDiv(divName)
    }

    return (
        <div className='content'>
            <Main div_title={addDiv}/>
            <Aside test={handleButtonClick}/>
        </div>
    )
}

export default Content