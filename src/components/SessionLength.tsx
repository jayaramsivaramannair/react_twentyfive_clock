import React from 'react'
import {BiUpArrow} from 'react-icons/bi'
import {BiDownArrow} from 'react-icons/bi'
import {RootState} from '../store/store'
import {useSelector, useDispatch} from 'react-redux'
import {incrementSession, decrementSession} from '../store/timerSlice'

function SessionLength() {

  const sessionLength = useSelector((state: RootState) => state.timer.sessionLength)
  const dispatch = useDispatch()

  return (
    <div id="session-label">
      <p>Session Length</p>
        <div className="session-icons">
          <div>
            <BiDownArrow id="session-decrement" onClick={() => dispatch(decrementSession())}/>
          </div>
          <p id="session-length">{sessionLength}</p>
          <div>
            <BiUpArrow id="session-increment" onClick={() => dispatch(incrementSession())}/>
          </div>
        </div>
    </div>
  )
}

export default SessionLength
