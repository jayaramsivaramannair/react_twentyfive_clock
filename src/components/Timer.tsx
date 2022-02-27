import React, {useEffect} from 'react'
import {RootState} from '../store/store'
import {useSelector, useDispatch} from 'react-redux'
import {setBreak, setSession, startBreak, startSession} from '../store/timerSlice'

function Timer() {
  const countdown = useSelector((state: RootState) => state.timer.countdown)
  const dispatch = useDispatch()
  const breakOn = useSelector((state: RootState)=> state.timer.breakOn)
  const sessionOn = useSelector((state: RootState) => state.timer.sessionOn)

  const minutes = (countdown.minutes < 10) ?  (countdown.minutes.toString()).padStart(2, '0'): countdown.minutes;
  const seconds = (countdown.seconds < 10) ? (countdown.seconds.toString()).padStart(2, '0') : countdown.seconds;

  useEffect(() => {
    dispatch(setSession(true))
  }, [dispatch])

  useEffect(() => {
    if(minutes === '00' && seconds === '00' && sessionOn) {
      dispatch(setSession(false))
      dispatch(setBreak(true))
      dispatch(startBreak())
    } else if (minutes === '00' && seconds === '00' && breakOn) {
      dispatch(setBreak(false))
      dispatch(setSession(true))
      dispatch(startSession())
    }
  }, [minutes, seconds, dispatch, sessionOn, breakOn])
  
  return (
    <div id="timer-label" style={{color: (minutes === '00') ? 'red' : 'aliceblue'}}>
      {
        (breakOn) ? <p>Break</p> : <p>Session</p>
      }
      <p >{`${minutes}:${seconds}`}</p>
    </div>
  )
}

export default Timer
