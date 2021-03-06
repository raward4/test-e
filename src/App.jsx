import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'

// Components
import Nav from './Components/Nav/Nav'
import Bank from './Components/Bank/Bank'
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import PostOffice from './Components/PostOffice/PostOffice'
import SuperMarket from './Components/SuperMarket/SuperMarket'
import Resources from './Components/Resources/Resources'
import DadJokes from './Components/DadJokes/DadJokes'

const App = () => {
  const [cash, setCash] = useState(100)
  const [daytime, setDaytime] = useState(true)

  const handleExchange = (amt) => {
    if (cash - amt < 0) return false
    setCash((cash - amt).toFixed(2))
    return true
  }

  return (
    <>
    <Nav cash={cash} setCash={setCash} daytime={daytime} setDaytime={setDaytime} />
      <div id="mostofpage">
      <Routes>
        <Route path="/"
          element={<Landing daytime={daytime} />} />
        <Route path="/market"
          element={<SuperMarket handleExchange={handleExchange} />} />
        <Route path="/burgers"
          element={<BurgerShop />} />
        <Route path="/bank"
          element={<Bank handleExchange={handleExchange} />} />
        <Route path="/postoffice/*"
          element={<PostOffice handleExchange={handleExchange} />} />
        <Route path="/resources"
          element={<Resources />} />
         <Route path="/dadjokes"
          element={<DadJokes />} />
      </Routes>
    </div>
    <div id="footer"></div>
    </>
  )
}

export default App