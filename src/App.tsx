import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Pages/Home';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Diabeticos } from './Pages/Diabeticos';
import { Celiacos } from './Pages/Celiacos';
import { Entradas } from './Pages/Diabeticos/Entradas';
import { Almuerzos } from './Pages/Diabeticos/Almuerzos';
import AtunTomate from './Pages/Diabeticos/Entradas/AtunTomate';
import BizcochoChocolate from './Pages/Diabeticos/Entradas/BizcochoChocolate';
import PolloHorno from './Pages/Diabeticos/Entradas/PolloHorno';
import SalpiconPulpo from './Pages/Diabeticos/Entradas/SalpiconPulpo';
import SopaJuliana from './Pages/Diabeticos/Entradas/SopaJuliana';

function App() {
  const [count, setCount] = useState(0)

  return (

    
       
      <BrowserRouter>
      <div className="App" >
      <Navbar bg="primary" variant="dark"  fixed='top'>
        <Container >
          <Navbar.Brand href="#home">GRUPO-FEARLESS</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Diabeticos' element={<Diabeticos/>}/>
     <Route path='/Diabeticos/Entradas' element={<Entradas/>}/>
     <Route path='/Diabeticos/Entradas/AtunTomate' element={<AtunTomate/>}/>
     <Route path='/Diabeticos/Entradas/Bizcocho' element={<BizcochoChocolate/>}/>
     <Route path='/Diabeticos/Entradas/PolloHorno' element={<PolloHorno/>}/>
     <Route path='/Diabeticos/Entradas/SalpiconPulpo' element={<SalpiconPulpo/>}/>
     <Route path='/Diabeticos/Entradas/SopaJuliana' element={<SopaJuliana/>}/>
     


     <Route path='/Diabeticos/Almuerzos' element={<Almuerzos/>}/>

     <Route path='/Celiacos' element={<Celiacos/>}/>

     </Routes>

     
     </div>
     </BrowserRouter>
    
  )
}

export default App
