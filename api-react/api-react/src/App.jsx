import {useState } from "react"


const App = () =>{

  // const [contador, setContador] = useState(0)
  //td vez q a gente quiser consumir a gente chama contador, só serve para mostrar na tela, q a gente faz a busca
  // quando quiser mudar, alterar o valor, é o setContador
  //useState atualiza o valor e a página automaticamente
  // a ideia do useState, é o primeiro q consome ( get) e o segundo que altera(set)

  // let contador = 0

  // const incrementar = () =>{
  //   setContador(contador+1)
    //não é contador ++, pois seria contador = contador + 1 ( a gente ta atribuindo um valor pra variavel contador "o que nn pode fazer, pois ele é somente pra visualizar")
    // console.log(contador) // vai mostrar vlrs atualizados

    const [nome,setNome] = useState("Sarah")
    //sarah vai ser o nome padrao pq ta dentro do paranreses
    const[especie,setEspecie] = useState("")
    //primeiro pra consumir, segundo pra fazer alteração
  
   const buscar = () =>{
    fetch("https://rickandmortyapi.com/api/character")
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data.results[0].name)
      setNome(data.results[0].name)
      setEspecie(data.results[0].species)
      
    })
    .catch((err)=>{
      console.log(err)
    })
    }

   
  return(
    <div>
      <p>Nome:{nome}</p>
      <p>Espécie:{especie}</p>
      <button onClick={buscar}>Buscar</button>
    </div>
  )
}

export default App