import { useState } from 'react'
import Header from './Components/Header';
import Presentacion from './Components/Presentacion';
import SobreMi from './Components/SobreMi';
import Servicios from './Components/Servicios';
import Conocimientos from './Components/Conocimientos';
import Portafolio from './Components/Portafolio';
import Estudios from './Components/Estudios';
import Contacto from './Components/Contactarme';
import Foter from './Components/Foter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Presentacion/>
      <SobreMi/>
      <Servicios/>
      <Conocimientos/>
      <Portafolio/>
      <Estudios/>
      <Contacto/>
      <Foter/>
    </>
  )
}

export default App
