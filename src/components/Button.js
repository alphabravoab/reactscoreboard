import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export default class Button extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className="button" onClick={ this.props.onClick }>{ this.props.operator }</button>
    )
  }
}
