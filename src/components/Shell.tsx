import React from 'react'
import Length from './Length'
import Timer from './Timer'
import Controls from './Controls'

function Shell() {
  return (
    <div className="timer-shell">
      <p>25 + 5 Clock</p>
      <Length />
      <Timer />
      <Controls />
    </div>

  )
}

export default Shell
