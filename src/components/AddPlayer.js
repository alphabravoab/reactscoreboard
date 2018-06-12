import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './AddPlayer.css'


  export default class AddPlayer extends PureComponent {
    static propTypes = {
      addPlayer: PropTypes.func.isRequired
    }
  state = {name:''}

  handleSubmit = (event) => {
      event.preventDefault()
      if (this.state.name.length>2){
        this.props.addPlayer(this.state.name)
      }else {alert("too short")}
      this.setState((name) => ({ name: ""}));
    }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}
