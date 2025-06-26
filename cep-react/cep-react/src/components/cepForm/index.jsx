import './style.css'



const buscar =() =>{
  fetch("https://viacep.com.br/ws/01001000/json/")
  .then((res)=> res.json())
  .then((data)=>{
    console.log(data)

  })
  .catch((err)=>{
    console.log((err))
  })
}

const CepForm = () =>{
    return(
        <form id="cep-form">
      <input  type="text" id="input_cep" placeholder="Digite o CEP" maxlength="9" required/>
      <button type="submit" id="btn-cep">Buscar {buscar}</button>
    </form>

    )
}
export default CepForm