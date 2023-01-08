import { createSlice } from '@reduxjs/toolkit'

import counterActions from '../actions/counter.action'

const initialState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ...counterActions
  }
})

export const { incrementCounter, decrementCounter } = counterSlice.actions

export default counterSlice.reducer
