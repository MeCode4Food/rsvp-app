import React from 'react'
import logo from './logo.svg'
import './App.scss'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>
          Shane is a  <Link to={`about`}>mate</Link>
        </div>
        <div>I cycle on road</div>
        <div>Shane is late</div>
        <div>I code in Node</div>
        <p>RSVP S3</p>
        <div className='acknowledgements'>Made by CK, Shane and <Link to={`lucie`}>Lucie</Link></div>
      </header>
    </div>
  )
}

export default App
