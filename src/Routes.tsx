import { Routes as Routs, Route } from 'react-router-dom'

import App from './App'

function Routes() {
  return (
    <Routs>
      <Route path="/" element={<App />} />
      <Route path="/*" element={<h1> Page Not Found </h1>} />
    </Routs>
  )
}

export default Routes
