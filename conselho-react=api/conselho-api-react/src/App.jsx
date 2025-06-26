
import { useState } from 'react'
import './App.css'

function App() {
  const [conselho, setConselho] = useState("")

 const buscar = () =>{
  fetch("https://api.adviceslip.com/advice")
  .then((res)=> res.json())
  .then((data)=>{
    console.log(data.slip.advice)
    setConselho(data.slip.advice)

  })
  .catch((err)=>{
    console.log(err)
  })
 }

  return (
    <>
    <main class="glass-card">
    <h1>💡 Conselho do Dia</h1>
    <p >Clique no botão abaixo para receber um conselho aleatório!</p>
    <p>Conselho: {conselho}</p>
    <button onClick={buscar}>Gerar Conselho</button>
  </main>
    </>
  )
}

export default App
