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
  const [count, setCount] = useState(0)
  
  const [selectedItem, setSelectedItem] = useState('Registro Libros');

  return (
    <>
      
      <div className='h-screen grid place-items-center bg-[#FDFEFE] pt-0'>
          
          <Card color="transparent" shadow={true} className=' bg-[#EAFBFB] p-0  pb-7 pl-7 pr-7 transition-all duration-700 '>
            <NavList className='rounded-md' selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
            {selectedItem === 'Registro Libros' && (
              <Registro/>
            )}
            {selectedItem === 'Listado libros' && (
              <Listado />
            )}
              
        </Card>
          </div>
      
     </>
  )
}

export default App
