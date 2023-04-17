import React from "react";


function Carte(props) {
    return(
      <><div class="Carte"><h1 class="titre">{props.titre}</h1><img src={props.src} alt="m'en fous"/><p>{props.desc}</p></div></>
        );
  }

export default Carte;