import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Navbar} from "../componant/NavBar/navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
     <Navbar/>
 </>
  )
}

export default App
