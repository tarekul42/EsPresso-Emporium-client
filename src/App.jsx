import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './Components/Shared/Header/Navigation/Navigation'

function App() {

  return (
    <>
    <Navigation/>
    <Outlet/>
    </>
  )
}

export default App
