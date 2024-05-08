import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './app/screens/login'
import { Register } from './app/screens/register'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
