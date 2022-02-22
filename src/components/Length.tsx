import React from 'react'
import BreakLength from './BreakLength'
import SessionLength from './SessionLength'

function Length() {
  return (
    <div className="length-adjustment">
      <BreakLength />
      <SessionLength />
    </div>
  )
}

export default Length
