import React from 'react'
import {BiUpArrow} from 'react-icons/bi'
import {BiDownArrow} from 'react-icons/bi'

function SessionLength() {
  return (
    <div id="session-label">
      <p>Session Length</p>
        <div className="session-icons">
          <BiDownArrow id="session-decrement"/>
          <p id="session-length">25</p>
          <BiUpArrow id="session-increment"/>
        </div>
    </div>
  )
}

export default SessionLength
