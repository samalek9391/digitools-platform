
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './assets/Components/Banner/Banner'
import Rating from './assets/Components/Main/Rating'
import NavBar from './assets/Components/NavBar/NavBar'
import ToogleTab from './assets/Components/Main/ToogleTab'
import ProductContainer from './assets/Components/Main/ProductContainer'
import CartContainer from './assets/Components/Main/CartContainer'
import ToolsDes from './assets/Components/Main/ToolsDes'


const getData = async () => {
  const res = await fetch("/data.json")
  return res.json();
}


function App() {

  const dataPromise = getData()
  
  const [activeTab, setActiveTab] = useState("Product")

  const [carts, setCarts] = useState([])

  
  
  return (
    <>
      
        <NavBar/>
        <Banner/>
        <Rating/>
        <ToolsDes/>
        <ToogleTab activeTab = {activeTab} setActiveTab ={setActiveTab}/>
        <Suspense fallback ={<span className="loading loading-spinner loading-xl"></span>}>
            {activeTab === "Product" && <ProductContainer dataPromise={dataPromise} carts = {carts} setCarts = {setCarts}/>}
            {activeTab === "Cart" && <CartContainer carts = {carts}/>}
        </Suspense>
        
        
          
    </>
  )
}

export default App
