import React from 'react'
import { NavLink } from 'react-router-dom'

import Wallet from "./Wallet"
import Clock from './Clock'
import Logo from '../../assets/logo.png'
import DadJoke from '../DadJokes/DadJokes'
import Example from '../DadJokes/Alert'

const Nav = (props) => {
  return (
    <><nav className="navigation-bar">
      <NavLink id="logo" to='/'><img src={Logo} alt="logo" /></NavLink>
      <NavLink to='/bank'>BANK</NavLink>
      <NavLink to='/market'>SUPER MARKET</NavLink>
      <NavLink to='/burgers'>Baby-Proofing Checklist</NavLink>
      <NavLink to='/postoffice'>My Babies</NavLink>
      <NavLink to='/resources'>Resources</NavLink>
      <NavLink to='DadJokes'>{DadJoke}</NavLink>
    <Wallet cash={props.cash} />
    <Clock daytime={props.daytime} setDaytime={props.setDaytime} />
    </nav></>
  )
}

export default Nav

