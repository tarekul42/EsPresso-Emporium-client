import { useLoaderData } from 'react-router-dom'
import './App.css'
import AboutProducts from './Components/Pages/Home/AboutProducts/AboutProducts'
import Banner from './Components/Pages/Home/Banner/Banner'
import OurProducts from './Components/Pages/Home/OurProducts/OurProducts'
import { useState } from 'react'

function App() {

  const loadedCoffees = useLoaderData();
  const [ coffees, setCoffees ] = useState(loadedCoffees);

  return (
    <>
    <Banner/>
    <AboutProducts/>
    <OurProducts key={coffees._id} coffees={coffees} setCoffees={setCoffees} />
    </>
  )
}

export default App
