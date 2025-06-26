import { Link } from 'react-router-dom'
import './style.css'
import gifPizza from '../../assets/pizzas/gatinho-giz.jpg'



const PageError = () =>{
    return(
        <div className='fundopizza'>
            <img src={gifPizza}/>
        <h1> <span>Vish</span>,parece que sua pizza ainda não ta pronta</h1>
       <Link to="/cardapio"><button>Ir para o Cardápio</button></Link> 
        </div>

    )
}

export default PageError