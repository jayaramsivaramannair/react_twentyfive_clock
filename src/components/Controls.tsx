import React from 'react'
import {BiReset} from 'react-icons/bi'
import {FiPlay, FiPause} from 'react-icons/fi'

function Controls() {
  return (
    <div className="controls">
      <div id="start_stop">
        <FiPlay id="start_stop"/>
        <FiPause />
      </div>
      <div id="reset">
        <BiReset />
      </div>
    </div>
  )
}

export default Controls
