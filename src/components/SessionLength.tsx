import React from 'react'
import {HiOutlineArrowSmUp} from 'react-icons/hi'
import {HiOutlineArrowSmDown} from 'react-icons/hi'

function SessionLength() {
  return (
    <div id="session-label">
      <p>Session Length</p>
        <div className="session-icons">
          <HiOutlineArrowSmDown id="session-decrement"/>
          <p id="session-length">25</p>
          <HiOutlineArrowSmUp id="session-increment"/>
        </div>
    </div>
  )
}

export default SessionLength
