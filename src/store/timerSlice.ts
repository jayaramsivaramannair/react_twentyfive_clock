import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface timerState {
  breakLength: number,
  sessionLength: number
  countdown: {
    minutes: number,
    seconds: number
  }
}


const initialState: timerState = {
  breakLength: 5,
  sessionLength: 25,
  countdown: {
    minutes: 25,
    seconds: 0,
  }
}


export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    incrementBreak: (state) => {
      if (state.breakLength === 60) {
        return 
      }
      state.breakLength += 1
    },

    decrementBreak: (state) => {
      if (state.breakLength === 1) {
        return 
      }
      state.breakLength -= 1
    },

    incrementSession: (state) => {
      if (state.sessionLength === 60) {
        return 
      }
      state.sessionLength += 1
    },

    decrementSession: (state) => {
      if(state.sessionLength === 1) {
        return 
      }
      state.sessionLength -= 1
    },

    incrementTimer : (state) => {
      if (state.countdown.minutes === 60) {
        return 
      }
      state.countdown.minutes += 1
    },

    decrementTimer: (state) => {
      if (state.countdown.minutes === 1) {
        return 
      }
      state.countdown.minutes -= 1
    },

    runTimer: (state) => {
      if (state.countdown.minutes === 0 && state.countdown.seconds === 0) {
        return 
      } else if (state.countdown.seconds === 0) {
        state.countdown.minutes -= 1
        state.countdown.seconds = 59
        return 
      } 
      state.countdown.seconds -= 1
    },

    resetTimer: (state) => {
        state.breakLength = 5;
        state.sessionLength = 25;
        state.countdown.minutes = 25;
        state.countdown.seconds = 0;
    }
  }
})


export const {
  incrementBreak, 
  decrementBreak, 
  incrementSession, 
  decrementSession, 
  runTimer, 
  resetTimer,
  incrementTimer, 
  decrementTimer } = timerSlice.actions
export default timerSlice.reducer