import {useState} from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Utilisateur from './components/Utilisateur'
import React from 'react'


const App = () => {
 const [showComponent, setShowComponent] = useState('content');

 const handleButtonClick = (ComponentName) => {
  setShowComponent(ComponentName);
 };

  return(
    <div className='App'>
      <Header onButtonClick={handleButtonClick}/>
      {showComponent === 'content' && <Content/>}
      {showComponent === 'user' && <Utilisateur/>}
      <Footer/>
    </div>
  )
}

export default App;