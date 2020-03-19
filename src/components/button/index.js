import React from 'react'

// Style
import './style.scss'

const Button = ({ children, onClick }) => {
  return (
    <button className={`rsvp-button`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
