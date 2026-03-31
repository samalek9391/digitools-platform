
import { Suspense } from 'react'
import './App.css'
import Banner from './assets/Components/Banner/Banner'
import CardsContainer from './assets/Components/Main/CardsContainer'
import Rating from './assets/Components/Main/Rating'
import ToolsDescription from './assets/Components/Main/ToolsDescription'
import NavBar from './assets/Components/NavBar/NavBar'


const getData = async () => {
  const res = await fetch("/data.json")
  return res.json();
}


function App() {

  const dataPromise = getData()
  return (
    <>
      
        <NavBar/>
        <Banner/>
        <Rating/>
        <ToolsDescription/>
        <Suspense fallback ={<span className="loading loading-spinner loading-xl"></span>}>
            <CardsContainer dataPromise={dataPromise}/>
        </Suspense>
        
          
    </>
  )
}

export default App
