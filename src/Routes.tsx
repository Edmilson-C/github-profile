import { Routes as Routs, Route } from 'react-router-dom'

import Home from './pages'

function Routes() {
  return (
    <Routs>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<h1> Page Not Found </h1>} />
    </Routs>
  )
}

export default Routes
