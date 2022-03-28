import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link} from 'react-router-dom';
import Home from './page/home.js'
import Add from './page/add.js'
function App() {
  return (
    <div >
      <nav className="nav">
        <Link to={"/"} className="nav-link active" >Home</Link>
        <Link to={"/add"} className="nav-link active" >Add</Link>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<Add/>} />
        </Routes> 
      </div>
    </div>  
  );
}

export default App;