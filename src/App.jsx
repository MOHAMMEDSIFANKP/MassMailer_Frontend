import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import SendMail from './Pages/SendMail'
import PrivateRoutes from './Routers/ProtectedRoutes'
import ProtectedRoutes from './Routers/ProtectedRoutes'
import Loginpage from './Pages/Loginpage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/login' exact element={<Loginpage />} />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path='/' exact element={<Homepage />} />
            <Route path='/send-mail' exact element={<SendMail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
