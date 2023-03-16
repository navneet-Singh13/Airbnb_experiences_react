import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import ContentHeader from './components/ContentHeader'
import Card from './components/Card'

import data from './data'
function App() {
   const card_arr = data.map(el => { 
     
     return < Card key = {el.id} el ={el}/>
   })
    return (
    <div className="container">
      <Navbar/>
      <img src="\public\assets\grid.png" id ="grid" alt="" />
      <ContentHeader/>
      <div className="cardSection">
         {card_arr}
      </div>
    </div>
  )
}

export default App
