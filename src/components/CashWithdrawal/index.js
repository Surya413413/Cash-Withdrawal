// Write your code here
import {Component} from 'react'

import DenominationsUser from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onchangeAmount = value => {
    this.setState(prev => ({amount: prev.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="second-box">
          <div className="profile-div">
            <div className="profile-symbol">
              <p>S</p>
            </div>
            <h1 className="profile-heading">Sarah Williams</h1>
          </div>
          <div className="balance-box">
            <p className="balance-para">Your Balance</p>
            <div>
              <p>{amount}</p>
              <p>in Rupees</p>
            </div>
          </div>
          <div>
            <p className="balance-para withdraw-style">Withdraw</p>
          </div>
          <div>
            <p className="balance-para withdraw-style">
              CHOOSE SUM (IN RUPEES)
            </p>
          </div>
          <div className="repess-box">
            <ul className="underoreder-list">
              {denominationsList.map(each => (
                <DenominationsUser
                  denominations={each}
                  key={each.id}
                  onchangeAmount={this.onchangeAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
