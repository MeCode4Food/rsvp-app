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
          My Name is <Link to={`about`}>Chee Khuin</Link>
        </div>
        <div>Sometimes CK</div>
        <div>I have a mane</div>
        <div>I eat balloon</div>
        <p>RSVP S3</p>
        <div className='acknowledgements'>Made by CK, Shane and Lucie</div>
      </header>
    </div>
  )
}

export default App
