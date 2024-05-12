// Write your code here
import './index.css'

const DenominationsUser = props => {
  const {denominations, onchangeAmount} = props
  const {value} = denominations

  const onChanges = () => {
    onchangeAmount(value)
  }

  return (
    <li className="list-div">
      <div className="button-container">
        <button type="button" onClick={onChanges} className="button">
          {value}
        </button>
      </div>
    </li>
  )
}
export default DenominationsUser
