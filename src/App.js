import './App.css';
import { useState } from "react"

function App() {
  return (
    <div className="App">
      <h1>Contador</h1>
        <div> 
          
        </div>
        <div>
  <button onClick={menos}>-</button>
  <button onClick={zerar}>zerar</button>
  <button onClick={mais}>+</button>
</div>
    </div>
  );
}

var numero = 0
function mais(){
  numero++
  console.log(numero)
}

function menos(){
  numero--
  console.log(numero)
}

function zerar(){
  numero = 0
  console.log(numero)
}
export default App;
