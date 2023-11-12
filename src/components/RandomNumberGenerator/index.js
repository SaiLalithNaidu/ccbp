import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  sate = {
    randomNumber: 0,
  }

  randomFunction = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="container_div">
        <div className="main_container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.randomFunction}>
            Generate
          </button>
          <span>{randomNumber}</span>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
