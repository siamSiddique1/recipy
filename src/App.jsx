import { useState } from 'react'
import './App.css'
import Banner from './Banner'
import Navbar from './Navbar'
import Ourrecipy from './Ourrecipy'
import RecipeCards from './RecipeCards'
import Sidebar from './Sidebar'

function App() {
  const[wntCook,setwntCook]=useState([])
  const handleWntcook=(data)=>{
    setwntCook([...wntCook,data])
    console.log(wntCook)
  }

  const[crntCook,setCrntCook]=useState([])
  const handleCrntCook =(id,data) =>{
    setwntCook(wntCook.filter(data=>data.recipe_id!==id))
    setCrntCook([...crntCook,data])
    console.log(crntCook)
  }

  return (
    <>
      <Navbar/>
      <Banner/>
      <Ourrecipy/>
      <div className='flex justify-between'>
      <RecipeCards handleWntcook={handleWntcook} className='w-2/3'/>
      <Sidebar wntCook={wntCook} handleCrntCook={handleCrntCook} crntCook={crntCook} className='w-1/3'/>
      </div>
    </>
  )
}

export default App
