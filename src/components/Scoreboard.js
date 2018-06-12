import React, { PureComponent } from 'react'
import Player from './Player'
import AddPlayer from './AddPlayer'
import './Scoreboard.css'



export default class Scoreboard extends PureComponent {
  state = {
    players: []
  }
  addPlayer = (name) => {
    const player = {
      id: Math.round(Math.random()*100000),
      name,
      score: 0
    }
    this.setState({
      players: this.state.players.concat(player)
    })
  }
  removePlayer = (id) => {
    const updatedPlayers = this.state.players.filter( player => (id!==player.id ))


    this.setState({ players: updatedPlayers })
    }

  updatePlayerScore = (id, score) => {
    const updatedPlayers = this.state.players.map(
      player => {
        if (player.id === id) {
          return {
            ...player,
            score
          }
        }
        else {
          return player
        }
      }
    )
    this.setState({ players: updatedPlayers })
  }

  renderPlayer = (player) => {
    return (
      <Player
        id={player.id}
        name={player.name}
        score={player.score}
        key={player.id}
        updatePlayerScore={this.updatePlayerScore}
        removePlayer ={this.removePlayer}
      />
    )
  }

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {
            this.state.players
              .sort((a, b) => b.score - a.score)
              .map(this.renderPlayer)
          }
        </ul>
        <AddPlayer addPlayer={this.addPlayer} />
      </div>
    )
  }
}
