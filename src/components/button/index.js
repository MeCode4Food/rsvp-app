import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Helper
import { MultipleElements } from '../../helpers/prop-types'

// Style
import './style.scss'

export const BackButton = ({ label = 'Back To Home Page' }) => (
  <div className={`rsvp-back-button`}>
    <Link to={'/'}>{label}</Link>
  </div>
)

BackButton.propTypes = {
  label: PropTypes.string
}

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
