import { useDispatch, useSelector } from 'react-redux'

import { incrementCounter, decrementCounter } from './store/slices/counter.slice'

function App() {
  const dispatch = useDispatch()
  // @ts-ignore
  const { count } = useSelector((store) => store.counter)

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-lg">React JS Boilerplate</h1>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            dispatch(incrementCounter())
          }}
          className="px-4 py-2 text-center bg-cyan-400 text-white rounded-md"
        >
          +
        </button>
        <p className="mx-8">{count}</p>
        <button
          type="button"
          onClick={() => {
            dispatch(decrementCounter())
          }}
          className="px-4 py-2 text-center bg-cyan-400 text-white rounded-md"
        >
          -
        </button>
      </div>
    </div>
  )
}

export default App
