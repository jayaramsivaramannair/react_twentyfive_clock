import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface timerState {
  breakLength: number,
  sessionLength: number,
  timer: {
    minutes: number,
    seconds: number
  }
}


const initialState: timerState = {
  breakLength: 5,
  sessionLength: 25,
  timer: {
    minutes: 25,
    seconds: 0,
  }
}


export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    incrementBreak: (state) => {
      state.breakLength += 1
    },

    decrementBreak: (state) => {
      state.breakLength -= 1
    },

    incrementSession: (state) => {
      state.sessionLength += 1
    },

    decrementSession: (state) => {
      state.sessionLength -= 1
    },

    setTimer : (state) => {
      state.timer.minutes += 1
    },

    runTimer: (state) => {
      if (state.timer.seconds === 0) {
        state.timer.minutes -= 1
        state.timer.seconds = 59
      }
      state.timer.seconds -= 1
    }
  }
})


export const {incrementBreak, decrementBreak, incrementSession, decrementSession, runTimer} = timerSlice.actions
export default timerSlice.reducer