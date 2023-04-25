import {useState} from 'react'
import './assets/global.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Utilisateur from './pages/Utilisateur'
import React from 'react'


const App = () => {
 const [showComponent, setShowComponent] = useState('home');

 const handleButtonClick = (ComponentName) => {
  setShowComponent(ComponentName);
 };

  return(
    <div className='App'>
      <Header onButtonClick={handleButtonClick}/>
      {showComponent === 'home' && <Home/>}
      {showComponent === 'user' && <Utilisateur/>}
      <Footer/>
    </div>
  )
}

export default App;