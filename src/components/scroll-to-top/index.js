import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

// Helpers
import { rootPath } from '../../helpers/history'
import { MultipleElements } from '../../helpers/prop-types'

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (rootPath(this.props.location) !== rootPath(prevProps.location)) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}
ScrollToTop.propTypes = {
  location: PropTypes.object,
  children: MultipleElements
}

export default withRouter(ScrollToTop)
