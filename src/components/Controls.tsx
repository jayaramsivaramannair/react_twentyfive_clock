import React from 'react'
import {BiReset} from 'react-icons/bi'
import {FiPlay, FiPause} from 'react-icons/fi'
import {useDispatch} from 'react-redux'
import {resetTimer} from '../store/timerSlice'

function Controls() {
  const dispatch = useDispatch()

  return (
    <div className="controls">
      <div id="start_stop">
        <FiPlay id="start_stop"/>
        <FiPause />
      </div>
      <div id="reset">
        <BiReset onClick={() => dispatch(resetTimer())}/>
      </div>
    </div>
  )
}

export default Controls
