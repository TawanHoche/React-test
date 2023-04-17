import React, { useState } from "react";

function Compteur() {
    const [compte, setCompte] = useState(0);

    return (
        <div>
            <p>Compte : {compte}</p>
            <button onClick={() => setCompte(compte + 1)}>+1</button>
            <button onClick={() => setCompte(0)}>reset</button>
        </div>
    );
}

export default Compteur;