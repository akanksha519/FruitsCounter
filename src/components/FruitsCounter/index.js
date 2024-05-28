// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}
  onIncrement = () => {
    this.setState(prevState => {
      return {banana: prevState.banana + 1}
    })
  }
  onIncrement = () => {
    this.setState(prevState => {
      return {mango: prevState.mango + 1}
    })
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="value">{mango}</span> mangoes{' '}
            <span className="value">{banana}</span> bananas
          </h1>
          <div className="img-containers">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="img"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              className="img"
              alt="banana"
            />
          </div>
          <div className="button-containers">
            <button onClick={this.onIncrement} className="button">
              Eat mango
            </button>
            <button onClick={this.onIncrement} className="button">
              Eat banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
