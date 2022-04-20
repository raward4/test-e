import React from 'react'
import { NavLink } from 'react-router-dom'
import HaImg from '../../assets/ha.png'
import Clock from './Clock'
import Logo from '../../assets/logo.png'

const Nav = (props) => {
  return (
    <><nav className="navigation-bar">
      <NavLink id="logo" to='/'><img src={Logo} alt="logo" /></NavLink>
      <NavLink to='/bank'>BANK</NavLink>
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <NavLink to='/burgers'>Baby-Proofing Checklist</NavLink>
      <NavLink to='/postoffice'>Babies Overview</NavLink>
      <NavLink to='/resources'>Resources</NavLink>
      <NavLink to='DadJokes'><img id="ha" src={HaImg} alt="Dad Jokes" /></NavLink>
    <Clock daytime={props.daytime} setDaytime={props.setDaytime} />
    </nav></>
  )
}

export default Nav

