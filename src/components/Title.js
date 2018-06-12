import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Title extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }
  static defaultProps = {
    content: "change content"
  }

  render() {
    return <h1>{ this.props.content }</h1>
  }
}
