import React from 'react'
import {BiUpArrow} from 'react-icons/bi'
import {BiDownArrow} from 'react-icons/bi'
import {RootState} from '../store/store'
import {useSelector, useDispatch} from 'react-redux'
import {incrementSession, decrementSession, incrementTimer, decrementTimer} from '../store/timerSlice'

function SessionLength() {

  const sessionLength = useSelector((state: RootState) => state.timer.sessionLength)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(incrementSession())
    dispatch(incrementTimer())
  }

  const decrementHandler = () => {
    dispatch(decrementSession())
    dispatch(decrementTimer())
  }

  return (
    <div id="session-label">
      <p>Session Length</p>
        <div className="session-icons">
          <div>
            <BiDownArrow id="session-decrement" onClick={() => decrementHandler()}/>
          </div>
          <p id="session-length">{sessionLength}</p>
          <div>
            <BiUpArrow id="session-increment" onClick={() => incrementHandler()}/>
          </div>
        </div>
    </div>
  )
}

export default SessionLength
