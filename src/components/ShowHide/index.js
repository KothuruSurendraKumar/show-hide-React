// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstname: false,
    lastname: false,
  }

  showFirstname = () => {
    this.setState(preState => ({firstname: !preState.firstname}))
  }

  showLastname = () => {
    this.setState(preState1 => ({lastname: !preState1.lastname}))
  }

  render() {
    const {firstname, lastname} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container2">
          <div className="inner-container">
            <button
              className="button"
              type="button"
              onClick={this.showFirstname}
            >
              Show/Hide Firstname
            </button>
            {firstname && <p className="text">Joe</p>}
          </div>
          <div className="inner-container">
            <button
              className="button"
              type="button"
              onClick={this.showLastname}
            >
              Show/Hide Lastname
            </button>
            {lastname && <p className="text">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
