
import { Header } from './components/Header/Header'
import { ProductBox } from './components/Products/ProductBox'
import ProductLayout from './components/Products/ProductLayout'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<ProductLayout/>}/>
      <Route path="/product/:id" element={<ProductBox/>}/>
    </Routes>
    </>
  )
}

export default App
