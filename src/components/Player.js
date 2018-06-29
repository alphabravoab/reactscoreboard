import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import './Player.css'

export default class Player extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired
  }
  static defaultProps = {
    name: "Name me",
    score: 0
  }

  addIt = () => {
    const {id, score} = this.props
    this.props.updatePlayerScore(id, score + 1)
  }

  minIt = () => {
    const {id, score} = this.props
    this.props.updatePlayerScore(id, score - 1)
  }
  deleteIt = () => {
    const id = this.props.id
    this.props.removePlayer(id)
  }
  render() {
    return (<li className="player">
      <Button operator= "*" onClick={this.deleteIt} />
      <p className="name">{this.props.name}</p>
      <Button operator= "-" onClick={this.minIt} />
      <p className="score">{this.props.score}</p>
      <Button operator= "+" onClick={this.addIt} />
    </li>)
  }
}
