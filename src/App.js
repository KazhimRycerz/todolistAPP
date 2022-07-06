import rycerz_logo from './images/rycerz_logo.png'
import logo from './images/Download.png';
import cLogo from './images/c.png';
import './App.css';


function App () { 
// --------------------------Inhalt der App------------------------

    const clickHere =()=>{
        alert("WARNUNG!");
    }

return (
    <div className="App">
        <img src={rycerz_logo} alt="logo" className="logo"/>
        <h1 className="tweeter-blue">Tweeter</h1>
        <p className="text"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem maiores dolores recusandae necessitatibus reprehenderit, ipsam dolor non ratione, corrupti accusantium, laborum quae eaque temporibus rem corporis error vel illum. Veritatis!</p>
        <button onClick={clickHere} className="btn">Klick mich</button>
    </div>
) 

// --------------------------Ende Inhalt der App-----------------------
}


export default App

