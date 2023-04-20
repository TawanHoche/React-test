import React, {useState, useEffect, useRef} from 'react';

export function Horloge() {
    const [Heure, setHeure] = useState(new Date());

    useEffect(()=> {
        const TimerID = setInterval(() => {
            setHeure(new Date());
        }, 1000)
    return () => {
        clearInterval(TimerID);
    };
}, []);

    return <h2>Il est {Heure.toLocaleTimeString()}.</h2>;
}

export 
function Chrono() {
    const [Temps, setTemps] = useState(0)
    const [isActive, setisActive] = useState(false)
    const intervalRef = useRef(null) // IntervalRef.current = null

    useEffect(() => {
      if (isActive) {
        intervalRef.current =setInterval(() => {
            setTemps((prevTemps) => prevTemps + 1)
        }, 1000);
        console.log(intervalRef.current)
        } else { 
         clearInterval(intervalRef.current);
         console.log(intervalRef.current);
    }
    
    
        return () => clearInterval(intervalRef.current);
    }, [isActive])
    

    return <>
    <p>
        {Temps}
    </p>
    <button onClick={() => setisActive(true)}>start</button>
    <button onClick={() => setisActive(false)}>stop</button>
    <button onClick={() => setTemps(0)}>reset</button>
    </>
}