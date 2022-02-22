import React from 'react'
import {HiOutlineArrowSmUp} from 'react-icons/hi'
import {HiOutlineArrowSmDown} from 'react-icons/hi'

function BreakLength() {
  return (
    <div id="break-label">
      <p>Break Length</p>
      <div className="break-icons">
        <HiOutlineArrowSmDown id="break-decrement"/>
        <p id="break-length">5</p>
        <HiOutlineArrowSmUp id="break-increment"/>
      </div>
    </div>
  )
}

export default BreakLength
