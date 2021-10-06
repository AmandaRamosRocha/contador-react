import { useState } from "react"


export default function Contador({name})  {
    const [number, setNumber] = useState(0)

    function mais(){
  setNumber(number + 1)
}

function menos(){
  setNumber(number - 1)
}

function zerar(){
  setNumber(0)
}
  return (
    <div className="App">
      <h1>{name}</h1>
        <p>{number}</p>
        <div>
  <button onClick={menos}>-</button>
  <button onClick={zerar}>zerar</button>
  <button onClick={mais}>+</button>
</div>
    </div>
  );
}