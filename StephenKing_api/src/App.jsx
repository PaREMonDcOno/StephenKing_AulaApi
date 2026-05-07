import {Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/home'
import rick from './Pages/rickandmory'

function App(){
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/livros">Livros</Link>
      </nav>

      <hr/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/livros" element={<rick/>}/>
      </Routes>
    </div>
  )
}

export default App