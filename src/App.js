import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AboutPage from './pages/AboutPage'
import HomePages from './pages/HomePages'
import ProductAccessory from './pages/ProductAccessory'
import ProductClothes from './pages/ProductClothes'
import ProductTissu from './pages/ProductTissu'
import ProductVesel from './pages/ProductVesel'
import SingleProductPage from './pages/SingleProductPage'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='/tissu' element={<ProductTissu />} />
        <Route path='/clothe' element={<ProductClothes />} />
        <Route path='/accessory' element={<ProductAccessory />} />
        <Route path='/vesel' element={<ProductVesel />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App