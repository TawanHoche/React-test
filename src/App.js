import React from "react";
import './App.css'
import Bonjour from "./components/Bonjour"
import Carte from './components/Carte'
import blob from './blob.svg';
import Compteur from "./components/Etat";
import {Chrono, Horloge} from './components/Cycle';




const App = () => {
  return(
    <div>
    <Bonjour nom='Antoine'/>
    <Carte titre='test' src={blob} desc="teeeeeeest"/>
    <Compteur/>
    <Horloge/>
    <Chrono/>
    </div>
  )
}

export default App;