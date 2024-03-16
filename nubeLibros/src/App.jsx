import { useState } from 'react'
import {
  Card,
  Input,
  Checkbox,
  Typography, 
  Select,
  Option, 
} from "@material-tailwind/react";
import NavList from './components/NavbarSimple.jsx' 
import Listado from './components/Listado.jsx';
import Registro from './components/Registro.jsx';

import './App.css'

function App() {
  
  const [selectedItem, setSelectedItem] = useState('Registro Libros'); //Estado para selecionar la pagina
  const {open, setOpen} = useState(false);

  const [datosEnviados, setDatosEnviados] = useState(null); // Estado para almacenar los datos

  const handleDatosEnviados = (data) => {
    setDatosEnviados(data);
  };


  return (
    <>
      
      <div className='h-screen grid place-items-center bg-[#FDFEFE] pt-0'>
      
          
          <Card color="transparent" shadow={true} className=' bg-[#EAFBFB] p-0  pb-7 pl-7 pr-7 transition-all duration-700 '>
            <NavList className='rounded-md' selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
            {selectedItem === 'Registro Libros' && (
              <Registro onDatosEnviados={handleDatosEnviados}/>
            )}
            {selectedItem === 'Listado libros' && (
              <Listado datosEnviados={datosEnviados}/>
            )}
              
        </Card>
          </div>
      
     </>
  )
}

export default App
