import React from 'react'
import './Header.css'
import blob from '../../assets/blob.svg'

const Header = ({onButtonClick}) => {
  return (
    <header className='header'>
        <nav className='nav'>
        <p onClick={() => onButtonClick('home')}>TO-DO list</p>
        <p onClick={() => onButtonClick('user')}>Changer d'utilisateur</p>
        </nav>
        <div className="logo_header">
            <img src={blob} alt="logo_header"/>
        </div>
    </header>
  )
}

export default Header