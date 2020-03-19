import React from 'react'
import { withRouter } from 'react-router-dom'
import { rootPath } from '../../helpers/history'

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

export default withRouter(ScrollToTop)
