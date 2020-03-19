import React from 'react'
import PropTypes from 'prop-types'

// Helper
import { MultipleElements } from '../../helpers/prop-types'

// Style
import './style.scss'

const Button = ({ children, onClick }) => {
  return (
    <button className={`rsvp-button`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: MultipleElements,
  onClick: PropTypes.func
}

export default Button
