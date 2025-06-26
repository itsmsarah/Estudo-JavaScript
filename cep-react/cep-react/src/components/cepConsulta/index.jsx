import CepForm from '../cepForm'
import CepResultado from '../cepResultado'
import './style.css'

const CepConsulta = () =>{
    return (
        <div className="container">
             <h1>🔍 Consulta de CEP</h1>
             <CepForm/>
             <CepResultado/>
        </div>
    )
}

export default CepConsulta