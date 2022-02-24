import React from 'react'
import {BiUpArrow} from 'react-icons/bi'
import {BiDownArrow} from 'react-icons/bi'
import {RootState} from '../store/store'
import {useSelector, useDispatch} from 'react-redux'
import {incrementBreak, decrementBreak} from '../store/timerSlice'


function BreakLength() {

  const breakLength = useSelector((state: RootState) => state.timer.breakLength)
  const dispatch = useDispatch()

  return (
    <div id="break-label">
      <p>Break Length</p>
      <div className="break-icons">
        <div>
          <BiDownArrow id="break-decrement" onClick={() => dispatch(decrementBreak())}/>
        </div>
        <p id="break-length">{breakLength}</p>
        <div>
          <BiUpArrow id="break-increment" onClick={() => dispatch(incrementBreak())}/>
        </div>
      </div>
    </div>
  )
}

export default BreakLength
