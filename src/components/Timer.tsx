import React, {useEffect} from 'react'
import {RootState} from '../store/store'
import {useSelector} from 'react-redux'

function Timer() {
  const countdown = useSelector((state: RootState) => state.timer.countdown)

  const minutes = (countdown.minutes < 10) ?  (countdown.minutes.toString()).padStart(2, '0'): countdown.minutes;
  const seconds = (countdown.seconds < 10) ? (countdown.seconds.toString()).padStart(2, '0') : countdown.seconds;

  useEffect(() => {
  }, [minutes, seconds])
  
  return (
    <div id="timer-label">
      <p>Session</p>
      <p style={{color: (minutes === '00') ? 'red' : 'aliceblue'}}>{`${minutes}:${seconds}`}</p>
    </div>
  )
}

export default Timer
