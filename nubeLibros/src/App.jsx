import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Registro from './components/Registro.jsx';
import { Button } from "@material-tailwind/react";
import ButtonV from './components/ButtonV.jsx';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Registro/>
      
     </>
  )
}

export default App
