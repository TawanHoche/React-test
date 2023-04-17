import React from "react";
import './App.css'
import Bonjour from "./components/Bonjour"
import Carte from './components/Carte'
import blob from './blob.svg';
import Compteur from "./components/Etat";




const App = () => {
  return(
    <div>
    <Bonjour nom='Antoine'/>
    <Carte titre='test' src={blob} desc="Zboub"/>
    <Compteur/>
    </div>
  )
}

export default App;