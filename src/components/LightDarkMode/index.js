// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {value: true}

  change = () => {
    this.setState(prevState => ({value: !prevState.value}))
  }

  changing = () => {
    const {value} = this.state
    return value ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const text = this.changing()

    let classValue
    let heading
    if (text === 'Light Mode') {
      classValue = 'background1'
      heading = 'head1'
    } else {
      classValue = 'background2'
      heading = 'head2'
    }

    return (
      <div className="main-background">
        <div className={classValue}>
          <h1 className={heading}>Click to Change Mode</h1>
          <button onClick={this.change} className="btn">
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
