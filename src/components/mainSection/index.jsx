import illustrationMain from '../../assets/images/illustration-Js.png'
import Card from '../card'
import './style.css'

const MainSection = () =>{

    return(
        <main>
            <img src={illustrationMain} alt="Illutstration of React Js" title="Illutstration of React Js" />
            <h2>Aprenda com projetos reais</h2>
            <p>Nossa plataforma oferece cursos práticos, com foco e desenvolvimento do zero</p>

            <div className="card-grid">
                
            <Card title="JavaScript-Moderno"
            description="Apenas testando Props "
            />
            <Card title="React Js na prática"
            description="Aprendendo props na prática"
            />
            <Card title="React Js na prática"
            description="Aprendendo props na prática"
            />
            <Card title="React Js na prática"
            description="Aprendendo props na prática"
            />
            <Card title="React Js na prática"
            description="Aprendendo props na prática"
            />
            <Card title="React Js na prática"
            description="Aprendendo props na prática"
            />
            <Card title="React Js na prática"
            description="Aprendendo props na prática"
            />
            <Card title="React Js na prática"
            description="Aprendendo props na prática"
            />
            <Card title="React Js na prática"
            description="Aprendendo props na prática"
            />
              
            
            </div>
        </main>
       
    )
}

export default MainSection