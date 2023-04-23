import React from 'react'
import './Header.css'
import blob from '../../blob.svg'

const Header = ({onButtonClick}) => {
  return (
    <header className='header'>
        <nav className='nav'>
        <p onClick={() => onButtonClick('content')}>TO-DO list</p>
        {/* enlever l'élément utilisateur et remmetre la todolist */}
        <p onClick={() => onButtonClick('user')}>Changer d'utilisateur</p>
        {/* enlever la todolist et mettre le changement utilisateur */}
        </nav>
        <div className="logo_header">
            <img src={blob} alt="logo_header"/>
        </div>
    </header>
  )
}

export default Header