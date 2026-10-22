import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/shared/Footer"
import Header from "./components/shared/Header"
import Home from "./pages/Home"
import Cart from "./components/Cart"
import ProductList from "./pages/ProductList"

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/login" element={<p>Login</p>}/> */}
            <Route path="/produtos" element={<ProductList/>}/>
            <Route path="/carrinho" element={<Cart/>}/>
          </Routes>
        </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
