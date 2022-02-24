import React from 'react'
import {BiReset} from 'react-icons/bi'
import {FiPlay, FiPause} from 'react-icons/fi'

function Controls() {
  return (
    <div>
      <FiPlay id="start_stop"/>
      <FiPause />
      <BiReset id="reset"/>
    </div>
  )
}

export default Controls
