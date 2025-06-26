import './App.css'
import Contact from './pages/contact'
import Home from './pages/home'
import Menu from './pages/menu'
import Error from './pages/error'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
// o primeiro vai agrupar todas as rotas, ele q cuida da url
// pra trabalhar com mais de uma rotam tipo um ul com li, ele lista as rotas
// o route é um rota individual, é um atributo

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cardapio' element={<Menu/>}></Route>
      <Route path='/contato' element={<Contact/>}></Route>
      <Route path='*' element={<Error/>}/>

    </Routes>
    </BrowserRouter>
  //   <>
  //  <Home/>
  //  <Menu/>
  //  <Contact/>

  //   </>
  )
}

export default App
