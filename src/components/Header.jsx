import {React, useState, useRef, useEffect} from 'react'
import './Header.css'
import Utilisateur from './Utilisateur'
import blob from '../blob.svg'

const Header = () => {
    const [Page, setPage] = useState('false')
  return (
    <div className='header'>
        <nav className='nav'>
        <p onClick={() => { Page && setPage(false); console.log(Page) }}>TO-DO list</p>
        {/* enlever l'élément utilisateur et remmetre la todolist */}
        <p onClick={() => { Page || setPage(true); console.log(Page) }}>Changer d'utilisateur</p>
        {/* enlever la todolist et mettre le changement utilisateur */}
        </nav>
        <div className="logo_header">
            <img src={blob} alt="logo_header"/>
        </div>
    </div>
  )
}

export default Header