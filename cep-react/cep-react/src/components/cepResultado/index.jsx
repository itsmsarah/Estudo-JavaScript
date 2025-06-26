import { useState } from 'react'
import './style.css'

const [logradouro,setLogradouro] = useState("")
const [bairro,setBairro] = useState("")
const [regiao,setRegiao] = useState("")
const [estado,setEstado] = useState("")



const CepResultado = ({logradrouro, bairro, regiao, estado}) =>{
    return(
        <div clasName="resultado" id="resultado">
        <p><strong>Logradouro:</strong>{logradouro} <span id="logradouro">{logradouro}</span></p>
        <p><strong>Bairro:</strong>{bairro} <span id="bairro">--</span></p>
        <p><strong>Região:</strong>{regiao} <span id="regiao">--</span></p>
        <p><strong>Estado:</strong>{estado} <span id="estado">--</span></p>
      </div>

    )
}

export default CepResultado