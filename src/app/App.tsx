import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Navbar} from "../componant/NavBar/navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Default} from "../componant/Default/default";
import {Login} from "../pages/Loging/loging";
import {Singin} from "../pages/Singin/Singin";

function App() {
  const [count, setCount] = useState(0)

  return (
 <BrowserRouter>
    <Routes>
        <Route path="/*" Component={Default}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/signin" Component={Singin}></Route>
    </Routes>
 </BrowserRouter>
  )
}

export default App
