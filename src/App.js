import logo from './logo.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import Login from './Login/Login'
import Homepage from './Homepage/Homepage'
import Footer from './Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Seller from './Seller/Seller'
import Product from './Product/Product'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {/* <Login /> */}
      <Product />
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/seller" element={<Seller />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
