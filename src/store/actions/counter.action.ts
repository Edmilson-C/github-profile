import { Counter } from '../../data/types'

const incrementCounter = (state: Counter) => {
  state.count += 1
}

const decrementCounter = (state: Counter) => {
  if (state.count > 0) {
    state.count -= 1
  }
}

export default { incrementCounter, decrementCounter }
