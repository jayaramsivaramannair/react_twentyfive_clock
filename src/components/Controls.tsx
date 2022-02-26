import React, {useState} from 'react'
import {BiReset} from 'react-icons/bi'
import {FiPlay, FiPause} from 'react-icons/fi'
import {RootState} from '../store/store'
import {useDispatch, useSelector} from 'react-redux'
import {resetTimer, runTimer } from '../store/timerSlice'

function Controls() {
  const [timerID, setTimerID] = useState<number>(0)
  const countdown = useSelector((state: RootState) => state.timer.countdown)
  const dispatch = useDispatch()

  const startTimer = () => {
    dispatch(runTimer())
  }

  const startPlusStopFunction = () => {
    if (countdown.minutes === 0 && countdown.seconds === 0) {
      return 
    }
    
    if (timerID !== 0) {
      window.clearInterval(timerID)
      setTimerID(0)
      return 
    }
   //Checks if the countdown is already running or not
   let ID = window.setInterval(startTimer, 1000)
   setTimerID(ID)
  }

  console.log(countdown)
  return (
    <div className="controls">
      <div id="start_stop" onClick={startPlusStopFunction}>
        <FiPlay/>
        <FiPause />
      </div>
      <div id="reset">
        <BiReset onClick={() => dispatch(resetTimer())}/>
      </div>
    </div>
  )
}

export default Controls
