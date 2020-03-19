import PropTypes from 'prop-types'

export const SingleElement = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.element,
  PropTypes.bool
])

export const MultipleElements = PropTypes.oneOfType([
  SingleElement,
  PropTypes.arrayOf(SingleElement)
])
