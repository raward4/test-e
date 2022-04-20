import React from 'react'
import Day from '../../assets/Day.png'
import Night from '../../assets/Night.png'
import '../../styles/App.css'

const Landing = ({daytime}) => {
  return (
    <div className="landing" style={{ backgroundImage: `url(${daytime ? Day : Night})` }}>
      <h1 id="splash-logo"> E | S | P </h1>
      <h7>Newborn care made simple and safe</h7>
    </div>
  )
}

export default Landing