// eslint-disable-next-line react/prop-types
import { useState } from "react"
// eslint-disable-next-line react/prop-types
function Titulo({ cor }){
  const [texto, setTexto] = useState("Um título do estado inicial")
  const[inputText, setInputText] = useState("");

  function clicou(){
    setTexto(inputText);
  }

  return (
    <div>
      <h1 style={{color : cor}}>{texto} </h1>
      <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text"/>
      <button onClick={clicou}>Mudar</button>
    </div>

    )
}

export default Titulo