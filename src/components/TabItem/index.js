// Write your code here
import {Component} from 'react'
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onCLickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeBtnClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeBtnClassName}`}
        onClick={onCLickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
