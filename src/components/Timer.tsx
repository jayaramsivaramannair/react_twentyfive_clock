import React from 'react'
import {RootState} from '../store/store'
import {useSelector} from 'react-redux'

function Timer() {
  const countdown = useSelector((state: RootState) => state.timer.countdown)

  const minutes = (countdown.minutes < 10) ?  (countdown.minutes.toString()).padStart(2, '0'): countdown.minutes;
  const seconds = (countdown.seconds < 10) ? (countdown.seconds.toString()).padStart(2, '0') : countdown.seconds;
  
  return (
    <div id="timer-label">
      <p>Session</p>
      <p id="time-left">{`${minutes}:${seconds}`}</p>
    </div>
  )
}

export default Timer
