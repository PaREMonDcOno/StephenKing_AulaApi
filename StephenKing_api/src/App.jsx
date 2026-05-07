import {Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/home.jsx'
import Rick from './Pages/rickandmory.jsx'

function App(){
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/rickandmortyapi">rick and mory</Link>
      </nav>

      <hr/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rickandmortyapi" element={<Rick/>}/>
      </Routes>
    </div>
  )
}

export default App